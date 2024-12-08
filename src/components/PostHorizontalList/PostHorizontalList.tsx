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
    return (
        <div className=" bg-white mt-[48.79px] mb-[130px] border-[1px] p-[20px] justify-center items-start flex
          flex-row gap-[20px] border-[#D6D6D6] rounded-[24px]">
            {loading ? <p className="font-title-3 text-black">Loading...</p> :
                posts.slice(0, 5).map(postData =>
                    <PostCard mode={mode} key={postData.id} postData={postData}></PostCard>)}
        </div>
    );
};
