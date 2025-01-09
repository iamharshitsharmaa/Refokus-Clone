import React from "react";

function Stripe({ val }) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-5 py-4 flex justify-between items-center border-t-[1.4px] border-b-[1.4px] border-r-[1.4px] border-zinc-600">
            <img 
                className="h-7 object-contain" 
                src={val.url} 
                alt={`Stripe logo for ${val.number}`} 
            />
            <span className="font-semibold text-2xl text-white">{val.number}</span>
        </div>
    );
}

export default Stripe;
