import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BlogCreatePage() {
  return (
    <div>
      <div>
        <h3>Create New Blog</h3>
      </div>
      <div className=" mt-5">
        <form action="">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Input className=" bg-white" placeholder="Title (en)" />
            <Input className=" bg-white" placeholder="Title (mm)" />
            <Textarea
              className=" bg-white"
              placeholder="Content (en)"
              rows={7}
            />
            <Textarea
              className=" bg-white"
              placeholder="Content (mm)"
              rows={7}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
