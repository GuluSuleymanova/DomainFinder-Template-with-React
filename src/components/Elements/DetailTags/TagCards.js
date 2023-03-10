import React, { useState } from 'react'
import TagCardItem from './TagCardItem';

const TagCards = () => {

    let [tagbuttons, setTagbuttons] = useState([
        {
            title: "Tags",
            tags: ["adobe", "design", "creative", "designer", "photos", "illustrator"],
        },
        {
            title: "Company Sectors",
            tags: ["Art", "Design", "Photography", "Development", "Artist", "illustrator"],
        },
        {
            title: "Colors",
            tags: ["red", "black", "white", "grey"],
        },
    ]);

  return (
    <div className=' d-flex flex-column gap-4 mb-5' >
        {
            tagbuttons.map((item,index)=>{
                return(
                    <TagCardItem key={index} {...item} />
                
                )
            })
        }
    </div>
  )
}

export default TagCards