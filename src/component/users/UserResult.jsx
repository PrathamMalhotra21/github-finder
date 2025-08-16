import { useContext } from 'react';
import UserItems from './UserItems';
import GithubContext from '../context/github/githubContext';

export default function UserResult() {
    const {users, isLoading} = useContext(GithubContext);

    if (!isLoading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                {users.map((user, index) => (
                    <UserItems key={index} user={user} />
                ))}
            </div>
        );
    } else {
        return (
            <div>Loading....</div>
        );
    }
}