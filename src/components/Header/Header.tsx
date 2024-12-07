import Image, {StaticImageData} from "next/image";
import Kodix from "../../../public/svg/kodix.svg";
import Link from "next/link";
import "../../../public/css/fonts.css";
import AppButton from "@/components/AppButton/AppButton";
import {AppButtonColorEnum} from "@/utils/enums";

export default function Header() {
    const navOptions: string[] = ["Home", "Feature", "Blog", "Testimonials"];

    return (
        <div className="Header h-[96px] flex flex-row items-center border-b-[1px] border-black/[.10]">
            <div className="Header__nav ml-[59px] flex flex-1 justify-start">
                {navOptions.map((option, index) => <Link key={index} href="#" className={
                    `Header__nav-option my-[8.5px] mx-[17px] ${option === "Blog" ? "text-black font-btn-nav-active" : "text-black/50 font-btn-nav"}`
                }>{option}</Link>)}
            </div>

            <div className="Header__img flex flex-1 justify-center">
                <Image src={Kodix as StaticImageData} alt="kodix logo" className="Header__logo cursor-pointer"></Image>
            </div>

            <div className="Header__btns mr-[45px] flex flex-1 justify-end">
                <Link href="/sign-in"><AppButton color={AppButtonColorEnum.WHITE}>Log In</AppButton></Link>
                <div className="w-[9px] inline-block"></div>
                <Link href="/sign-up"><AppButton color={AppButtonColorEnum.ACCENT}>Sign Up</AppButton></Link>
            </div>
        </div>
    );
};

/*
* <button className="bg-white border-[1px] text-black font-btn-white border-black/10 w-[114px] h-[42px] rounded-[24px]">Log In</button>
                <div className="w-[9px] inline-block"></div>
                <button className="bg-[#04AA00] text-white font-btn-accent border-[1px] border-black/10 w-[114px] h-[42px] rounded-[24px]">Sign Up</button>
* */
