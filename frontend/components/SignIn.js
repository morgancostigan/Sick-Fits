import Form from './styles/Form';
import useForm from "../lib/useForm";
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const SIGN_IN_MUTATION = gql`
    mutation SIGN_IN_MUTATION(email: String!, password: String!) {
        ... on UserAuthenticationWithPasswordSuccess {
            item {
                id
                name
                email
            }
        }
    }
`;


export default function SignIn() {

    const { inputs, handleChange, clearForm, resetForm } = useForm({
        email: '',
        password: '',
    });
    // const [createProduct, { loading, error, data }] = useMutation(SIGN_IN_MUTATION, {
    //     variables: inputs,
    // });

    function handleSubmit(e){
        e.preventDefault(); //stop form from submitting early
        //send email and password to graphQL API

    };

    return (
        //method POST to prevent password from showing in URL, history, and logs
        <Form method="post" onSubmit={handleSubmit}>
            {/* <DisplayError error={error} /> */}
            <h2>Go Ahead And Sign On In</h2>
            {/* <fieldset disabled={loading} aria-busy={loading}> */}
            <fieldset>

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