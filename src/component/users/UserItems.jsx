import { Link } from 'react-router';

export default function UserItems({ user: {login, avatar_url} }) {
    return (
        <div className='flex gap-2 hover:bg-gray-50 border border-gray-300 p-3 rounded-xl hover:shadow-sm'>
            <div>
                <img src={avatar_url} alt="" className='rounded-full w-14 h-14'/>
            </div>
            <div>
                <h2 className='-mb-2 mt-1 text-lg font-medium'>{login}</h2>
                <Link className='hover:text-gray-300 text-gray-600 text-sm font-medium' to={`/user/${login}`}>Visit Profile</Link>
            </div>
        </div>
    );
}