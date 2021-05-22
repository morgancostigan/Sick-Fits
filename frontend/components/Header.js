import Link from 'next/link';
import Nav from './Nav';
import Cart from '../components/Cart';
import styled from 'styled-components';

const Logo = styled.h1`
    background: red;
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding: .5rem 1rem;
    }
`;

const HeaderStyles = styled.header`
    .bar {
        border-bottom: 10px solid var(--black, black);
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
    }

    .sub-bar {
        display: grid;
        grid-template-columns: auto 1fr;
        border-bottom: 1px solid var(--black, black);

    }
`;

export default function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
                <Logo>
                    <Link href="/">Sick Fits</Link>
                </Logo>
                <Nav />

            </div>
            <div className="sub-bar">
                <p>SEARCHY SEARCHY</p>
            </div>
            <Cart />
        </HeaderStyles>
    );
}