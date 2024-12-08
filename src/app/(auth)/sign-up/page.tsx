import SignUpForm from "@/components/Forms/SignUpForm/SignUpForm";
import {TRIAL_ITEMS} from "@/utils/constants";
import TrialItem from "@/components/TrialItem/TrialItem";

export default function SignUp() {
    return (
        <div className="SignUp bg-white flex flex-row border-[1px] border-black rounded-[25px]">
            <div className="SignUp__form-container p-[32px] w-[458px]">
                <SignUpForm></SignUpForm>
            </div>

            <div className="SignUp__info-container p-[32px] flex flex-col justify-center items-center bg-black w-[293px] h-[100%] rounded-r-[25px]">
                <h1 className="font-form-title text-white">Get Your FREE <br/>30-Days Trial Now!</h1>
                <div className="flex flex-col mt-[24px] gap-[16px] mb-[61px]">
                    {TRIAL_ITEMS.map(item => <TrialItem key={item.alt} itemData={item} />)}
                </div>
                <p className="font-sign-up-msg text-white">Call us at <span className="text-[#1FFF1A]">800 1301 448</span></p>
            </div>
        </div>
    );
}
//
