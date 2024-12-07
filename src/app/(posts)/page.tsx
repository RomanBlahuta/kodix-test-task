import Image, {StaticImageData} from "next/image";
import Star from "../../../public/svg/star.svg";
import "../../../public/css/fonts.css";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost";
import PostCard from "@/components/PostCard/PostCard";

export default function Home() {
  return (
      <div className="Home flex flex-col justify-start items-center">
          <div className="mt-[33.79px] flex justify-center items-center">
              <Image src={Star as StaticImageData} alt="star icon"></Image>
              <h2 className="ml-[8px] text-black font-title-3">Featured</h2>
          </div>
          <FeaturedPost></FeaturedPost>
          <div className=" bg-white mt-[48.79px] mb-[130px] border-[1px] p-[20px] justify-center items-center flex
          flex-row gap-[20px] border-[#D6D6D6] rounded-[24px]">
              {[1, 2, 3, 4, 5].map(i => <PostCard key={i}></PostCard>)}
          </div>
      </div>
  );
}
