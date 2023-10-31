import React from "react";
import Footer from "../components/Footer";
import blog from '../assets/blogv.png'
import Services from "../components/Services";
import { InstagramEmbed } from 'react-social-media-embed';


const Blog = () => {
    const postQuantity = 3;
    const posts = [];

    for(let i=0 ; i<postQuantity; i++){
        posts.push(
            <div
                key={i}
                className="flex justify-center w-full"
            >
                <InstagramEmbed url={`https://www.instagram.com/p/Cs9HfB5A8SC/`}/>
            </div>
        )
    }
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
                    >Nuestro Blog</h1>
                </div>
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
                    <div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-x-8  gap-y-8  w-full lg:mx-16"
                >

                    {
                        posts.map(post => post)
                    }

                </div>
                </div>
                <Services/>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog;