import React from "react";
import ServiceCards from "./ServiceCards";
import MobileServiceCards from "./MobileServiceCards";

const AllServiceCards = ({img, name, description, price, id, items, modalidad}) => {
    return(
        <div>
            <ServiceCards img={img} name={name} description={description} price={price} id={id} items={items} modalidad={modalidad}/>
            <MobileServiceCards img={img} name={name} description={description} price={price} id={id} items={items} modalidad={modalidad} />
        </div>
    )
}


export default AllServiceCards;