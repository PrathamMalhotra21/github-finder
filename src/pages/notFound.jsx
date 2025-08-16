import { Link } from 'react-router';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="text-center">
            <h1 className="text-8xl font-bold mb-5">Oops!</h1>
            <h2 className='my-5 text-xl text-gray-700'>404 - Page Not Found</h2>
            <Link className='inline bg-rose-800 text-gray-100 p-3 rounded-lg hover:bg-rose-900' to="/" >
                <FaHome className='inline mb-1 mr-2' />
                Back to home
            </Link>
        </div>
    );
}