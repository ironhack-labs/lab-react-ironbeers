import React from 'react'

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>
                        <a href="/beers">All Beers</a>
                    </h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus accusantium placeat rerum voluptas corrupti distinctio veniam repudiandae consequatur eaque at, autem eum dicta et error libero. Sint, libero.</p>
                    </div>

                <div>
                    <h1>
                    <a href="/random-beer">Random Beer</a>
                    </h1> 
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque pariatur dignissimos iusto quia doloribus quod illo? Velit asperiores modi harum? Obcaecati optio corrupti recusandae molestias in autem culpa aperiam reiciendis.</p>
                </div>

                <div>
                    <h1>
                    <a href="/new-beer">New Beer</a>
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, incidunt fugiat maiores aspernatur voluptatum at alias ipsa repellendus. Natus autem vero nemo odio deserunt tempora impedit placeat ipsam corrupti quidem?</p>
                </div>

            </div>
        )
    }
}
