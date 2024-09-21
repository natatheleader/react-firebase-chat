import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
    return (
        <div className=''>
            <ToastContainer
                position="bottom-right"
                // autoClose={5000}
                // hideProgressBar={false}
                // newestOnTop={false}
                // closeOnClick
                // rtl={false}
                // pauseOnFocusLoss
                // draggable
                // pauseOnHover
            />
        </div>
    )
}

export default Notification;