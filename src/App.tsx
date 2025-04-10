import ChartOne from "./components/charts/ChartOne";
import ChartTwo from "./components/charts/ChartTwo";
import DashboardLayout from "./components/layout/DashboardLayout";

export default function App() {
  return (
    <DashboardLayout>
      <div className=" space-y-5">
        <div className=" grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          <ChartOne />
          <ChartOne />
          <ChartOne />
          <ChartOne />
        </div>
        <div className=" grid lg:grid-cols-2 gap-5">
          <ChartTwo />
          <ChartTwo />
        </div>
        <div>
          <ChartTwo />
        </div>
      </div>
    </DashboardLayout>
  );
}
