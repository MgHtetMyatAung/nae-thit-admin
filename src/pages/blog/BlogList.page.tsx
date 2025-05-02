import { useGetBlogsQuery } from "@/api/endpoints/blog.api";

export default function BlogListPage() {
  const { data, isLoading } = useGetBlogsQuery({});
  if (isLoading) return <p>Loading ...</p>;
  console.log(data);
  return (
    <div className="">
      <div className=" flex justify-between items-center mb-3">
        <h3>Blogs </h3>
        <p>Total - {data.blogs.length}</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.blogs.map((blog: BlogType, idx: number) => (
          <div key={idx} className=" w-full p-3 rounded-lg shadow space-y-3">
            <div>
              <img
                src={blog.image}
                alt={blog.titleen}
                className=" w-full h-auto"
              />
            </div>
            <div>
              <h4 className=" font-medium">{blog.titleen}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
