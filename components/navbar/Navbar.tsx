import { Item } from "@/app/page";
import Bar from "./Bar";
import Button from "./Button";
import ListItem from "./ListItem";
import ShowTheme from "./ShowTheme";

interface Prop {
  contactRef: React.RefObject<HTMLDivElement | null>;
  listItems: Item[];
  windowInnerWidth: number;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ contactRef, listItems, windowInnerWidth, setIsSidebarOpen }: Prop) {

  return (
    <nav className="flex-between gap-y-6">

      <div className="relative">

        <h1 className="font-bold text-[30px] relative z-10">Navidul</h1>

        <ShowTheme />

      </div>

      {windowInnerWidth >= 640 ? (
        <>
          <ul className="flex-center md:gap-x-10 gap-x-6">

            {listItems.map(
              item => (
                <ListItem key={item.label} item={item} />
              )
            )}

          </ul>

          <Button contactRef={contactRef} />
        </>
      ) : (
        <Bar setIsSidebarOpen={setIsSidebarOpen} />
      )}

    </nav>
  )
}

