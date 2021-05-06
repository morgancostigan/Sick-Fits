import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
        # which variables (and their types) are passed in?
        $name: String!
        $description: String!
        $price: Int!
        $image: Upload
    ) {
        createProduct (data:{
            name: $name
            price: $price
            description: $description
            status: "available"
            photo: {
                create: {
                    image: $image
                    alttext: $name
                }
            }
        }){
            id
            description
            price
            name
            photo
        }
    }
`;

export default function CreateProduct() {
    const {inputs, handleChange, clearForm, resetForm} = useForm({
        image: '',
        name: '',
        price: '',
        description: '',
    });
    const [createProduct, {loading, error, data}] = useMutation(CREATE_PRODUCT_MUTATION, {
        variables: inputs,
    });
    
    return (
        <Form onSubmit={ async (e) => {
            e.preventDefault();
            console.log({inputs});
            //submit input fields to backend
            const res = await createProduct();
            console.log({res});
            
            
        }}>
            <DisplayError />
            <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="image">
                    Image
                    <input
                        required 
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                    />
                </label>
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
                <button type="submit">+ Add Product</button>
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
};
