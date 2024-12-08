"use client"

import {PostModesEnum} from "@/utils/enums";
import {IPostDTO} from "@/utils/dto";

export interface IPostCardProps {
    mode: PostModesEnum;
    postData: IPostDTO;
}

export default function PostCard(props: IPostCardProps) {
    const alignmentByMode: string = props.mode === PostModesEnum.HOME ? "flex-col" : "flex-row";

    return (
        <div onClick={() => console.log("Post")} className={`cursor-pointer flex ${alignmentByMode} gap-[20px] justify-start items-start overflow-hidden`}>
            <div className="bg-[#F5F5F5] w-[246px] h-[136px] rounded-[24px]"></div>
            <div className="flex flex-col items-start justify-start overflow-hidden w-[246px]">
                <p className={`${props.mode === PostModesEnum.HOME ? "mt-20px " : ""}mb-[20px] font-date text-black/60`}>{"wednesday 12, march 2024".toUpperCase()}</p>
                <h2 className="font-post-title text-black mb-[8px]">A Journey into the Beauty and Majesty of Our
                    Planet</h2>
                <p className="font-subtitle text-black/50 truncate text-start h-[27px] w-[100%]">
                    Exploring breakthrough innovations, emerging technologies, and the impact of digital transformation
                    on society
                </p>
            </div>
        </div>
    );
};
