import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Bell, MessageCircle } from "lucide-react";
import { ProfileBtn } from "./ProfileBtn";
import { useGetCountQuery,useResetCountMutation } from "@/api/endpoints/requestnoti.api";
import { useNavigate } from "react-router-dom";
export default function DashboardMenu({ title }: { title?: string }) {
  const { isMobile } = useSidebar();
  const navigate = useNavigate();
  const {data:noticount, isLoading:fetchCountLoading} = useGetCountQuery({});
  const [resetCount] = useResetCountMutation()
  return (
    <nav className=" sticky flex z-10 justify-between items-center px-5 py-4 top-0 right-0 bg-white">
      <div className="flex gap-3 items-center">
        <SidebarTrigger />
        {isMobile && title ? (
          <h3 className=" text-lg font-bold text-nowrap overflow-hidden">
            {title}
          </h3>
        ) : null}
      </div>
      <ul className=" flex gap-5">
        <li onClick={()=> {
          resetCount({});
          navigate("/request")
        }}>
          <MenuIconBox className=" relative">
           {fetchCountLoading?(
            <p>...Loading</p>
           ):(
            <span className=" grid text-red-500 font-bold place-items-center w-6 h-6 text-sm bg-secondary-green absolute -top-2 -right-2 rounded-full">
            {noticount?.count}
          </span>
           )}
            <Bell size={18} />
          </MenuIconBox>
        </li>
        <li>
          <MenuIconBox>
            <MessageCircle size={18} />
          </MenuIconBox>
        </li>
        <li>
          <ProfileBtn />
        </li>
      </ul>
    </nav>
  );
}

function MenuIconBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`w-8 h-8 rounded-full grid place-items-center hover:bg-gray-100 ${className}`}
    >
      {children}
    </button>
  );
}
