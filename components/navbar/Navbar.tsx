import ConditionallyRenderListItems from "./ConditionallyRenderListItems";
import Theme from "./Theme"; 

export default function Navbar() {

  return (
    <nav className="flex-between gap-y-6">

      <div className="relative">

        <h1 className="font-bold text-[30px] relative z-10">Navidul</h1>

        <Theme />

      </div>

      <ConditionallyRenderListItems />

    </nav>
  )
}

