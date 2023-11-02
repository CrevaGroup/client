import React from "react";

const FormIg = ({ change, submit, count, quantity}) => {
    return(
        <div
            className="w-full h-full "
        >
            <form
                className="w-full h-full flex flex-col justify-center items-center "
                onSubmit={submit}
            >
                <div
                    className="flex flex-col  w-full lg:w-3/5 h-full items-center justify-center bg-light-violet rounded-b-xl text-xl"
                >
                    <h1
                        className="text-3xl"
                    >
                        Actualizar post
                    </h1>

                    <div
                        className="flex"
                    >
                            <button
                                className=" text-2xl m-4 border-2 border-custom-gray rounded-full transition duration-200 ease-in-out hover:bg-custom-gray hover:duration-200 h-8 w-8 flex items-center justify-center"
                                value={0}
                                onClick={count}
                            >-</button>

                            <button
                                className=" text-2xl m-4 border-2 border-custom-gray rounded-full transition duration-200 ease-in-out hover:bg-custom-gray hover:duration-200 h-8 w-8 flex items-center justify-center"
                                value={1}
                                onClick={count}
                            >+</button>

                    </div>
                    

                    <div
                        className="flex flex-col  w-3/4"
                    >
                        {
                            Array.from({ length: quantity }, (_, index) => (
                                <div
                                    key={index}
                                >
                                    <p>
                                        {`Ingresar URL del post #${index+1}`}
                                    </p>
                                    <input
                                        key={index}
                                        className="my-2 w-full p-2 rounded-lg outline-none"
                                        onChange={e => change(e, index)}
                                    >
                                    </input>
                                </div>
                            ))
                        }
                    </div>
                    <button
                        type="submit"
                        className="px-2 text-lgp py-2 my-8 border-2 border-custom-gray rounded-2xl transition duration-200 ease-in-out hover:bg-dark-violet hover:text-custom-gray hover:border-dark-violet hover:duration-200"
                    >Postear</button>

                </div>

            </form>
        </div>
    )
}

export default FormIg;