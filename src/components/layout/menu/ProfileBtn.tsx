import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { systemLogout } from "@/redux/auth.slice";
export function ProfileBtn() {
  const dispatch = useDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9 rounded-lg">
          <AvatarImage
            src={"/user.png"}
            alt={"user"}
            className=" cursor-pointer"
          />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-white mt-3"
        side={"bottom"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className=" cursor-pointer">
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className=" cursor-pointer">
            <BadgeCheck />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem className=" cursor-pointer">
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className=" cursor-pointer">
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className=" cursor-pointer"
          onClick={() => dispatch(systemLogout())}
        >
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
