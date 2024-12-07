import fb from '../../public/svg/fb.svg';
import x from '../../public/svg/x.svg';
import yt from '../../public/svg/yt.svg';
import {StaticImageData} from "next/image";
import {SocialsEnum} from "@/utils/enums";

export const SOCIALS: {icon: SocialsEnum, src: StaticImageData}[] = [
    {icon: SocialsEnum.FB, src: fb as StaticImageData},
    {icon: SocialsEnum.X, src: x as StaticImageData},
    {icon: SocialsEnum.YT, src: yt as StaticImageData},
];
