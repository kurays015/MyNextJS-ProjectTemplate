"use client";

import * as React from "react";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { IoIosLogOut } from "react-icons/io";

// type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function AccountDropdown() {
  // const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  // const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  // const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const session = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button style={{ all: "unset", cursor: "pointer" }}>
          {session?.data?.user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-3">
        <DropdownMenuCheckboxItem
          className="cursor-pointer"
          onClick={() => signOut()}
        >
          <IoIosLogOut className="text-xl mr-2" />
          Logout
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
