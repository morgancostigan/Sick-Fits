import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Form from '../components/styles/Form';
import useForm from "../lib/useForm";
import DisplayError from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        Product (where: {
            id: $id
        }) 
        {
            id
            name
            price
            description
            photo {
                id
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!
        $name: String
        $description: String
        $price: Int
    ) {
        updateProduct (
            id: $id,
            data: {
                name: $name,
                description: $description,
                price: $price,
            }
        ) {
            id
            name
            description
            price
        }
    }
`;
 

export default function UpdateProduct({id}) {

    //TODO
    //get existing product
    const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, {
        variables: {id},
    });
    
    //mutation to update, including renaming res variables to not conflict with above
    const [updateProduct, { 
        data: updateData, 
        error: updateError, 
        loading: updateLoading }] = 
        useMutation(UPDATE_PRODUCT_MUTATION);
    //create state for form inputs 
    const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);
    // console.log(inputs);
    
    if (loading) return <p>Loading...</p>

    //form to handle updates

    return (
        <Form onSubmit={async (e) => {
            e.preventDefault();
            const res = await updateProduct({
                variables: {
                    id: id,
                    name: inputs.name,
                    price: inputs.price,
                    description: inputs.description,
                },
            }).catch(console.error);
            console.log({res});
            

            //TODO handle submit

            // // console.log({inputs});
            // //submit input fields to backend
            // const res = await createProduct();
            // clearForm();
            // //Go to the new product's page
            // Router.push({
            //     pathname: `/product/${res.data.createProduct.id}`,
            // })
        }}>
            <DisplayError error={error || updateError} />
            <fieldset disabled={updateLoading} aria-busy={updateLoading}>

                <label htmlFor="name">
                    Name It!
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="price">
                    Price It!
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        value={inputs.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Describe It!
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={inputs.description}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Bop It!
                </label>
                <button type="submit">Update Product</button>
            </fieldset>

            {/* //EXAMPLE methods */}
            {/* <button type='button' onClick={clearForm}>
                Clear Form
            </button>
            <button type='button' onClick={resetForm}>
                Reset Form
            </button> */}

        </Form>
    )
}