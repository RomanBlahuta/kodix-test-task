import fb from '../../public/svg/fb.svg';
import x from '../../public/svg/x.svg';
import yt from '../../public/svg/yt.svg';
import free from '../../public/svg/free.svg';
import fast from '../../public/svg/fast.svg';
import personal from '../../public/svg/personal.svg';
import circle_star from '../../public/svg/circle_star.svg';
import {StaticImageData} from "next/image";
import {SocialsEnum} from "@/utils/enums";

export const API_BASE = "https://jsonplaceholder.typicode.com";

export interface ITrialItem {
    icon: StaticImageData;
    title: string;
    text: string;
    alt: string;
}

export const SOCIALS: {icon: SocialsEnum, src: StaticImageData}[] = [
    {icon: SocialsEnum.FB, src: fb as StaticImageData},
    {icon: SocialsEnum.X, src: x as StaticImageData},
    {icon: SocialsEnum.YT, src: yt as StaticImageData},
];

export const TRIAL_ITEMS: ITrialItem[] = [
    {
        icon: free as StaticImageData,
        title: 'Absolutely FREE',
        text: 'No hidden charges, No credit\n card required',
        alt: 'free'
    },
    {
        icon: fast as StaticImageData,
        title: 'Fast & Easy',
        text: 'Get access instantly, no\n downloads required',
        alt: 'fast',
    },
    {
        icon: personal as StaticImageData,
        title: 'Your Own Data',
        text: 'Enjoy the Free Trial with your\n company data',
        alt: 'personal',
    },
    {
        icon: circle_star as StaticImageData,
        title: 'Unlimited Features',
        text: 'Access all features of the\n world\'s #1 business software!',
        alt: 'circle_star',
    },
];

export const AUTH_KEY: string = 'auth';
