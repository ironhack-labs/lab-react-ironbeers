import React from 'react'

class BeerDetail extends React.Component {
    state = {
        beer: this.props.location.state.beer
    }


    componentDidMount = () => {
        console.log(this.props.location.state.beer)
    }
    render() {
        const beer = this.state.beer
        return (
            <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-coolGray-50">{beer.name}</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-coolGray-400">{beer.tagline}</p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                                           
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">First Brewed:</h4>
                                        <p className="mt-2 dark:text-coolGray-400">{beer.first_brewed}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                                           
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Attuention Level:</h4>
                                        <p className="mt-2 dark:text-coolGray-400">{beer.attenuation_level}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                                            
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Description</h4>
                                        <p className="mt-2 dark:text-coolGray-400">{beer.description}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                                        
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Contributed by:</h4>
                                    <p className="mt-2 dark:text-coolGray-400">{beer.contributed_by}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src={beer.image_url} alt={beer.image_url} className="mx-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>



        )
    }
}
export default BeerDetail
