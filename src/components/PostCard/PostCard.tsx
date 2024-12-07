"use client"

export default function PostCard() {
    return (
        <div onClick={() => console.log("Post")} className="cursor-pointer w-[246px] h-[268px] flex flex-col justify-center items-start overflow-hidden">
            <div className="bg-[#F5F5F5] w-[246px] h-[136px] rounded-[24px]"></div>
            <p className=" my-[20px] font-date text-black/60">{"wednesday 12, march 2024".toUpperCase()}</p>
            <h2 className="font-post-title text-black mb-[8px]">A Journey into the Beauty and Majesty of Our Planet</h2>
            <p className="font-subtitle text-black/50 truncate text-start h-[27px] w-[100%]">
                Exploring breakthrough innovations, emerging technologies, and the impact of digital transformation on society
            </p>
        </div>
    );
};
