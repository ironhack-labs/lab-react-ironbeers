import React from 'react';

const pagination = (props)=> {
    const handleClickNext = (e) =>{
        e.preventDefault();
        console.log('Next');
        props.next();
    }
    const handleClickPrevious = (e) =>{
        e.preventDefault();
        console.log('Previous');
        props.previous();
    }
    const renderPrevious = ()=>{
            if(props.current > 1){
                return (
                    <li className="page-item page-link" onClick={e => {handleClickPrevious(e)}}>
                            Previous
                    </li>
                )
            }
    }
        return (
            <div >
            <ul className="pagination">
                {renderPrevious()}
                <li className="page-item page-link" onClick={e => {handleClickNext(e)}}>
                   Next
                </li>
            </ul>
            </div>
            )
}

export default pagination;