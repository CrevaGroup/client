import React from "react";
import ServiceCards from "./ServiceCards";
import MobileServiceCards from "./MobileServiceCards";

const AllServiceCards = ({img, name, description, price}) => {
    return(
        <div>
            <ServiceCards img={img} name={name} description={description} price={price}/>
            <MobileServiceCards img={img} name={name} description={description} price={price}/>
        </div>
    )
}


export default AllServiceCards;