import React from 'react'

function HomeHeader(props) {
    return (
        <div className="header-cont">
            <div>
                <img style={{width: '317px'}} src={props.image} alt="header img"/>
            </div>
            <div className='text-body'>
                <h2>
                    {props.title}
                </h2>
                <p >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
        </div>
    )
}

export default HomeHeader
