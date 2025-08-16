import { FaLink, FaStar, FaUtensils, FaInfo, FaEye } from "react-icons/fa6";
import { Link } from "react-router";

export default function ReposItem({ repos }) {
    const {
        full_name,
        html_url,
        forks_count,
        stargazers_count,
        watchers_count,
        open_issues
    } = repos;
    
    return (
        <div className="bg-stone-200 flex gap-3 p-5 rounded-2xl items-center">
            <a href={html_url} target="_blank"><FaLink className="" /></a>
            <div>
                <span className="">{full_name}</span>
                <div>
                    {/* Watchers Count */}
                    <span className="bg-sky-100 text-sky-800 text-xs font-medium me-2 px-2 py-0.5 rounded-sm dark:bg-sky-900 dark:text-sky-300">
                        <FaEye className="inline mb-1 mr-1" />
                        {watchers_count}
                    </span>

                    {/* Star Count */}
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
                        <FaStar className="inline mb-1 mr-1" />
                        {stargazers_count}
                    </span>

                    {/* Open Issue */}
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">
                        <FaInfo className="inline mb-1 mr-1" />
                        {open_issues}
                    </span>

                    {/* Fork */}
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
                        <FaUtensils  className="inline mb-1 mr-1" />
                        {forks_count}
                    </span>
                </div>
            </div>
        </div>
    );
}