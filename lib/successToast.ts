"use client"

import { Bounce, toast } from "react-toastify";

export default function successToast(message: string) {
  return (
    toast.success(message, {
        position: "top-right",
        autoClose: 2000,
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
