import React from "react";
import ServiceCards from "./ServiceCards";
import MobileServiceCards from "./MobileServiceCards";

const AllServiceCards = ({img}) => {
    return(
        <div>
            <ServiceCards img={img}/>
            <MobileServiceCards img={img}/>
        </div>
    )
}


export default AllServiceCards;