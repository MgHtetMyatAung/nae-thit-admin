import ChartOne from "@/components/charts/ChartOne";
import ChartTwo from "@/components/charts/ChartTwo";

export default function DashboardPage() {
  return (
    <div className=" space-y-5">
      <div className=" grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        <ChartOne title="4" subtitle="Clinics" />
        <ChartOne title="8" subtitle="Services" />
        <ChartOne title="12" subtitle="Testimonials" />
        <ChartOne title="20" subtitle="Blogs and News" />
      </div>
      <div className=" grid lg:grid-cols-2 gap-5">
        <ChartTwo />
        <ChartTwo />
      </div>
      <div>
        <ChartTwo />
      </div>
    </div>
  );
}
