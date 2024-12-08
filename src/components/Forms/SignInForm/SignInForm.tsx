"use client"

import AppInput from "@/components/AppInput/AppInput";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import arrow from "../../../../public/svg/arrow.svg";
import "../../../../public/css/fonts.css";
import "../forms.css";
import {FormEvent} from "react";
import {FormFieldsEnum, FormTypesEnum} from "@/utils/enums";
import {parseFormData} from "@/utils/utils";
import {AUTH_KEY} from "@/utils/constants";
import RoutesEnum from "@/utils/routing";
import {useRouter} from "next/navigation";

export default function SignInForm() {

    const router = useRouter();

    function onSubmit(submit: FormEvent): void {
        submit.preventDefault();
        console.log(parseFormData(submit, FormTypesEnum.SIGN_IN));
        localStorage.setItem(AUTH_KEY, JSON.stringify(parseFormData(submit, FormTypesEnum.SIGN_IN)));
        router.push(RoutesEnum.HOME);
    }

    return (
        <form id="SignIn" name="SignIn" onSubmit={onSubmit}>
            <h1 className="font-form-title text-black mb-[23px]">Sign in</h1>
            <AppInput label="Email address" password={false} id={FormFieldsEnum.EMAIL} name={FormFieldsEnum.EMAIL} required={true}
                      placeholder="Email address"/>
            <div className="h-[24px]"></div>
            <AppInput label="Password" password={true} id={FormFieldsEnum.PASSWORD} name={FormFieldsEnum.PASSWORD} required={true}
                      placeholder="Password"/>
            <p className="font-forgot-password mt-[24px] mb-[32px] text-[#04AA00]">Forgot password?</p>
            <button type="submit" className="btn-submit bg-[#04AA00] rounded-[4px] w-[100%] h-[48px] flex flex-row justify-between items-center">
                <span className="ml-[24px] font-submit-btn text-white">Sign In</span>
                <Image className="mr-[12px]" src={arrow as StaticImageData} alt="arrow"></Image>
            </button>
            <div className="h-[48px]"></div>
            <span className="font-dont-have-an-account text-[#202020]">Don’t have an account?</span>
            <Link href={RoutesEnum.SIGN_UP} className="ml-[4px] font-sign-up-msg text-[#04AA00]">Sign Up</Link>
        </form>
    );
};
