"use client";

import Link from "next/link";
import {Roboto} from "next/font/google";
import "../../../../public/css/fonts.css"
import AppInput from "@/components/AppInput/AppInput";
import AppButton from "@/components/AppButton/AppButton";
import {AppButtonColorEnum} from "@/utils/enums";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['700'],
});

export default function SignIn() {
    return (
        <div className="SignIn w-[751px] h-[485px] bg-white flex flex-row border-[1px] border-black rounded-[25px]">
            <div className="SignIn__form-container flex-grow p-[32px]">
                <h1 className="font-form-title text-black mb-[23px]">Sign In</h1>
                <AppInput label="Email address" password={false} id={"email"} name={"email"} required={true}
                          placeholder="Email address"/>
                <div className="h-[24px]"></div>
                <AppInput label="Password" password={true} id={"password"} name={"password"} required={true}
                          placeholder="Password"/>
                <p className="font-forgot-password mt-[24px] mb-[32px] text-[#04AA00]">Forgot password?</p>
                <AppButton onClick={() => console.log("Submit")} color={AppButtonColorEnum.ACCENT}></AppButton>
            </div>

            <div
                className="SignIn__info-container flex flex-col justify-center items-center bg-black w-[293px] h-[100%] rounded-r-[25px]">
                <div className="flex flex-row gap-[11px] justify-center items-center">
                    <span className={`${roboto.className} text-white font-kodix-logo`}>Kodix</span>
                    <div className="inline-block border-[1px] border-[#1FFF1A]
                    rounded-[4px] text-[#1FFF1A] py-[4px] px-[8px] font-pro">PRO</div>
                </div>
                <p className="text-[#484848] font-pro-subtitle mt-[16px] mb-[24px]">Unlimited traffic, strategic <br/>support, and AI-driven upsells</p>
                <Link className="text-[#1FFF1A] font-learn-more" href="#">Learn More</Link>
            </div>
        </div>
    );
}
