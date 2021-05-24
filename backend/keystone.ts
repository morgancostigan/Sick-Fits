import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import { extendGraphqlSchema } from './mutations/index';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { CartItem } from './schemas/CartItem';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';


const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, //how long does a user's sign in cookie stay active
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password']
        //TODO add roles
    },
    passwordResetLink: {
        async sendToken(args){
        //send the email
        await sendPasswordResetEmail(args.token, args.identity);
        },
    },
});

export default withAuth(config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
        async onConnect(keystone) {
            console.log("Connected to database");
            if (process.argv.includes('--seed-data')) {
                await insertSeedData(keystone);
            };
            
        },
    },
    lists: createSchema({
        //schema items go here
        User,
        Product,
        ProductImage,
        CartItem,
    }),
    extendGraphqlSchema,
    ui: {
        //show UI only to users who get past this
        isAccessAllowed: ({ session }) => {
            // console.log({session});
            return !!session?.data;
        },
    },
    session: withItemData(statelessSessions(sessionConfig),{
        //graphQL 
        User: 'id',
    }),
}));