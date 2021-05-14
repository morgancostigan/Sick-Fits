import Form from './styles/Form';
import useForm from "../lib/useForm";
import { useQuery } from '@apollo/client';


export default function SignIn() {

    const { inputs, handleChange, clearForm, resetForm } = useForm({
        email: '',
        password: '',
    });
    const [createProduct, { loading, error, data }] = useQuery(CREATE_PRODUCT_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    });

    return (
        //method POST to prevent password from showing in URL, history, and logs
        <Form method="post" onSubmit={async (e) => {
            e.preventDefault();
            // console.log({inputs});
            //submit input fields to backend
            const res = await createProduct();
            clearForm();
            //Go to the new product's page
            Router.push({
                pathname: `/product/${res.data.createProduct.id}`,
            })
        }}>
            <DisplayError error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="email">
                    Email
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Please Enter Your Email"
                        autoComplete="email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="..And Your Password"
                        autoComplete="password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Sign In</button>
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