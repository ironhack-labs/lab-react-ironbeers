import React from 'react';


export const HomeItem = ({urlimg, title, content, url}) => {
    return (
        <div>
            {/* <img alt="" url={urlimg}/> */}
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )

}