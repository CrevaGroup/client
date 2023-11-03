import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import blog from '../assets/blogv.png'
import Services from "../components/Services";
import { InstagramEmbed } from 'react-social-media-embed';

import EditDocument from "../assets/EditDocument.svg";
import BlogsMenu from "../components/BlogsMenu";
import { useDispatch, useSelector } from "react-redux";
import { getPostIg } from "../Redux/Actions/actions";

const Blog = () => {

    const [postMenu,setPostMenu] = useState(false)
    const dispatch = useDispatch();

    const postsText = useSelector(state => state.postText);
    const postsIg = useSelector(state => state.postIg)

    const disableHandler = () => {
        setPostMenu(postMenu ? false : true)
        console.log(postsIg)
    }


    useEffect(() => {
        dispatch(getPostIg());
    }, [dispatch]);
    
    
    
    return(
        <div>
            <div
                className=" flex flex-col min-h-screen h-full w-full bg-custom-gray cursor-default"
            >
                <div
                    className="flex items-center justify-center mt-4 lg:mt-8 lg:my-0"
                >
                    <h1
                        className=" text-5xl text-dark-gray-blue"
                    >
                        Nuestro Blog
                    </h1>
                              
                
                    <img
                    src={EditDocument}
                    alt="EditDocument"
                    className="w-8 cursor-pointer"
                    onClick={disableHandler}
                    />
                </div>
                {
                    postMenu && 
                    <div> 
                        <BlogsMenu
                            dis = {disableHandler}
                        />
                    </div>
                }
                <div
                    className="flex items-center justify-center"
                >
                    <img
                        className=" h-48 lg:h-[560px] "
                        src={blog}
                    ></img>
                </div>
                <div
                    className="flex items-center justify-center my-16"
                >
                   


                    {
                        postsIg.length > 0 ? <div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-x-8  gap-y-8  w-full lg:mx-16"
                        >
                            {
                                postsIg.map((post,index) =>(
                                    <div
                                        key={index}
                                        className="flex justify-center w-full"
                                    >
                                        <InstagramEmbed 
                                            className="w-[328px] lg:w-[400px]"
                                        url={`${post.url}`} />

                                    </div>
                                ))  
                            }

                            </div> : ''
                    }
                

                </div>
                <Services/>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog;