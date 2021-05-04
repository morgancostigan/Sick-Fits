import { User } from './schemas/User';
import { createAuth } from '@keystone-next/auth';
import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';

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
    }
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
        //TODO Add data seeding here
    },
    lists: createSchema({
        //schema items go here
        User
    }),
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