import Router from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        endSession
    }
`;

export default function SignOut({children}){

    const [signout] = useMutation(SIGN_OUT_MUTATION, {
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });

    return (
        <button type="button" onClick={() => {
            signout();
            console.log('Okay, Luv ya, Buh Bye!');
            Router.push({
                pathname: `/products`,
            });
        }}>Sign Out</button>
    )
};
