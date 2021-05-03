import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, //how long does a user's sign in cookie stay active
    secret: process.env.COOKIE_SECRET,
};

export default config({
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
    }),
    ui: {
        //TODO change this later for roles
        isAccessAllowed: () => true,
    },
    //TODO Add session values here
});