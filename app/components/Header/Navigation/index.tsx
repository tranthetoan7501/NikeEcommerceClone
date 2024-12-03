"use client";

import { useRef, useState } from "react";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface Props {}

const Navigation = (props: Props) => {
  // State
  const [offset, setOffset] = useState<number | null>(null);
  const [value, setValue] = useState<string>("");

  // Ref
  const listRef = useRef<HTMLUListElement>(null);

  // Handle node update
  const onNodeUpdate = (trigger: HTMLButtonElement | null, itemValue: string) => {
    if (trigger && listRef.current && value === itemValue) {
      const listWidth: number = listRef.current?.offsetWidth;
      const listCenter: number = listWidth / 2;

      const triggerOffsetRight: number =
        listWidth - trigger.offsetLeft - trigger.offsetWidth + trigger.offsetWidth / 2;

      const newOffSet: number = Math.round(listCenter - triggerOffsetRight);
      setOffset(newOffSet);
    } else if (value === "") {
      setOffset(null);
    }

    return trigger as any;
  };

  return (
    <NavigationMenu.Root onValueChange={setValue} className="flex justify-center">
      <NavigationMenu.List ref={listRef} className="flex list-none p-0 gap-5">
        {["New & Featured", "Men", "Women", "Kids", "Sale"].map((item) => {
          return (
            <NavigationMenu.Item key={item} value={item}>
              <NavigationMenu.Trigger
                ref={(node) => onNodeUpdate(node, item)}
                // onPointerMove={(event) => event.preventDefault()}
                // onPointerLeave={(event) => event.preventDefault()}
              >
                {item}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                className="w-full h-96 bg-gray-100"
                // onPointerEnter={(event) => event.preventDefault()}
                // onPointerLeave={(event) => event.preventDefault()}
              >
                {item} content
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          );
        })}

        <NavigationMenu.Indicator
          style={{
            bottom: 0,
            height: 5,
            backgroundColor: "grey",
            transition: "all 0.5s ease",
          }}
        />
      </NavigationMenu.List>

      <div className="absolute left-0 top-full w-full bg-whitesmoke flex justify-center">
        <NavigationMenu.Viewport
          style={{
            transform: `translateX(${offset}px)`,
            top: "100%",
            transition: "all 0.5s ease",
            width: "100%",
          }}
        />
      </div>
    </NavigationMenu.Root>
  );
};
export default Navigation;
