import React from "react";
<div
    className=""
>
    <div>
        
    </div>
    
</div>

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
                    className="flex flex-col  w-full lg:w-3/5 h-full items-center justify-center bg-light-violet rounded-b-xl"
                >
                    <p>Titulo</p>
                    <input
                        name="title"
                        onChange={change}
                    ></input>

                    <div>
                        <p>Contenido</p>
                        <input
                            name="text"
                            onChange={change}
                        ></input>
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

export default FormText;