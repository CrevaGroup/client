import React from "react";
import ServiceCards from "./ServiceCards";
import MobileServiceCards from "./MobileServiceCards";

const AllServiceCards = () => {
    return(
        <div>
            <ServiceCards/>
            <MobileServiceCards/>
        </div>
    )
}


export default AllServiceCards;