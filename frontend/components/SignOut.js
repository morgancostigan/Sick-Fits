import Form from './styles/Form';
import useForm from "../lib/useForm";
import DisplayError from './ErrorMessage';
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        endSession
    }
`;

export default function SignOut({children}){
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        email: '',
        password: '',
    });
    const [signout, { data, loading }] = useMutation(SIGN_OUT_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });

    async function handleSubmit(e) {
        e.preventDefault(); //stop form from submitting early
        //send email and password to graphQL API
        // await signin();
        //const res for logging only
        const res = await signout()
        console.log({ res });
        resetForm();
    };


    return (

                <button type="submit">Sign Out</button>

    )






}
