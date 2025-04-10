import {
  BriefcaseBusiness,
  Calendar,
  CalendarCheck,
  File,
  Home,
  Inbox,
  LaptopMinimal,
  Layers2,
  Notebook,
  Search,
  Settings,
  Ticket,
  Trash,
  UserCog,
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
  {
    title: "Roles",
    url: "#",
    icon: UserCog,
  },
  {
    title: "Booking",
    url: "#",
    icon: Notebook,
    items: [
      {
        title: "Car",
        url: "#",
      },
      {
        title: "Meeting Room",
        url: "#",
      },
    ],
  },
  {
    title: "Job",
    url: "#",
    icon: BriefcaseBusiness,
    items: [
      {
        title: "List",
        url: "#",
      },
      {
        title: "Recent",
        url: "#",
      },
      {
        title: "Manage",
        url: "#",
        items: [
          {
            title: "Create",
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
    title: "File",
    url: "#",
    icon: File,
  },
  {
    title: "Course",
    url: "#",
    icon: LaptopMinimal,
  },
  {
    title: "Events",
    url: "#",
    icon: Ticket,
  },
  {
    title: "Holidays",
    url: "#",
    icon: CalendarCheck,
  },
  {
    title: "Assets",
    url: "#",
    icon: Layers2,
  },
];

export const supportMenuItems = [
  {
    title: "Trash",
    url: "#",
    icon: Trash,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
