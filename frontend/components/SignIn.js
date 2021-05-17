import Form from './styles/Form';
import useForm from "../lib/useForm";
import DisplayError from './ErrorMessage';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_IN_MUTATION = gql`
    mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password){
            ... on UserAuthenticationWithPasswordSuccess {
                item {
                    id
                    name
                    email
                }
            },
            ... on UserAuthenticationWithPasswordFailure {
                code
                message
            }
        }
    }
`;

export default function SignIn() {

    const { inputs, handleChange, clearForm, resetForm } = useForm({
        email: '',
        password: '',
    });
    const [signin, { data, loading }] = useMutation(SIGN_IN_MUTATION, {
        variables: inputs,
        refetchQueries: [{query: CURRENT_USER_QUERY}]
    });

    async function handleSubmit(e){
        e.preventDefault(); //stop form from submitting early
        //send email and password to graphQL API
        // await signin();
        //const res for logging only
        const res = await signin()
        console.log({res});
        resetForm();
    };
    //error is weird here.  if there is error data that matches the typename, then display it...  else, undefined
    const error = data?.authenticateUserWithPassword?.__typename === "UserAuthenticationWithPasswordFailure" ? data?.authenticateUserWithPassword : undefined;

    return (
        //method POST to prevent password from showing in URL, history, and logs
        <Form method="post" onSubmit={handleSubmit}>
            {/* <DisplayError error={error} /> */}
            <h2>Go Ahead And Sign On In</h2>
            <DisplayError error={error} />

            <fieldset disabled={loading} aria-busy={loading}>
            {/* <fieldset> */}

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