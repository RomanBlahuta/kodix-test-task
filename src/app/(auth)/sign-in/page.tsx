import Link from "next/link";
import {Roboto} from "next/font/google";
import "../../../../public/css/fonts.css"
import SignInForm from "@/components/Forms/SignInForm/SignInForm";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['700'],
});

export default function SignIn() {
    return (
        <div className="SignIn w-[751px] bg-white flex flex-row border-[1px] border-black rounded-[25px]">
            <div className="SignIn__form-container flex-grow p-[32px]">
                <SignInForm></SignInForm>
            </div>

            <div className="SignIn__info-container flex flex-col justify-center items-center bg-black w-[293px] h-[100%] rounded-r-[25px]">
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
