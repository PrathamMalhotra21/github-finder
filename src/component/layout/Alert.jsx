import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
import { IoIosAlert } from "react-icons/io";

export default function Alert() {
    const { alert } = useContext(AlertContext);

    return (alert !== null) && (
        <div className="flex items-center gap-1 mb-3">
            { alert.type === 'error' && (
                <IoIosAlert className="text-xl" color="red" />
            )}
            <span className="font-semibold tracking-wide">{alert.msg}</span>
        </div>
    );
}