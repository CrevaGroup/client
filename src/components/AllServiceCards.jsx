import React from "react";
import ServiceCards from "./ServiceCards";
import MobileServiceCards from "./MobileServiceCards";

const AllServiceCards = ({img, name, description, price, id}) => {
    return(
        <div>
            <ServiceCards img={img} name={name} description={description} price={price} id={id}/>
            <MobileServiceCards img={img} name={name} description={description} price={price} id={id}/>
        </div>
    )
}


export default AllServiceCards;