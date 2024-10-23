import Bar from "./Bar";
import Button from "./Button";
import ListItem from "./ListItem";
import ShowTheme from "./ShowTheme";

export default function Navbar({ contactRef, listItems, windowInnerWidth, setIsSidebarOpen }) {

  return (
    <nav className="flex justify-between items-center gap-y-6">

      <div className="relative">

        <h1 className="font-bold text-[30px] relative z-10">Navidul</h1>

        <ShowTheme />

      </div>

      {windowInnerWidth >= 640 ? (
        <>
          <ul className="flex justify-center items-center md:gap-x-10 gap-x-6">

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

