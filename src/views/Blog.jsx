import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import blog from '../assets/blogv.png'
import Services from "../components/Services";
import { InstagramEmbed } from 'react-social-media-embed';
import EditDocument from "../assets/EditDocument.svg";
import BlogsMenu from "../components/BlogsMenu";
import { useDispatch, useSelector } from "react-redux";
import { getPostIg, getPostText } from "../Redux/Actions/actions";

const Blog = () => {

    const [postMenu,setPostMenu] = useState(false)
    const dispatch = useDispatch();
    const [quant, setQuant] = useState('');

    const postsText = useSelector(state => state.postText);
    const postsIg = useSelector(state => state.postIg)

    const disableHandler = () => {
        setPostMenu(postMenu ? false : true)
        console.log(postsText)
    }

    useEffect(() => {
        dispatch(getPostIg());
        dispatch(getPostText());
    }, [dispatch]);
    
    useEffect(() => {
        let quant = '';
        if (postsIg.length % 2 === 0 && postsIg.length % 3 !== 0) {
            quant = 'lg:grid-cols-2';
        } else if (postsIg.length % 3 === 0) {
            quant = 'lg:grid-cols-3';
        } else {
            quant = 'lg:grid-cols-1';
        }

        setQuant(quant);
    }, [postsIg]);
    
    return(
        <div>
            <div
                className=" flex flex-col min-h-screen h-full w-full bg-custom-gray cursor-default"
            >
                <div
                    className="flex items-center justify-center mt-4 lg:mt-8 lg:my-0"
                >
                    <h1
                        className=" text-3xl lg:text-5xl text-dark-gray-blue"
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
                    className="flex  flex-col items-center justify-center my-16"
                >
                   


                    {
                        postsIg.length > 0 ? <div
                            className={`grid grid-cols-1 ${quant} gap-x-8  gap-y-8  w-full lg:mx-16`}
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

                    {
                        postsText.length > 0 ? (
                            <div className="flex flex-col items-center justify-center my-8 w-full">
                                {
                                    [...postsText].reverse().map((post, index) => {
                                        const fechaCompleta = post.createdAt;
                                        const fecha = new Date(fechaCompleta);
                                        const año = fecha.getFullYear();
                                        const mes = fecha.getMonth() + 1;
                                        const dia = fecha.getDate();
                                        const fechaFormateada = `${dia < 10 ? '0' : ''}${dia}-${mes < 10 ? '0' : ''}${mes}-${año}`;

                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col w-10/12 lg:w-3/5 justify-center my-4 text-dark-gray-blue"
                                            >
                                                <div className="flex flex-col lg:flex-row my-4 items-center ">
                                                    <h1 className="font-bold text-3xl">{post.title}</h1>
                                                    <p className="mr-auto my-2 lg:ml-auto lg:mr-0">{fechaFormateada}</p>
                                                </div>
                                                <p className="text-xl p-2 whitespace-pre-line">{`${post.content}`}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        ) : ''
                    }
                

                </div>
                <Services/>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog;
/*
                    <div
                        className="flex flex-col  w-10/12 lg:w-3/5 justify-center  my-4 text-dark-gray-blue"
                    >
                        <h1
                            className="my-4 font-bold text-3xl "
                        >Actualizacion de precios</h1>
                        <p
                            className="text-xl p-2 whitespace-pre-line"
                        >{`Mollit ut dolore in minim incididunt exercitation duis nisi 
                        culpa incididunt excepteur quis laboris.Laboris velit in voluptate commodo elit.Esse irure incididunt non Lorem officia
                         
                        magna culpa.Aliquip Lorem nulla anim consequat duis id in.
                        Ea aliqua anim ullamco proident voluptate.`}</p>
                    </div>

                    <div
                        className="flex flex-col w-10/12 lg:w-3/5 justify-center  my-4 text-dark-gray-blue"
                    >
                        <h1
                            className="my-4 font-bold text-3xl "
                        >Actualizacion de precios</h1>
                        <p
                            className="text-xl p-2 whitespace-pre-line"
                        >{`Mollit ut dolore in minim incididunt exercitation duis nisi 
                        culpa incididunt excepteur quis laboris.Laboris velit in voluptate commodo elit.Esse irure incididunt non Lorem officia
                         
                        magna culpa.Aliquip Lorem nulla anim consequat duis id in.
                        Ea aliqua anim ullamco proident voluptate.`}</p>
                    </div>
                    <div
                        className="flex flex-col w-10/12 lg:w-3/5 justify-center  my-4 text-dark-gray-blue"
                    >
                        <h1
                            className="my-4 font-bold text-3xl "
                        >Actualizacion de precios</h1>
                        <p
                            className="text-xl p-2 whitespace-pre-line"
                        >{`Mollit ut dolore in minim incididunt exercitation duis nisi 
                        culpa incididunt excepteur quis laboris.Laboris velit in voluptate commodo elit.Esse irure incididunt non Lorem officia
                         
                        magna culpa.Aliquip Lorem nulla anim consequat duis id in.
                        Ea aliqua anim ullamco proident voluptate.`}</p>
                    </div>



                </div >*/