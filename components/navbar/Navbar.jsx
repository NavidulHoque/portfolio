import Button from "./Button";
import ListItems from "./ListItems";
import ShowTheme from "./ShowTheme";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">

      <div className="relative">

        <h1 className="font-bold text-[30px] relative z-10">Navidul</h1>

        <ShowTheme />

      </div>

      <ul className="flex justify-center items-center gap-x-10">

        {["Home", "About Me", "Experience", "Projects", "Contact"].map(
          (label, index) => (
            <ListItems key={index} label={label} />
          )
        )}

      </ul>

      <Button />

    </nav>
  )
}

