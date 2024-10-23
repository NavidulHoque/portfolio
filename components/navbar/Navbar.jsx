import Button from "./Button";
import ListItem from "./ListItem";
import ShowTheme from "./ShowTheme";

export default function Navbar({ aboutRef, experienceRef, projectsRef, contactRef}) {

  const listItems = [
    {
      label: "About Me",
      ref: aboutRef
    },
    {
      label: "Experience",
      ref: experienceRef
    },
    {
      label: "Projects",
      ref: projectsRef
    },
    {
      label: "Contact",
      ref: contactRef
    }
  ]
  

  return (
    <nav className="flex justify-between items-center">

      <div className="relative">

        <h1 className="font-bold text-[30px] relative z-10">Navidul</h1>

        <ShowTheme />

      </div>

      <ul className="flex justify-center items-center gap-x-10">

        {listItems.map(
          item => (
            <ListItem key={item.label} item={item} />
          )
        )}

      </ul>

      <Button contactRef={contactRef} />

    </nav>
  )
}

