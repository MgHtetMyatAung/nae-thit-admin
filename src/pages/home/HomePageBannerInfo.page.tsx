/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useEditHomeBannerInfoMutation,
  useGetHomeBannerInfoQuery,
} from "@/api/endpoints/home.api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function HomePageBannerInfoPage() {
  const { data: homeBannerInfo, isLoading } = useGetHomeBannerInfoQuery({});
  const [editInfo, { isLoading: loadEdit }] = useEditHomeBannerInfoMutation();
  const { register, handleSubmit, setValue } = useForm<HomeBannerInfoType>({});
  const handleEdit = async (data: HomeBannerInfoType) => {
    try {
      const res = await editInfo(data).unwrap();
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  useEffect(() => {
    if (homeBannerInfo) {
      setValue("header_en", homeBannerInfo?.data?.header_en);
      setValue("header_my", homeBannerInfo?.data?.header_my);
      setValue("description_en", homeBannerInfo?.data?.description_en);
      setValue("description_my", homeBannerInfo?.data?.description_my);
      setValue(
        "homepageblog_title_en",
        homeBannerInfo?.data?.homepageblog_title_en
      );
      setValue(
        "homepageblog_title_my",
        homeBannerInfo?.data?.homepageblog_title_my
      );
      setValue(
        "homepageblog_subtitle_en",
        homeBannerInfo?.data?.homepageblog_subtitle_en
      );
      setValue(
        "homepageblog_subtitle_my",
        homeBannerInfo?.data?.homepageblog_subtitle_my
      );
      setValue("homepageblog_en", homeBannerInfo?.data?.homepageblog_en);
      setValue("homepageblog_my", homeBannerInfo?.data?.homepageblog_my);
      setValue("nom_en", homeBannerInfo?.data?.nom_en);
      setValue("nom_my", homeBannerInfo?.data?.nom_my);
      setValue("nop_en", homeBannerInfo?.data?.nop_en);
      setValue("nop_my", homeBannerInfo?.data?.nop_my);
      setValue("tps_en", homeBannerInfo?.data?.tps_en);
      setValue("tps_my", homeBannerInfo?.data?.tps_my);
      setValue("yos_en", homeBannerInfo?.data?.yos_en);
      setValue("yos_my", homeBannerInfo?.data?.yos_my);
    }
  }, [homeBannerInfo]);
  return (
    <div>
      {isLoading ? (
        <div className=" bg-gray-200 rounded-lg min-h-[calc(100vh-100px)]"></div>
      ) : (
        <form action="" onSubmit={handleSubmit(handleEdit)}>
          <div>
            <h3 className="">Edit Home Banner Info</h3>
            <div className=" mt-5 space-y-3">
              <div className=" grid lg:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="header-en" className=" text-gray-600">
                    Header (en)
                  </Label>
                  <Input
                    id="header-en"
                    type="text"
                    {...register("header_en")}
                    className=" bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="header-my" className=" text-gray-600">
                    Header (my)
                  </Label>
                  <Input
                    id="header-my"
                    type="text"
                    {...register("header_my")}
                    className=" bg-white"
                  />
                </div>
              </div>
              <div className=" grid lg:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="description-en" className=" text-gray-600">
                    Description (en)
                  </Label>
                  <Textarea
                    id="description-en"
                    rows={4}
                    {...register("description_en")}
                    className=" bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="description-my" className=" text-gray-600">
                    Description (my)
                  </Label>
                  <Textarea
                    id="description-my"
                    rows={4}
                    {...register("description_my")}
                    className=" bg-white"
                  />
                </div>
              </div>
              <div className=" grid lg:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="intro-en" className=" text-gray-600">
                    Intro Title (en)
                  </Label>
                  <Input
                    id="intro-en"
                    type="text"
                    {...register("homepageblog_title_en")}
                    className=" bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="intro-my" className=" text-gray-600">
                    Intro Title (my)
                  </Label>
                  <Input
                    id="intro-my"
                    type="text"
                    {...register("homepageblog_title_my")}
                    className=" bg-white"
                  />
                </div>
              </div>
              <div className=" grid lg:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="intro-sub-en" className=" text-gray-600">
                    Intro Sub Title (en)
                  </Label>
                  <Input
                    id="intro-sub-en"
                    type="text"
                    {...register("homepageblog_subtitle_en")}
                    className=" bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="intro-sub-my" className=" text-gray-600">
                    Intro Sub Title (my)
                  </Label>
                  <Input
                    id="intro-sub-my"
                    type="text"
                    {...register("homepageblog_subtitle_my")}
                    className=" bg-white"
                  />
                </div>
              </div>
              <div className=" grid lg:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="para-en" className=" text-gray-600">
                    Intro Paragraph (en)
                  </Label>
                  <Textarea
                    id="para-en"
                    rows={5}
                    {...register("homepageblog_en")}
                    className=" bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="para-my" className=" text-gray-600">
                    Intro Paragraph (my)
                  </Label>
                  <Textarea
                    id="para-my"
                    rows={5}
                    {...register("homepageblog_my")}
                    className=" bg-white"
                  />
                </div>
              </div>
              <div className=" space-y-3">
                <p className=" font-semibold mt-5">Organization Records</p>
                <div className=" grid lg:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="yos-en" className=" text-gray-600">
                      Years of Services (en)
                    </Label>
                    <Input
                      id="yos-en"
                      type="text"
                      {...register("yos_en")}
                      className=" bg-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="yos-my" className=" text-gray-600">
                      Years of Services (my)
                    </Label>
                    <Input
                      id="yos-my"
                      type="text"
                      {...register("yos_my")}
                      className=" bg-white"
                    />
                  </div>
                </div>
                <div className=" grid lg:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="nop-en" className=" text-gray-600">
                      Total Number of Patients Treated (en)
                    </Label>
                    <Input
                      id="nop-en"
                      type="text"
                      {...register("nop_en")}
                      className=" bg-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nop-my" className=" text-gray-600">
                      Total Number of Patients Treated (my)
                    </Label>
                    <Input
                      id="nop-my"
                      type="text"
                      {...register("nop_my")}
                      className=" bg-white"
                    />
                  </div>
                </div>
                <div className=" grid lg:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="nom-en" className=" text-gray-600">
                      Team Members (en)
                    </Label>
                    <Input
                      id="nom-en"
                      type="text"
                      {...register("nom_en")}
                      className=" bg-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nom-my" className=" text-gray-600">
                      Team Members (my)
                    </Label>
                    <Input
                      id="nom-my"
                      type="text"
                      {...register("nom_my")}
                      className=" bg-white"
                    />
                  </div>
                </div>
                <div className=" grid lg:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="tps-en" className=" text-gray-600">
                      Total Population Served (en)
                    </Label>
                    <Input
                      id="tps-en"
                      type="text"
                      {...register("tps_en")}
                      className=" bg-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tps-my" className=" text-gray-600">
                      Total Population Served (my)
                    </Label>
                    <Input
                      id="tps-my"
                      type="text"
                      {...register("tps_my")}
                      className=" bg-white"
                    />
                  </div>
                </div>
              </div>
              <div className=" pt-5">
                <Button className=" bg-secondary-blue text-white hover:bg-secondary-blue">
                  {loadEdit ? "Loading ..." : "Save"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
