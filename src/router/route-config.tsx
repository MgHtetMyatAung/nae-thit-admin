import PageTitle from "@/components/PageTitle";
import { ROUTE_ACCESS, ROUTE_PATH } from "@/constants/route";
import {
  BlogCreatePage,
  BlogEditPage,
  BlogListPage,
  DashboardPage,
  LoginPage,
  VerifyPage,
} from "@/pages";

export const RouteConfig = [
  {
    path: ROUTE_PATH.DASHBOARD,
    element: (
      <>
        <PageTitle title="Dashboard " />
        <DashboardPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },

  // blog
  {
    path: ROUTE_PATH.BLOG.LIST,
    element: (
      <>
        <PageTitle title="Blogs " />
        <BlogListPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  {
    path: ROUTE_PATH.BLOG.CREATE,
    element: (
      <>
        <PageTitle title="Blog Create" />
        <BlogCreatePage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  {
    path: ROUTE_PATH.BLOG.EDIT,
    element: (
      <>
        <PageTitle title="Blog Edit" />
        <BlogEditPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  
  // auth routes
  {
    path: ROUTE_PATH.LOGIN,
    element: (
      <>
        <PageTitle title="Login " />
        <LoginPage />
      </>
    ),
    access_type: ROUTE_ACCESS.AUTH,
  },
  {
    path: ROUTE_PATH.VERIFY,
    element: (
      <>
        {/* <PageTitle title="Veri" /> */}
        <VerifyPage />
      </>
    ),
    access_type: ROUTE_ACCESS.AUTH,
  },
  // not found route
  // {
  //   path: ROUTE_PATH.NOT_FOUND,
  //   element: <NotFoundPage />,
  //   access_type: ROUTE_ACCESS.PUBLIC,
  // },
];
