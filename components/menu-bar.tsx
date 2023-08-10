import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { navigationRoute } from "@/lib/data";

type Props = {};

const MenuBar = (props: Props) => {
  return (
    <div>
      <Menubar>
        {navigationRoute?.length > 0 &&
          navigationRoute.map(
            (route) =>
              route.isFileMenu === true && (
                <MenubarMenu>
                  <MenubarTrigger>
                    {/* {<route.icon className="mr-2 h-4 w-4" />} */}
                    {route.label}
                  </MenubarTrigger>
                  <MenubarContent>
                    {route?.subMenu?.length > 0 &&
                      route.subMenu?.map((sub) => {
                        return sub.href === "divider" ? (
                          <MenubarSeparator key={sub.label} />
                        ) : (
                          <MenubarItem key={sub.label}>
                            {/* {<route.icon className="mr-2 h-4 w-4" />} */}
                            {sub.label}
                            {/* <MenubarShortcut>⌘T</MenubarShortcut> */}
                          </MenubarItem>
                        );
                      })}
                  </MenubarContent>
                </MenubarMenu>
              )
          )}
      </Menubar>
    </div>
  );
};

export default MenuBar;
