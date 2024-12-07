"use client"

import "../../../public/css/fonts.css";
import "./AppInput.css";
import eye from "../../../public/svg/eye.svg";
import Image, {StaticImageData} from "next/image";
import {useState} from "react";

export interface IAppInputProps {
    label: string;
    placeholder: string;
    password: boolean;
    id: string;
    name: string;
    required: boolean;
}

export default function AppInput(props: IAppInputProps) {
    const [isPassword, setIsPassword] = useState(props.password);

    return (
        <div className="">
            <label htmlFor={props.id} className="inline-block font-form-label text-black mb-[12px]">{props.label}</label>
            <div className="relative">
                <input id={props.id} name={props.name} placeholder={props.placeholder || ""}
                       type={!isPassword ? "text" : "password"}
                       className="AppInput box-border p-[16px] w-[100%] bg-white border-[1px] border-[#E8E8E8] rounded-[4px] h-[48px]"/>
                {(props.password) ? <Image onClick={() => setIsPassword(!isPassword)} className="cursor-pointer
                absolute top-[12px] right-[12px]" src={eye as StaticImageData} alt="eye"></Image> : <></>}
            </div>
        </div>
    );
};
