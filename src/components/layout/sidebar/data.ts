import { ROUTE_PATH } from "@/constants/route";
import {
  BriefcaseBusiness,
  Calendar,
  // CalendarCheck,
  File,
  Home,
  Inbox,
  LaptopMinimal,
  // Layers2,
  Notebook,
  Search,
  Settings,
  // Ticket,
  Trash,
  // UserCog,
} from "lucide-react";

// Menu items.

export const applicationMenuItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    items: [
      {
        title: "Forms",
        url: "#",
      },
      {
        title: "Inputs",
        url: "#",
      },
      {
        title: "Datas",
        url: "#",
        items: [
          {
            title: "All",
            url: "#",
          },
          {
            title: "Filters",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
];

export const controlMenuItems = [
  // {
  //   title: "",
  //   url: "#",
  //   icon: UserCog,
  // },
  {
    title: "Home",
    url: "#",
    icon: Notebook,
    items: [
      {
        title: "Clinics",
        url: "#",
      },
      {
        title: "Testimonials",
        url: "#",
      },
    ],
  },
  {
    title: "Blogs",
    url: "#",
    icon: BriefcaseBusiness,
    items: [
      {
        title: "List",
        url: ROUTE_PATH.BLOG.LIST,
      },
      {
        title: "Create",
        url: ROUTE_PATH.BLOG.CREATE,
      },
      {
        title: "Categories",
        url: "#",
        items: [
          {
            title: "List",
            url: "#",
          },
          {
            title: "Filters",
            url: "#",
          },
        ],
      },
    ],
  },
  /* Aboutus */
  {
    title: "Aboutus",
    url: "#",
    icon: Notebook,
    items: [
      {
        title: "Aboutus Banner",
        url: ROUTE_PATH.ABOUTUSBANNER.EDIT,
      },
      {
        title: "Create Mission",
        url: ROUTE_PATH.AboutusMission.CREATE,
      },
      {
        title: " Mission List",
        url: ROUTE_PATH.AboutusMission.LIST,
      },
      {
        title: "Edit Mission",
        url: ROUTE_PATH.AboutusMission.EDIT,
      },
      {
        title: "Testimonials",
        url: "#",
      },
    ],
  },
  {
    title: "About",
    url: "#",
    icon: Notebook,
    items: [
      {
        title: "Clinics",
        url: "#",
      },
      {
        title: "Testimonials",
        url: "#",
      },
    ],
  },

  {
    title: "Socials",
    url: "#",
    icon: File,
  },
  {
    title: "Services",
    url: "#",
    icon: LaptopMinimal,
  },
  // {
  //   title: "Events",
  //   url: "#",
  //   icon: Ticket,
  // },
  // {
  //   title: "Holidays",
  //   url: "#",
  //   icon: CalendarCheck,
  // },
  // {
  //   title: "Assets",
  //   url: "#",
  //   icon: Layers2,
  // },
];

export const supportMenuItems = [
  {
    title: "Translation",
    url: "#",
    icon: Trash,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
