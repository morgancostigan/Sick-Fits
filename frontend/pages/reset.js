import Link from 'next/link';

export default function ResetPage({query}) {
    if(!query?.token){
        return (
            <div>
                <p>Please visit Sign In page to send a password reset toekn to your email.</p>
                <button type="button">
                    <Link href="/signin">Sign In</Link>
                </button>
                
            </div>
        )
    }
    return (
        <div>
            <p>Reset Your Password {query.token}</p>
        </div>
    )
};