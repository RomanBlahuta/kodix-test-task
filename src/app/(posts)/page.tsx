import Image, {StaticImageData} from "next/image";
import Star from "../../../public/svg/star.svg";
import "../../../public/css/fonts.css";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost";
import {PostModesEnum} from "@/utils/enums";
import PostHorizontalList from "@/components/PostHorizontalList/PostHorizontalList";

export default function Home() {
  return (
      <div className="Home flex flex-col justify-start items-center pt-[33.79px] pb-[130px] px-45px">
          <div className="flex justify-center items-center">
              <Image src={Star as StaticImageData} alt="star icon"></Image>
              <h2 className="ml-[8px] text-black font-title-3">Featured</h2>
          </div>
          <FeaturedPost mode={PostModesEnum.HOME}></FeaturedPost>
          <PostHorizontalList mode={PostModesEnum.HOME}></PostHorizontalList>
      </div>
  );
}
