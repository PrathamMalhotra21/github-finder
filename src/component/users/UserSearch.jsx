import { useState, useContext } from "react";
import { FaSearch, FaTrashAlt } from 'react-icons/fa';
import GithubContext from '../context/github/githubContext'
import AlertContext from "../context/alert/AlertContext";
import { searchUsers } from "../context/github/GithubAction";

export default function UserSearch() {
    const { users, dispatch } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);
    const [text, setText] = useState("");

    const handleChange = (e) => setText(e.target.value.trim());
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text === "") {
            setAlert("Please enter something", "error");
        } else {
            const items = await searchUsers(text);
            dispatch({
                type: 'GET_USERS',
                payload: items
            });
            setText('');
        }
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 mb-8 gap-8">
            <div className="flex">
                <form className="flex gap-5 flex-1" onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} className="border border-gray-200 p-2 rounded-md flex-1" placeholder="Search" value={text} />
                    <button type="submit" className="shadow cursor-pointer bg-gray-100 shadow ring ring-gray-200 rounded-md hover:bg-sky-800 hover:text-gray-50 px-4 py-2">
                        <FaSearch className="inline mr-2 mb-1" />
                        Search
                    </button>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button className="block shadow bg-red-500 cursor-pointer ring ring-red-800 rounded-md hover:bg-rose-800 font-medium text-gray-50 px-4 py-2" onClick={() => {
                        dispatch({
                            type: 'CLEAR_USER'
                        })
                    }}>
                        <FaTrashAlt className="inline mr-2 mb-1" />
                        Clear
                    </button>
                </div>
            )}
        </div>

    );
}