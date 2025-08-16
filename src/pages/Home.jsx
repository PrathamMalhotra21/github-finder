import UserResult from "../component/users/UserResult"
import UserSearch from "../component/users/UserSearch"

export default function Home() {
    return <div>
        <div>
            <UserSearch />
            <UserResult />
        </div>
    </div>
}