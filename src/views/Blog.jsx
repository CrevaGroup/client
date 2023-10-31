import React from "react";
import Footer from "../components/Footer";
import blog from '../assets/blogv.png'
import Services from "../components/Services";


const Blog = () => {
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
                    className="grid grid-cols-1 lg:grid-cols-3 gap-x-20 w-3/4 gap-y-8 "
                >
                    <div
                        className="bg-red-400 h-20"
                    >
                        
                    </div>
                    <div
                        className="bg-blue-500 h-20"
                    >
                        
                    </div>
                    <div
                        className="bg-white h-20"
                    >
                        
                    </div>

                </div>
                </div>
                <Services/>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog;