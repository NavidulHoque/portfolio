"use client"

import ListItem from "./navbar/ListItem"
import { RxCross2 } from "react-icons/rx";

export default function Sidebar({ listItems, isSidebarOpen, setIsSidebarOpen }) {

    return (
        <ul className={`bg-[#1f0016] text-white w-[200px] h-full flex flex-col gap-y-4 fixed top-0 right-0 z-20 py-[20px] px-[20px] transition-all duration-500 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>

            <RxCross2 
                className="self-end text-white w-[30px] h-[30px] cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
            />

            {listItems.map(
                item => (
                    <ListItem key={item.label} item={item} />
                )
            )}

        </ul>
    )
}
