import { useContext, useEffect } from "react";
import GithubContext from "../context/github/githubContext";
import ReposItem from "./ReposItem";

export default function ReposList({ user_name }) {
    const { repos } = useContext(GithubContext);

    return (
        <div className="">
            <h2>Latest Repositories</h2>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {repos.map(item => (
                    <ReposItem repos={item}  key={item.id} />
                ))}
            </div>
        </div>
    );
}