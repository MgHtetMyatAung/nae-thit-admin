import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGetAboutUsBannerQuery,useUpdateAboutUsBannerMutation } from "@/api/endpoints/aboutusbanner.api";
import { useState,useEffect } from "react";
interface FormState {
  titleen: string;
  titlemy: string;
  abouten: string;
  aboutmy: string;
  introductionen: string;
  introductionmy: string;
  blogtitleen: string;
  blogtitlemy: string;
  blogen: string;
  blogmy: string;
  bannerbgimg: string;
  backgroundblogimg: string;
}

export default function AboutUsBannerPage(){
  const { data, isLoading, isError } = useGetAboutUsBannerQuery();
  const [updateBanner, { isLoading: isUpdating }] = useUpdateAboutUsBannerMutation();
  const [error, setError] = useState<string | null>(null);
  const [bannerBgImage, setBannerBgImage] = useState<File | null>(null);
  const [backgroundBlogImg, setBackgroundBlogImg] = useState<File | null>(null);

  const [formState, setFormState] = useState<FormState>({
    titleen: "",
    titlemy: "",
    abouten: "",
    aboutmy: "",
    introductionen: "",
    introductionmy: "",
    blogtitleen: "",
    blogtitlemy: "",
    blogen: "",
    blogmy: "",
    bannerbgimg: "",
    backgroundblogimg: "",
  });

  useEffect(() => {
    if (data?.data) {
      setFormState(data.data);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (field: 'bannerbgimg' | 'backgroundblogimg') => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        if (field === 'bannerbgimg') setBannerBgImage(e.target.files[0]);
        else setBackgroundBlogImg(e.target.files[0]);
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      const formData = new FormData();
      Object.entries(formState).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      if (bannerBgImage) formData.append('bannerbgimg', bannerBgImage);
      if (backgroundBlogImg) formData.append('backgroundblogimg', backgroundBlogImg);

      await updateBanner(formData).unwrap();
      alert("About Us banner updated successfully!");
    } catch (err:any) {
      console.error("Update failed:", err?.data?.message);
      setError(err?.data?.message);
    }
  };

  if (isLoading) return <p>Loading data...</p>;
  if (isError) return <p>Error loading data.</p>;

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">
        About Us Banner Form
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded border border-red-200">
          {error}
        </div>
      )}
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title (English)</label>
          <Input
            name="titleen"
            value={formState.titleen}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title (Myanmar)</label>
          <Input
            name="titlemy"
            value={formState.titlemy}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">About (English)</label>
          <Textarea
            name="abouten"
            value={formState.abouten}
            onChange={handleChange}
            rows={4}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">About (Myanmar)</label>
          <Textarea
            name="aboutmy"
            value={formState.aboutmy}
            onChange={handleChange}
            rows={4}
            className="w-full"
          />
        </div>
      </div>
  
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Introduction (English)</label>
        <Textarea
          name="introductionen"
          value={formState.introductionen}
          onChange={handleChange}
          rows={6}
          className="w-full mb-4"
        />
        <label className="block text-sm font-medium text-gray-700 mb-1">Introduction (Myanmar)</label>
        <Textarea
          name="introductionmy"
          value={formState.introductionmy}
          onChange={handleChange}
          rows={6}
          className="w-full"
        />
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title (English)</label>
          <Input
            name="blogtitleen"
            value={formState.blogtitleen}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title (Myanmar)</label>
          <Input
            name="blogtitlemy"
            value={formState.blogtitlemy}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Content (English)</label>
          <Textarea
            name="blogen"
            value={formState.blogen}
            onChange={handleChange}
            rows={6}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Content (Myanmar)</label>
          <Textarea
            name="blogmy"
            value={formState.blogmy}
            onChange={handleChange}
            rows={6}
            className="w-full"
          />
        </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Banner Background Image</label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              onChange={handleFileChange('bannerbgimg')}
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Background Image</label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              onChange={handleFileChange('backgroundblogimg')}
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>
        </div>
      </div>
  
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isUpdating}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isUpdating ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Updating...
            </span>
          ) : (
            'Update Banner'
          )}
        </button>
      </div>
    </form>
  );
};

