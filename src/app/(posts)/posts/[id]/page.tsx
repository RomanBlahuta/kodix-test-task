"use client"

import FeaturedPost from "@/components/FeaturedPost/FeaturedPost";
import {AppButtonColorEnum, PostModesEnum} from "@/utils/enums";
import Image, {StaticImageData} from "next/image";
import article from "../../../../../public/svg/article.svg";
import AppButton from "@/components/AppButton/AppButton";
import "../../../../../public/css/fonts.css";
import {API_BASE, AUTH_KEY} from "@/utils/constants";
import {redirect} from "next/navigation";
import RoutesEnum from "@/utils/routing";
import {use, useEffect, useState} from "react";
import {ICommentDTO, IPostDTO, IUserDTO} from "@/utils/dto";
import Comment from "@/components/Comment/Comment";
import PostCard from "@/components/PostCard/PostCard";

export interface IPostRouteParams {
    id: string;
}

export default function PostPage({ params }: {params: Promise<IPostRouteParams>}) {
    const {id} = use(params);
    const [currentPost, setCurrentPost] = useState<IPostDTO>(null);
    const [author, setAuthor] = useState<IUserDTO>(null);
    const [comments, setComments] = useState<ICommentDTO[]>([]);
    const [posts, setPosts] = useState<IPostDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    if(!localStorage.getItem(AUTH_KEY)) {
        redirect(RoutesEnum.SIGN_IN);
    }

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                const postsResponse = await fetch(`${API_BASE}/posts`);
                if (!postsResponse.ok) throw new Error(`Failed to fetch posts: ${postsResponse.status}`);
                const postsData: IPostDTO[] = await postsResponse.json();

                setPosts(postsData.filter(post => post.id !== parseInt(id)));
            } catch (e: Error) {
                alert(e.message);
            } finally {
                setLoading(false);
            }
        }

        async function fetchCurrentPost() {
            try {
                setLoading(true);
                const currentPostResponse = await fetch(`${API_BASE}/posts/${id}`);
                if (!currentPostResponse.ok) throw new Error(`Failed to fetch current post: ${currentPostResponse.status}`);
                const currentPostData: IPostDTO = await currentPostResponse.json();

                const authorResponse = await fetch(`${API_BASE}/users/${currentPostData.userId}`);
                if (!authorResponse.ok) throw new Error(`Failed to fetch post's author: ${authorResponse.status}`);
                const authorData: IUserDTO = await authorResponse.json();

                const commentsResponse = await fetch(`${API_BASE}/posts/${id}/comments`);
                if (!commentsResponse.ok) throw new Error(`Failed to fetch post's comments: ${commentsResponse.status}`);
                const commentsData: ICommentDTO[] = await commentsResponse.json();

                setCurrentPost(currentPostData);
                setAuthor(authorData);
                setComments(commentsData);
            } catch (e: Error) {
                alert(e.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCurrentPost();
        fetchPosts();
    }, [id]);

    return (
        <div className="PostPage flex flex-row pl-[148px] pr-[138px] pt-[27px] justify-between">
            <div className="w-[553px]">
                {
                    loading ? <p className="font-title-1 text-black">Loading...</p> :
                        <>
                            <FeaturedPost postData={currentPost} author={author} mode={PostModesEnum.POST}/>
                            <div className="flex flex-col justify-start items-start mt-[32px] gap-[24px]">
                                {comments.map(comment => <Comment key={comment.id} commentData={comment}/>)}
                            </div>
                        </>
                }
            </div>
            <div className="w-[471px] mb-[166px]">
                <div className="flex flex-row justify-between items-center mb-[38px]">
                    <div className="flex">
                        <Image className="mr-[8px]" src={article as StaticImageData} alt="article"></Image>
                        <h2 className="font-title-3 text-black">Related Articles</h2>
                    </div>

                    <AppButton onClick={() => console.log("Read More")} color={AppButtonColorEnum.WHITE}>Read More</AppButton>
                </div>
                <div className="flex flex-col gap-[44px]">
                    {loading ? <p className="font-title-3 text-black">Loading...</p> :
                        posts.map(post => <PostCard mode={PostModesEnum.POST} key={post.id} postData={post}/>)}
                </div>
            </div>
        </div>
    );
}
