import Form from './styles/Form';
import useForm from "../lib/useForm";
import DisplayError from './ErrorMessage';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { CURRENT_USER_QUERY } from './User';

const RESET_MUTATION = gql`
    mutation RESET_MUTATION(
            $email: String!, 
            $token: String!, 
            $password: String!
    ){
        redeemUserPasswordResetToken(
            email: $email,
            password: $password,
            token: $token
        ){
            code
            message
        }
    }
`;

export default function ResetPassword({ token }) {

    const { inputs, handleChange, clearForm, resetForm } = useForm({
        email: '',
        password: '',
        token,
    });
    const [resetPassword, { data, loading }] = useMutation(RESET_MUTATION, {
        variables: inputs,
    });

    //if rreturned data includes a code, that IS the error, else no error
    const error = data?.redeemUserPasswordResetToken?.code 
    ? data.redeemUserPasswordResetToken 
    : undefined;
    console.log({error});
    

    async function handleSubmit(e) {
        e.preventDefault(); //stop form from submitting early
        //send email and password to graphQL API
        // await signin();
        //const res for logging only
        //catch prevents popup dialog in favor of console
        const res = await resetPassword().catch(console.error);
        // console.log({ res });
        // console.log({ data, error, loading })

        // resetForm();
    };

    return (
        //method POST to prevent password from showing in URL, history, and logs
        <Form method="post" onSubmit={handleSubmit}>
            {/* <DisplayError error={error} /> */}
            <h2>Choose New Password</h2>
            <DisplayError error={error} />

            <fieldset disabled={loading} aria-busy={loading}>
                {
                    data?.redeemUserPasswordResetToken === null && (
                        <p>Password Successfully Reset, Please Sign In.</p>
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
                <label htmlFor="password">
                    New Password
                    <input
                        required
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Please Enter a New Password"
                        autoComplete="password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
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