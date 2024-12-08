import AppButton from "@/components/AppButton/AppButton";
import {AppButtonColorEnum} from "@/utils/enums";
import {ICommentDTO} from "@/utils/dto";
import "../../../public/css/fonts.css"

export interface ICommentProps {
    commentData: ICommentDTO;
}

export default function Comment(props: ICommentProps) {
    return (
        <div className="flex flex-col justify-start items-start border-[1px] border-[#D6D6D6] rounded-[24px] bg-white p-[16px]">
            <AppButton color={AppButtonColorEnum.WHITE}>
                <div className="flex flex-row justify-start items-center p-[5px] overflow-hidden">
                    <div className="inline-block rounded-[50%] w-[24px] h-[24px] bg-black/20 mr-[8px]"></div>
                    <span className="truncate flex-1">{ props.commentData.name }</span>
                </div>
            </AppButton>
            <p className="font-subtitle text-black mt-[8px]">{props.commentData.body}</p>
        </div>
    );
};
