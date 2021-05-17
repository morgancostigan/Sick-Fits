import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Grid = styled.div`

`;


export default function SignInPage() {
    return (
        <div>
            <SignUp />
            <SignIn />
        </div>
    )
}