import Link from 'next/link';
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';



export default function ResetPage({query}) {
    if(!query?.token){
        return (
            <div>
                <h2>Please request a reset token.</h2>
                <RequestReset />
            </div>
        )
    };
    return (
        <div>
            <p>Reset Your Password {query.token}</p>
            <Reset token={query.token}/>
        </div>
    )
};