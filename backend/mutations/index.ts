import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";

//fake out vsCode for GraphQL highlighting with a fake GQL tagged template literal
const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
    //REMOVE THIS GQL vvv
    typeDefs: graphql`
        type Mutation {
            addToCart(productID: ID): CartItem
        }
    `,
    resolvers: {
        Mutation: {
            addToCart: function(){
                //custom code goes here
                console.log('add add adding to the cart cart cart');
                
            }
        }
    }


});