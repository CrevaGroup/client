import React from "react";


const FormText = ({submit, change}) => {
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
                    <div
                        className="text-3xl"
                    >
                        <h1>Publicar articulo</h1>
                    </div>
                    <div
                        className=" w-3/4 my-2"
                    >
                        <p>Titulo</p>

                        <input
                            className="w-full p-1 rounded-lg outline-none"
                            name="title"
                            onChange={change}
                        ></input>
                    </div>

                    <div
                        className="w-3/4 my-2"
                    >
                        <p>Contenido</p>
                        <input
                            className="w-full p-4 rounded-lg outline-none"
                            name="text"
                            onChange={change}
                        ></input>
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

export default FormText;