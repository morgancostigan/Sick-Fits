import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const CURRENT_USER_QUERY = gql`
    query {
        authenticatedItem {
            ... on User {
                id
                name
                email
                # TODO query cart
            }
        }
    }
`;

export function useUser() {
    const {data} = useQuery(CURRENT_USER_QUERY);
    return data?.authenticatedItem;
}