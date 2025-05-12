import { useGetTestimonialsQuery } from "@/api/endpoints/home.api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TestimonialsPage() {
  const { data: testimonials, isLoading } = useGetTestimonialsQuery({});
  if (isLoading) return <p>Loading</p>;
  if (!testimonials) return <p>Data not found</p>;
  return (
    <div>
      <h3>Testimonial Lists</h3>
      <div className=" flex justify-between my-3">
        <p>Total : {testimonials?.FormattedResponse?.length}</p>
        <Link to={"/testimonials/create"}>
          <Button className=" bg-secondary-blue text-white hover:bg-secondary-blue">
            Add New
          </Button>
        </Link>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {testimonials?.FormattedResponse?.map(
          (item: TestimonialType, idx: number) => (
            <div key={idx} className=" space-y-2 p-3 rounded-lg bg-white">
              <h5 className=" text-lg font-semibold">{item.patient_name_en}</h5>
              <p className=" text-gray-600">{item.patient_type_en}</p>
              <p className=" text-gray-700">{item.note_en}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
