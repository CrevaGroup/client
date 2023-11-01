import React, { useState } from "react";

const BlogsMenu = () => {

    const [quantityPosts, setQuantityPosts] = useState(1);
    const [posts, setPosts] = useState([]);

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

    const changeHandler = (e, index) => {
       
        const { name, value } = e.target;
        const updatedPosts = [...posts];
        updatedPosts[index] = { ...updatedPosts[index], [name]: value };
        setPosts(updatedPosts);
    };

    const submitHandler = e => {
        e.preventDefault();
        console.log(posts)
    }

    return(
        <div className="flex items-center justify-center w-full h-full bg-black ">
            <form
            className="w-full h-full"
                onSubmit={submitHandler}
            >
                <div
                className="flex flex-col bg-red-500 w-full h-full items-center justify-center"
            >
                <p>Actualizar post</p>

                <div>
                    <button
                    value={0}
                    onClick={countHandler}
                >-</button>
                <button
                    value={1}
                    onClick={countHandler}
                >+</button>
                </div>

                <div
                    className="flex flex-col "
                >
                    {
                    Array.from({ length: quantityPosts }, (_, index) => (
                        <input
                            key={index}
                            name={`post${index}`}
                            className="my-2"
                            onChange={e => changeHandler(e,index)}
                        >
                        </input>
                    ))
                    }   
                </div>
                    <button
                type="submit"
            >
                CLICK
            </button>
            </div>
            
            </form>
        </div>
    )
}

export default BlogsMenu;