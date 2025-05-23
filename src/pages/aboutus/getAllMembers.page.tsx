import { Link } from "react-router-dom"
import { useGetAllMemberQuery } from "@/api/endpoints/aboutmember.api"
import { SquarePen } from "lucide-react";
import DeleteMemberBtn from "@/components/action/DeleteMemberBtn";
import { useNavigate } from "react-router-dom";
export default function GetAllMemberPage(){
   const {data:MemberData,isLoading:FetchLoading} = useGetAllMemberQuery({});
   const navigate = useNavigate();

   if(FetchLoading){
    return <div>...Loading</div>
   }
   return(
        <div>
            <div className="flex justify-between">
            <h2>Our Team Members</h2>
            <Link to="/teammember/create">
            <h2 className="text-blue-600 hover:text-blue-900 hover:text-xl">Add a new member</h2>
            </Link>
        </div>

         {/* Missions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {MemberData?.members?.map((member: any, index: number) => (
                  <div
                    key={index}
                    className="border-2 border-black p-5 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h1 className="text-xl font-bold mb-2">
                      {index + 1}. {member?.name?.en}
                    </h1>
                    <p className="text-gray-700">{member?.position?.en}</p>
                    <div className="relative group w-fit bg-white">
                            <img
                              src={member?.photo}
                              alt="Team Member Photo"
                              className=" h-40 w-auto object-cover rounded-lg border border-gray-200"
                            />
                          </div>

                    <div className="flex justify-between mt-3">
                      <button className="text-blue-800">
                        <SquarePen onClick={()=>navigate(`/teammember/edit/${member?.id}`)} />
                      </button>
                      <DeleteMemberBtn memberId={member?.id} />
                    </div>
                  </div>
                ))}
              </div>
        </div>
    )
}