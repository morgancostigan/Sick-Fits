import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <div className="bar">
                <Link href="/">SickFitz</Link>
            </div>
            <Nav />
            <div className="sub-bar">
                <p>SEARCHY SEARCHY</p>
            </div>
        </header>
    );
}