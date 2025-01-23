"use client"

import useRefCustom from "@/hooks/useRefCustom"
import useWindow from "@/hooks/useWindow"
import Bar from "./Bar";
import Button from "./Button";
import ListItem from "./ListItem";

export default function ConditionallyRenderListItems() {
  
  const {windowInnerWidth} = useWindow()
  const {listItems} = useRefCustom()

  return (
    windowInnerWidth >= 640 ? (
      <>
        <ul className="flex-center md:gap-x-10 gap-x-6">

          {listItems.map(
            item => (
              <ListItem key={item.label} item={item} />
            )
          )}

        </ul>

        <Button />
      </>
    ) : (
      <Bar />
    )
  )
}
