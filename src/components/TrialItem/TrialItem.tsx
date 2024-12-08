import Image from "next/image";
import {ITrialItem} from "@/utils/constants";
import "../../../public/css/fonts.css";

export default function TrialItem({ itemData }: {itemData: ITrialItem}) {
    return (
        <div className="flex flex-row items-start gap-[8px]">
            <Image width={24} height={24} src={itemData.icon} alt={itemData.alt}></Image>
            <div className="mt-[4px]">
                <h2 className="font-sign-up-msg text-white mb-[7px]">{itemData.title}</h2>
                {itemData.text.split('\n').map(line => <p key={line}
                    className="font-pro-subtitle text-[#484848]">{line}</p>)}
            </div>
        </div>
    );
};
