import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const GridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

`;


export default function SignInPage() {
    return (
        <GridStyles>
            <SignUp />
            <SignIn />
        </GridStyles>
    )
}