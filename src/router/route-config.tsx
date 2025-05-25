import PageTitle from "@/components/PageTitle";
import { ROUTE_ACCESS, ROUTE_PATH } from "@/constants/route";
import {
  BlogCreatePage,
  BlogEditPage,
  BlogListPage,
  AboutusBannerEditPage,
  AboutusMissionCreatePage,
  GetMissionPage,
  EditMissionPage,
  AddTeamMemberPage,
  GetAllMemberPage,
  EditMemberPage,
  EditContactUsPage,
  DashboardPage,
  LoginPage,
  VerifyPage,
  HomePageBannerInfoPage,
  NotFoundPage,
  TestimonialPage,
  TestimonialCreatePage,
  TestimonialEditPage,
  ServicePage,
  ServiceCreatePage,
  ServiceEditPage,
  ServiceBannerPage,
} from "@/pages";
import { Route } from "react-router-dom";

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

  /* Aboutus Banner */
  {
    path: ROUTE_PATH.ABOUTUSBANNER.EDIT,
    element: (
      <>
        <PageTitle title="Aboutus Banner Edit" />
        <AboutusBannerEditPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  /* Aboutus Mission Create */
  {
    path: ROUTE_PATH.AboutusMission.CREATE,
    element: (
      <>
        <PageTitle title="Aboutus Mission Create" />
        <AboutusMissionCreatePage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  /* Aboutus Mission List */
  {
    path: ROUTE_PATH.AboutusMission.LIST,
    element: (
      <>
        <PageTitle title="Aboutus Mission List" />
        <GetMissionPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  /* Aboutus Mission Edit */
  {
    path: ROUTE_PATH.AboutusMission.EDIT,
    element: (
      <>
        <PageTitle title="Aboutus Mission Edit" />
        <EditMissionPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  /* Member Add */
  {
    path: ROUTE_PATH.AboutTeamMember.CREATE,
    element: (
      <>
        <PageTitle title="Aboutus Add Teammember" />
        <AddTeamMemberPage/>
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  /* Member List */
  {
    path: ROUTE_PATH.AboutTeamMember.LIST,
    element: (
      <>
        <PageTitle title="Our Teammember" />
        <GetAllMemberPage/>
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
 
  /* Member Edit*/
  {
    path: ROUTE_PATH.AboutTeamMember.EDIT,
    element: (
      <>
        <PageTitle title="Our Teammember Edit" />
        <EditMemberPage/>
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  /* Contact Edit*/
  {
    path: ROUTE_PATH.Contactus.EDIT,
    element: (
      <>
        <PageTitle title="Contact Us Edit" />
        <EditContactUsPage/>
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
 
  // home routes
  {
    path: ROUTE_PATH.HOME.EDIT,
    element: (
      <>
        <PageTitle title="Home Banner Info Edit" />
        <HomePageBannerInfoPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  {
    path: ROUTE_PATH.HOME.TESTIMONIAL.LIST,
    element: (
      <>
        <PageTitle title="Testimonials" />
        <TestimonialPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  {
    path: ROUTE_PATH.HOME.TESTIMONIAL.CREATE,
    element: (
      <>
        <PageTitle title="Create Testimonial" />
        <TestimonialCreatePage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  {
    path: ROUTE_PATH.HOME.TESTIMONIAL.EDIT,
    element: (
      <>
        <PageTitle title="Edit Testimonial" />
        <TestimonialEditPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },

  // service routes

  {
    path: ROUTE_PATH.SERVICES.LIST,
    element: (
      <>
        <PageTitle title="Services" />
        <ServicePage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  {
    path: ROUTE_PATH.SERVICES.CREATE,
    element: (
      <>
        <PageTitle title="Create Service" />
        <ServiceCreatePage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  {
    path: ROUTE_PATH.SERVICES.EDIT,
    element: (
      <>
        <PageTitle title="Edit Service" />
        <ServiceEditPage />
      </>
    ),
    access_type: ROUTE_ACCESS.PRIVATE,
  },
  {
    path: ROUTE_PATH.SERVICES.BANNER,
    element: (
      <>
        <PageTitle title="Service Banner" />
        <ServiceBannerPage />
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
  {
    path: ROUTE_PATH.NOT_FOUND,
    element: <NotFoundPage />,
    access_type: ROUTE_ACCESS.PUBLIC,
  },
];
