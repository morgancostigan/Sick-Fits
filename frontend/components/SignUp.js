import Form from './styles/Form';
import useForm from "../lib/useForm";
import DisplayError from './ErrorMessage';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { CURRENT_USER_QUERY } from './User';

const SIGN_UP_MUTATION = gql`
    mutation SIGN_UP_MUTATION($email: String!, $password: String!, $name: String!) {
        createUser(data: {
            email: $email,
            name: $name,
            password: $password
        }){
            id
            name
            email
        }
    }
`;

export default function SignUp() {

    const { inputs, handleChange, clearForm, resetForm } = useForm({
        email: '',
        name: '',
        password: '',
    });
    const [signup, { data, loading, error }] = useMutation(SIGN_UP_MUTATION, {
        variables: inputs,
        // refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });

    async function handleSubmit(e) {
        e.preventDefault(); //stop form from submitting early
        //send email and password to graphQL API
        // await signin();
        //const res for logging only
        //catch prevents popup dialog in favor of console
        const res = await signup().catch(console.error)
        // console.log({ res });
        // console.log({data, error, loading});
        
        resetForm();
    };

    return (
        //method POST to prevent password from showing in URL, history, and logs
        <Form method="post" onSubmit={handleSubmit}>
            {/* <DisplayError error={error} /> */}
            <h2>..or Get Signed Up</h2>
            <DisplayError error={error} />

            <fieldset disabled={loading} aria-busy={loading}>
                {
                data?.createUser && <div>
                        <p>You Are Now One Of Us!</p>
                        <p>{data.createUser.email} is now registered. Go ahead and sign in!</p>
                    </div>
                }
                {/* <fieldset> */}
                <label htmlFor="name">
                    Name
                    <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        placeholder="What Are You Called?"
                        autoComplete="name"
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>
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
                    Password
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="...And We Will Know You By The Password You Enter"
                        autoComplete="password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Sign Up</button>
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