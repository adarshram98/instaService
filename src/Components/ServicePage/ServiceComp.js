import React from 'react'
import './ServiceComp.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
const ServiceComp = ( {img,
    location,
    title,
    description,
    star,//seller
    price,//category
    }) => {
    return (
        <div className="servicecomp">
                        <img src={img} alt="" />
            <FavoriteBorderIcon className="servicecomp__heart" />

            <div className='servicecomp__info'>
                <div className="servicecomp__infoTop">
                {/* location - seller */}
                    <p>{location}</p>
                    {/* title -  */}
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="servicecomp__infoBottom">
                    <div className="servicecomp__stars">
                        <StarIcon className="servicecomp__star" />
                        <p>
                            {/* star- loc */}
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='servicecomp__price'>
                        <h2>$ {price}</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceComp
