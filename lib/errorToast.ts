

import { Bounce, toast } from "react-toastify";

export default function errorToast(message: string) {
  return (
    toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    })
  )
}
