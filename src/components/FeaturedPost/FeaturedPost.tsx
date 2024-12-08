"use client"

import AppButton from "@/components/AppButton/AppButton";
import {SOCIALS} from "@/utils/constants";
import Image from "next/image";
import {AppButtonColorEnum, PostModesEnum} from "@/utils/enums";
import {IPostDTO, IUserDTO} from "@/utils/dto";

export interface IFeaturedPostProps {
    mode: PostModesEnum;
    postData?: IPostDTO;
    author?: IUserDTO;
}

export default function FeaturedPost(props: IFeaturedPostProps) {
    const alignmentByMode: string = props.mode === PostModesEnum.HOME ? "items-center text-center" : "items-start";
    const imgSizebyMode: string = props.mode === PostModesEnum.HOME ? "w-[894px] h-[339px]" : "w-[553px] h-[246.57px]";

    return (
        <div className={`FeaturedPost flex flex-col justify-start ${alignmentByMode}`}>
            <h1 className={`${props.mode === PostModesEnum.HOME ? 'mt-[20px] ' : ''}mb-[8px] text-black font-title-1`}>
                {
                    props.postData ? props.postData.title :
                        <>Global Climate Summit<br/> Urges Immediate Action</>
                }
            </h1>

            <p className="font-subtitle text-black/50">
                {
                    props.postData ? props.postData.body :
                        <>Leaders from around the world gathered for a global climate summit,
                            emphasizing the urgent need for coordinated action to address climate change.</>
                }
            </p>

            <div className="flex flex-row justify-center items-center mt-[29.5px]">
                <span className="font-subtitle text-black/60">{"wednesday 12, march 2024".toUpperCase()}</span>
                <div className="inline-block w-[20px]"></div>
                <AppButton onClick={() => console.log("Author")} color={AppButtonColorEnum.WHITE}>
                    <div className="flex flex-row justify-start items-center p-[5px] overflow-hidden">
                        <div className="inline-block flex-shrink-0 rounded-[50%] w-[24px] h-[24px] bg-black/20 mr-[8px]"></div>
                        <p className="flex-shrink-0 whitespace-nowrap mr-[8px]">{props.author ? props.author.name : <>John Doe</>}</p>
                    </div>
                </AppButton>
            </div>

            <div className={`my-[20px] bg-[#F5F5F5] ${imgSizebyMode} rounded-[24px] relative`}>
                <div className="flex flex-row justify-center items-center inline-block absolute h-[20px] bg-black/40
                text-white bottom-[21.79px] left-[16px] rounded-[2px] px-[8px] py-[4px]">
                    <span className="font-img-author">Photo by Antara</span>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center">
                <span className="font-socials text-black">Share to</span>
                <div className="ml-[12px] flex flex-row justify-center items-center gap-[8.9px]">
                    { SOCIALS.map(social =>
                        <Image className=" cursor-pointer" key={social.icon} src={social.src} alt={social.icon} />) }
                </div>
            </div>
        </div>
    );
};
