import { useGetAboutBannerQuery,useEditAboutBannerMutation } from "@/api/endpoints/aboutusbanner.api"
import { useState, useEffect } from 'react';

interface AboutBannerData {
  // Text fields
  titleen: string;
  titlemy: string;
  abouten: string;
  aboutmy: string;
  blogtitleen: string;
  blogtitlemy: string;
  blogen: string;
  blogmy: string;
  homepageblogtitle_en: string;
  homepageblogtitle_my: string;
  homepageblog_en: string;
  homepageblog_my: string;
  introductionen: string;
  introductionmy: string;
  
  // Image URLs (from server)
  bannerbgimg?: string;
  backgroundblogimg?: string;
  homepageblogimg?: string;
}

interface FormData extends Omit<AboutBannerData, 'bannerbgimg' | 'backgroundblogimg' | 'homepageblogimg'> {
  // File objects for new uploads
  bannerbgimg: File | null;
  backgroundblogimg: File | null;
  homepageblogimg: File | null;
  
  // Existing image URLs for display
  existingBannerBgImg: string;
  existingBackgroundBlogImg: string;
  existingHomepageBlogImg: string;
}

const AboutBannerEdit = () => {
  // Fetch data
  const { data: aboutBannerData, isLoading, isError } = useGetAboutBannerQuery({});
  const [updateAboutBanner] = useEditAboutBannerMutation();
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    // Text fields
    titleen: '',
    titlemy: '',
    abouten: '',
    aboutmy: '',
    blogtitleen: '',
    blogtitlemy: '',
    blogen: '',
    blogmy: '',
    homepageblogtitle_en: '',
    homepageblogtitle_my: '',
    homepageblog_en: '',
    homepageblog_my: '',
    introductionen: '',
    introductionmy: '',
    
    // File fields
    bannerbgimg: null,
    backgroundblogimg: null,
    homepageblogimg: null,
    
    // Existing images
    existingBannerBgImg: '',
    existingBackgroundBlogImg: '',
    existingHomepageBlogImg: ''
  });

  // When data loads, populate the form
  useEffect(() => {
    if (aboutBannerData) {
      setFormData(prev => ({
        ...prev,
        // Text fields
        titleen: aboutBannerData.data.titleen || '',
        titlemy: aboutBannerData.data.titlemy || '',
        abouten: aboutBannerData.data.abouten || '',
        aboutmy: aboutBannerData.data.aboutmy || '',
        blogtitleen: aboutBannerData.data.blogtitleen || '',
        blogtitlemy: aboutBannerData.data.blogtitlemy || '',
        blogen: aboutBannerData.data.blogen || '',
        blogmy: aboutBannerData.data.blogmy || '',
        homepageblogtitle_en: aboutBannerData.data.homepageblogtitle_en || '',
        homepageblogtitle_my: aboutBannerData.data.homepageblogtitle_my || '',
        homepageblog_en: aboutBannerData.data.homepageblog_en || '',
        homepageblog_my: aboutBannerData.data.homepageblog_my || '',
        introductionen: aboutBannerData.data.introductionen || '',
        introductionmy: aboutBannerData.data.introductionmy || '',
        
        // Existing image URLs
        existingBannerBgImg: aboutBannerData.data.bannerbgimg || '',
        existingBackgroundBlogImg: aboutBannerData.data.backgroundblogimg || '',
        existingHomepageBlogImg: aboutBannerData.data.homepageblogimg || ''
      }));
    }
  }, [aboutBannerData]);

  // Handle text input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData for the request
    const formDataToSend = new FormData();
    
    // Append all text fields
    const textFields: Array<keyof Omit<FormData, 
      'bannerbgimg' | 'backgroundblogimg' | 'homepageblogimg' |
      'existingBannerBgImg' | 'existingBackgroundBlogImg' | 'existingHomepageBlogImg'
    >> = [
      'titleen', 'titlemy', 'abouten', 'aboutmy', 
      'blogtitleen', 'blogtitlemy', 'blogen', 'blogmy',
      'homepageblogtitle_en', 'homepageblogtitle_my',
      'homepageblog_en', 'homepageblog_my',
      'introductionen', 'introductionmy'
    ];
    
    textFields.forEach(field => {
      formDataToSend.append(field, formData[field]);
    });
    
    // Append files if they were changed
    if (formData.bannerbgimg) {
      formDataToSend.append('bannerbgimg', formData.bannerbgimg);
    }
    if (formData.backgroundblogimg) {
      formDataToSend.append('backgroundblogimg', formData.backgroundblogimg);
    }
    if (formData.homepageblogimg) {
      formDataToSend.append('homepageblogimg', formData.homepageblogimg);
    }
    
    try {
      await updateAboutBanner(formDataToSend).unwrap();
      alert('Update successful!');
    } catch (error) {
      console.error('Failed to update:', error);
      alert('Update failed');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Edit About Banner</h1>
       <h1>{aboutBannerData.data.titlen}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Text Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* English Fields */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">English Content</h2>
            
            <div>
              <label className="block mb-1">Title (EN)</label>
              <input
                type="text"
                name="titleen"
                value={formData.titleen}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block mb-1">About (EN)</label>
              <textarea
                name="abouten"
                value={formData.abouten}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
            
            <div>
              <label className="block mb-1">Blog Title (EN)</label>
              <input
                type="text"
                name="blogtitleen"
                value={formData.blogtitleen}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block mb-1">Blog Content (EN)</label>
              <textarea
                name="blogen"
                value={formData.blogen}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
            
            <div>
              <label className="block mb-1">Homepage Blog Title (EN)</label>
              <input
                type="text"
                name="homepageblogtitle_en"
                value={formData.homepageblogtitle_en}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block mb-1">Homepage Blog Content (EN)</label>
              <textarea
                name="homepageblog_en"
                value={formData.homepageblog_en}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
            
            <div>
              <label className="block mb-1">Introduction (EN)</label>
              <textarea
                name="introductionen"
                value={formData.introductionen}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
          </div>
          
          {/* Myanmar Fields */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Myanmar Content</h2>
            
            <div>
              <label className="block mb-1">Title (MY)</label>
              <input
                type="text"
                name="titlemy"
                value={formData.titlemy}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block mb-1">About (MY)</label>
              <textarea
                name="aboutmy"
                value={formData.aboutmy}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
            
            <div>
              <label className="block mb-1">Blog Title (MY)</label>
              <input
                type="text"
                name="blogtitlemy"
                value={formData.blogtitlemy}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block mb-1">Blog Content (MY)</label>
              <textarea
                name="blogmy"
                value={formData.blogmy}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
            
            <div>
              <label className="block mb-1">Homepage Blog Title (MY)</label>
              <input
                type="text"
                name="homepageblogtitle_my"
                value={formData.homepageblogtitle_my}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block mb-1">Homepage Blog Content (MY)</label>
              <textarea
                name="homepageblog_my"
                value={formData.homepageblog_my}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
            
            <div>
              <label className="block mb-1">Introduction (MY)</label>
              <textarea
                name="introductionmy"
                value={formData.introductionmy}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
          </div>
        </div>
        
        {/* Image Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Banner Background Image */}
          <div>
            <label className="block mb-2">Banner Background Image</label>
            {formData.existingBannerBgImg && (
              <div className="mb-2">
                <p className="text-sm mb-1">Current Image:</p>
                <img 
                  src={formData.existingBannerBgImg} 
                  alt="Current Banner Background" 
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            )}
            <input
              type="file"
              name="bannerbgimg"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
              accept="image/*"
            />
          </div>
          
          {/* Background Blog Image */}
          <div>
            <label className="block mb-2">Background Blog Image</label>
            {formData.existingBackgroundBlogImg && (
              <div className="mb-2">
                <p className="text-sm mb-1">Current Image:</p>
                <img 
                  src={formData.existingBackgroundBlogImg} 
                  alt="Current Blog Background" 
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            )}
            <input
              type="file"
              name="backgroundblogimg"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
              accept="image/*"
            />
          </div>
          
          {/* Homepage Blog Image */}
          <div>
            <label className="block mb-2">Homepage Blog Image</label>
            {formData.existingHomepageBlogImg && (
              <div className="mb-2">
                <p className="text-sm mb-1">Current Image:</p>
                <img 
                  src={formData.existingHomepageBlogImg} 
                  alt="Current Homepage Blog Image" 
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            )}
            <input
              type="file"
              name="homepageblogimg"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
              accept="image/*"
            />
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutBannerEdit;