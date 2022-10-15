import React from "react";

export const BorderedButton=({ children, styles, extraTailwindClasses = "", clickHandler ,Type})=>{
    return (
        <div>
            <button className={`z-20 p-3 bg-lms-green text-sm font-bold hover: duration-700 hover:scale-90 focus:outline-1 focus:outline-black border-2 border-black ${extraTailwindClasses}`}
                type={Type}
                onClick={clickHandler}
            >
                {children}
            </button>
        </div>
    );
}
