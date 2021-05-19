import Form from './styles/Form';
import useForm from "../lib/useForm";
import DisplayError from './ErrorMessage';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { CURRENT_USER_QUERY } from './User';

const REQUEST_RESET_MUTATION = gql`
    mutation REQUEST_RESET_MUTATION($email: String!) {
        sendUserPasswordResetLink(email: $email){
            code
            message
        }
    }
`;

export default function RequestReset() {

    const { inputs, handleChange, clearForm, resetForm } = useForm({
        email: '',
    });
    const [requestReset, { data, loading, error }] = useMutation(REQUEST_RESET_MUTATION, {
        variables: inputs,
        // refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });

    async function handleSubmit(e) {
        e.preventDefault(); //stop form from submitting early
        //send email and password to graphQL API
        // await signin();
        //const res for logging only
        //catch prevents popup dialog in favor of console
        const res = await requestReset().catch(console.error);
        console.log({ res });
        console.log({ data, error, loading })

        // resetForm();
    };

    return (
        //method POST to prevent password from showing in URL, history, and logs
        <Form method="post" onSubmit={handleSubmit}>
            {/* <DisplayError error={error} /> */}
            <h2>Reset Password</h2>
            <DisplayError error={error} />

            <fieldset disabled={loading} aria-busy={loading}>
                {
                    data?.sendUserPasswordResetLink === null && (
                        <p>Reset link sent to {inputs.email}.</p>
                    )
                }
                {/* <fieldset> */}

                <label htmlFor="email">
                    Email
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="What Email Address Are You Using?"
                        autoComplete="email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Send Reset Link</button>
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