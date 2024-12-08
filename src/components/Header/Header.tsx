"use client"

import Image, {StaticImageData} from "next/image";
import Kodix from "../../../public/svg/kodix.svg";
import Link from "next/link";
import "../../../public/css/fonts.css";
import AppButton from "@/components/AppButton/AppButton";
import {AppButtonColorEnum} from "@/utils/enums";
import RoutesEnum from "@/utils/routing";
import {AUTH_KEY} from "@/utils/constants";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function Header() {

    const navOptions: string[] = ["Home", "Feature", "Blog", "Testimonials"];
    const [isAuth, setIsAuth] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        setIsAuth(localStorage.getItem(AUTH_KEY));
    }, []);

    function signIn(): void {
        router.push(RoutesEnum.SIGN_IN);
    }

    function signUp(): void {
        router.push(RoutesEnum.SIGN_UP);
    }

    function logOut(): void {
        localStorage.clear();
        setIsAuth(localStorage.getItem(AUTH_KEY));
        router.refresh();
    }

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
                {(!isAuth) ?
                    <><AppButton onClick={signIn} color={AppButtonColorEnum.WHITE}>Log In</AppButton>
                    <div className="w-[9px] inline-block"></div>
                    <AppButton onClick={signUp} color={AppButtonColorEnum.ACCENT}>Sign Up</AppButton></>
                    :
                    <AppButton onClick={logOut} color={AppButtonColorEnum.WHITE}>Log Out</AppButton>}
            </div>
        </div>
    );
};
