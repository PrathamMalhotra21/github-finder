import { Link } from "react-router";
import { FaGithub  } from 'react-icons/fa';

export default function Navbar() {
    const title = "Github";

    return (
        <nav className="bg-gray-100 ">
            <div className="container flex py-3 mx-auto">
                <div className="flex-none px-2 m-2">
                        <FaGithub className="inline pr-2 text-3xl" />
                        <Link to="/" className="text-lg font-bold align-middle">
                            {title}
                        </Link>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to="/" className="btn">Home</Link>
                        <Link to="/about" className="btn">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}