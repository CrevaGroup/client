import React, { useEffect, useState } from "react";
import FormIg from "./FormIg";
import FormText from "./FormText";

const BlogsMenu = () => {

    const [quantityPosts, setQuantityPosts] = useState(1);
    const [posts, setPosts] = useState([]);
    const [menu, setMenu] = useState(0);
    const [design, setDesign] = useState('rounded-xl');
    const [postText, setPostText] = useState([]);

    const countHandler = (e) => {
        e.preventDefault();
        const { value } = e.target;
        if (!Number(value)) {
            if (quantityPosts > 1) {
                setQuantityPosts(prevQuantity => prevQuantity - 1);
            }
        } else {
                setQuantityPosts(prevQuantity => prevQuantity + 1);
            
        }
    }

    const changeHandlerIg = (e, index) => {
       
        const { name, value } = e.target;
        setPosts(prevPosts => {
            const updatedPosts = [...prevPosts];
            updatedPosts[index] = value;
            return updatedPosts;
        });
    };
    
    const changeHandlerText = e => {
        const { name, value } = e.target;
        setPostText(prevPost => {
            const updatedPost = [...prevPost];
            if(name === 'title') {
                updatedPost[0] = value;
            } else {
                updatedPost[1] = value;
            }
            return updatedPost
        })
    }

    const submitIgHandler = e => {
        e.preventDefault();
        console.log(posts)
    }
    const submitTextHandler = e => {
        e.preventDefault();
        console.log(postText)
    }

    const menuHandler = e => {
        const { value } = e.target;
        setMenu(prevMenu => {
            if (value === prevMenu) {
                return 0;
            } else {
                return value;
            }
        });
        console.log(menu);
    }

    useEffect(() => {
        if (menu == 1 || menu == 2) {
            setDesign('rounded-t-xl');
        } else {
            setDesign('rounded-xl');
        }
    }, [menu]);

    return(
        <div className="flex items-center justify-center w-full h-full flex-col my-8">
            <div
                className={` w-full   lg:w-3/5 bg-light-violet flex  items-center justify-evenly ${design}`}
            >
                <div
                    className="my-8 border-2 border-custom-gray rounded-xl transition duration-200 ease-in-out hover:bg-custom-gray hover:duration-200"
                >
                    <button
                        value={1}
                        onClick={menuHandler}
                        className="mx-2 text-lg"
                    >Text</button>
                </div>

                <div
                    className="my-8 border-2 border-custom-gray rounded-xl transition duration-200 ease-in-out hover:bg-custom-gray hover:duration-200"
                >
                    <button
                        value={2}
                        onClick={menuHandler}
                        className="mx-2 text-lg"
                    >Instagram</button>
                </div>

            </div>
            {
                menu == 2 ? <div
                    className="w-full h-full"
                >
                    <FormIg
                        submit={submitIgHandler}
                        count={countHandler}
                        change={changeHandlerIg}
                        quantity={quantityPosts}
                    />
                </div> : ''
            }
            {
                menu == 1 ? <div
                    className="w-full h-full"
                >
                    <FormText
                        change={changeHandlerText}
                        submit={submitTextHandler}
                    />
                </div> : ''
            }
        </div>
    )
}

export default BlogsMenu;