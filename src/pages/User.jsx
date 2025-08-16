import { useContext, useEffect } from "react";
import GithubContext from "../component/context/github/githubContext"
import { useParams, Link } from 'react-router';
import { IoArrowBackOutline,IoPeople } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import ReposList from "../component/repos/ReposList";
import { getUser, getRepos } from "../component/context/github/GithubAction";

export default function User() {
    const { user, dispatch } = useContext(GithubContext)
    const params = useParams()
    const userName = params.login;

    useEffect(() => {
        const getUserData = async () => {
            const data = await getUser(userName);
            dispatch({
                type: 'GET_USER',
                payload: data
            });
            const reposData = await getRepos(userName);
            dispatch({
                type: 'GET_REPOS',
                payload: reposData
            });
        }
        getUserData();
    }, []);

    return (
        <div className="flex flex-col">
            <div className="mb-5">
                <Link to="/" className="px-3 py-2 rounded-md hover:shadow cursor-pointer hover:bg-gray-200 mb-3">
                    <IoArrowBackOutline className="inline mb-1 mr-2" />
                    Back To Search
                </Link>
            </div>
            <div className="flex flex-wrap gap-5 md:gap-20">
                {/* Image */}
                <div className="">
                    <figure>
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="w-50 h-50 object-fit rounded-md" />
                    </figure>
                </div>
                {/*  */}
                <div className="flex-1">
                    <div className="flex gap-3 items-center">
                        <div className="">
                            <h2 className="text-3xl font-bold">{user.name}</h2>
                            <p className="text-md font-medium text-gray-500">{user.login}</p>
                        </div>
                        <div className="bg-red-200 text-red-800 px-2 px-1 rounded-sm text-sm">
                            {user.type}
                        </div>
                        <div className="bg-green-200 text-green-800 px-2 px-1 rounded-sm text-sm">
                            {user.hireable && ("Hireable")}
                        </div>
                    </div>

                    <p className="mt-3 mb-5">{user.bio}</p>
                    <a target="_blank" href={user.html_url} className="my-3 px-3 py-2 rounded-md shadow border border-gray-400 text-medium cursor-pointer bg-gray-200 hover:bg-slate-200">Visit Github Profile</a>
                    <ul className="mt-6 flex flex-wrap text-sm text-gray-700">
                        <li className="flex flex-col p-2 rounded-s-md bg-slate-100">
                            <h5 className="text-gray-500 font-medium">Location</h5>
                            <p className="text-base font-semibold">{user.location || "Not available"}</p>
                        </li>
                        <li className="flex flex-col p-2 bg-slate-100 border-x border-gray-300">
                            <h5 className="text-gray-500 font-medium">Website</h5>
                            <a
                                href={`https://${user.blog}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline break-all"
                            >
                                {user.blog || "Not available"}
                            </a>
                        </li>
                        <li className="flex flex-col p-2 rounded-e-md bg-slate-100">
                            <h5 className="text-gray-500 font-medium">Twitter</h5>
                            <a
                                href={`https://x.com/${user.twitter_username}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                @{user.twitter_username || "Not available"}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-slate-200 m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 overflow-hidden rounded-md shadow">
                {/* Followers */}
                <div className="flex items-center p-5 justify-around border border-gray-300">
                    <div>
                        <p className="text-gray-600 font-medium">Followers</p>
                        <h3 className="text-2xl font-bold">{user.followers}</h3>
                    </div>
                    <IoIosPeople className="inline mb-1 w-10 h-10" color="purple" />
                </div>
                {/* Following */}
                <div className="flex items-center p-5 justify-around border border-gray-300">
                    <div>
                        <p className="text-gray-600 font-medium">Following</p>
                        <h3 className="text-2xl font-bold">{user.following}</h3>
                    </div>
                    <IoPeople className="inline mb-1 w-10 h-10" color="purple" />
                </div>
                {/* Public Repos */}
                <div className="flex items-center p-5 justify-around border border-gray-300">
                    <div>
                        <p className="text-gray-600 font-medium">Public Repos</p>
                        <h3 className="text-2xl font-bold">{user.public_repos}</h3>
                    </div>
                    <IoPeople className="inline mb-1 w-10 h-10" color="purple" />
                </div>
                {/* Public Repos */}
                <div className="flex items-center p-5 justify-around border border-gray-300">
                    <div>
                        <p className="text-gray-600 font-medium">Public Gists</p>
                        <h3 className="text-2xl font-bold">{user.public_gists}</h3>
                    </div>
                    <IoPeople className="inline mb-1 w-10 h-10" color="purple" />
                </div>
            </div>

            <ReposList user_name={userName} />
        </div>
    )
}