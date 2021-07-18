import React from 'react';
import MainpageElement from '../components/MainpageElement';
import mainPageText from "../data/text.json"


function MainPage() {
    return (
        <div>
            <h1>Main page</h1>
            {
                mainPageText.map((elementData, index) => {
                return <MainpageElement key={index} elementData={elementData} />
                })
            }
        </div>
    )
}

export default MainPage;
