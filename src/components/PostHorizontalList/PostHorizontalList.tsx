"use client"

import {useEffect, useState} from "react";
import {API_BASE} from "@/utils/constants";
import {IPostDTO} from "@/utils/dto";
import PostCard from "@/components/PostCard/PostCard";
import {PostModesEnum} from "@/utils/enums";

export interface IPostListProps {
    excludeId?: string;
    mode: PostModesEnum;
}

export default function PostHorizontalList({ excludeId, mode }: IPostListProps) {
    const [posts, setPosts] = useState<IPostDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                const postsResponse = await fetch(`${API_BASE}/posts`);
                if (!postsResponse.ok) throw new Error(`Failed to fetch posts: ${postsResponse.status}`);
                const postsData: IPostDTO[] = await postsResponse.json();

                if (excludeId) {
                    setPosts(postsData.filter(post => post.id !== parseInt(excludeId)));
                }
                else {
                    setPosts(postsData);
                }
            } catch (e: Error) {
                alert(e.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [excludeId])
    //1352
    return (
        <div className=" bg-white mt-[48.79px] mb-[130px] border-[1px] py-[20px] px-[10px] whitespace-nowrap w-[1352px] overflow-x-scroll
          border-[#D6D6D6] rounded-[24px]">
            {loading ? <p className="font-title-3 text-black">Loading...</p> :
                posts.map(postData =>
                    <div key={postData.id} className="inline-block mx-[10px]"><PostCard mode={mode} postData={postData}></PostCard></div>)}
        </div>
    );
};
