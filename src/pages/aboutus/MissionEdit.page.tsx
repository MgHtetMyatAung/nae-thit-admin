import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useNavigate, useParams } from "react-router-dom";
import { useGetEachMissionQuery, useEditMissionMutation } from "@/api/endpoints/aboutmission.api";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function EditMission() {
  const { missionid } = useParams<{ missionid: string }>();
  const navigate = useNavigate();
  
  // Fetch existing data
  const { data: missionData, isLoading, isError } = useGetEachMissionQuery({ id: missionid! });
  
  // Form state
  const [formData, setFormData] = useState({
    titleen: "",
    titlemy: "",
    missionen: "",
    missionmy: ""
  });

  // Update mutation
  const [editMission, { isLoading: isUpdating }] = useEditMissionMutation();

  // Populate form when data loads
  useEffect(() => {
    if (missionData) {
      setFormData({
        titleen: missionData.data.title.en,
        titlemy: missionData.data.title.my,
        missionen: missionData.data.mission.en,
        missionmy: missionData.data.mission.my
      });
    }
  }, [missionData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await editMission({data:formData,id:missionid}).unwrap();
      toast.success("Mission updated successfully!");
      navigate(-1); // Go back after success
    } catch (error) {
      toast.error("Failed to update mission");
      console.error("Update error:", error);
    }
  };

  if (isLoading) return <div className="text-center py-8">Loading mission data...</div>;
  if (isError) return <div className="text-center py-8 text-red-500">Error loading mission</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Mission Content</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* English Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-2">English Content</h2>
            
            <div>
              <Label htmlFor="titleen">Title (English)</Label>
              <Input
                id="titleen"
                name="titleen"
                value={formData.titleen}
                onChange={handleChange}
                placeholder="Enter English title"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="missionen">Mission (English)</Label>
              <Textarea
                id="missionen"
                name="missionen"
                value={formData.missionen}
                onChange={handleChange}
                rows={5}
                placeholder="Enter English mission statement"
                required
              />
            </div>
          </div>

          {/* Myanmar Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-2">Myanmar Content</h2>
            
            <div>
              <Label htmlFor="titlemy">Title (Myanmar)</Label>
              <Input
                id="titlemy"
                name="titlemy"
                value={formData.titlemy}
                onChange={handleChange}
                placeholder="Enter Myanmar title"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="missionmy">Mission (Myanmar)</Label>
              <Textarea
                id="missionmy"
                name="missionmy"
                value={formData.missionmy}
                onChange={handleChange}
                rows={5}
                placeholder="Enter Myanmar mission statement"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            disabled={isUpdating}
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}