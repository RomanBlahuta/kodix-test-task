"use client"

import "../../../public/css/fonts.css";
import "./AppButton.css"
import {AppButtonColorEnum} from "@/utils/enums";

export interface IAppButtonProps {
    onClick: () => void;
    color: AppButtonColorEnum;
    children: Element | Element[];
}

export default function AppButton(props: IAppButtonProps) {

    return (
        <button onClick={props.onClick} className={`AppButton border-[1px] border-black/10 w-[114px] h-[42px] 
        rounded-[24px] ${props.color === AppButtonColorEnum.WHITE ? "bg-white text-black font-btn-nav" : "bg-[#04AA00] text-white font-btn-nav-active"}`}>
            {props.children}
        </button>
)
    ;
};
