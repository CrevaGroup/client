import { useSelector } from "react-redux";

import { Alert } from "flowbite-react"

function AlertNotif() {
    const popup = useSelector(state => state.popup)

    return (
        <div>
            {popup.type == 'NOTIF' && <Alert className="text-purple-700 bg-purple-200 border-purple-500 dark:bg-purple-200 dark:text-purple-800">
                <span>{popup.title}</span>{popup.message}
            </Alert>}
            {popup.type == 'ERROR' && <Alert className="text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800">
                <span>{popup.title}</span>{popup.message}
            </Alert>}
            {popup.type == 'ALERT' && <Alert className="text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800">
                <span>{popup.title}</span>{popup.message}
            </Alert>}
        </div>
    )
}

export default AlertNotif;