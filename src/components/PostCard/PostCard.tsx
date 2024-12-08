"use client"

import {PostModesEnum} from "@/utils/enums";
import {IPostDTO} from "@/utils/dto";
import {useRouter} from "next/navigation";
import RoutesEnum from "@/utils/routing";

export interface IPostCardProps {
    mode: PostModesEnum;
    postData: IPostDTO;
}

export default function PostCard(props: IPostCardProps) {
    const router = useRouter();
    const alignmentByMode: string = props.mode === PostModesEnum.HOME ? "flex-col" : "flex-row";

    return (
        <div onClick={() => router.push(`${RoutesEnum.POSTS}/${props.postData.id}`)}
             className={`cursor-pointer flex ${alignmentByMode} gap-[20px] justify-start items-start`}>
            <div className="bg-[#F5F5F5] flex-shrink-0 w-[246px] h-[136px] rounded-[24px]"></div>
            <div className="flex flex-col items-start justify-start w-[246px]">
                <p className={`${props.mode === PostModesEnum.HOME ? "mt-20px " : ""}mb-[20px] font-date text-black/60`}>
                    {"wednesday 12, march 2024".toUpperCase()}
                </p>
                <p className="font-post-title text-black whitespace-normal mb-[8px]">
                    {props.postData.title}
                </p>
                <p className="font-subtitle text-black/50 truncate text-start h-[27px] w-[100%]">
                    {props.postData.body}
                </p>
            </div>
        </div>
    );
};
