import React from 'react'

const SingleCard = (props) => {
    const {id,title,imageURL} = props.sd
    return (
        <div className="singleCard-container" key={id}>
            <img src={imageURL} className="image" alt="missingImage"></img>
            <div>{title}</div>

        </div>
    )
}

export default SingleCard;