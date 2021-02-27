import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <section className="p-4 lg:p-8 dark:bg-coolGray-800 dark:text-coolGray-100">
                <div className="flex flex-col justify-center p-6 dark:text-center rounded-sm lg:max-w-md xl:max-w-lg lg:dark:text-left">
                <h1 className="text-5xl dark:text-5xl font-bold leading-none sm:dark:text-6xl">Iron<span className="dark:text-violet-400">beers</span>
			    </h1>
                </div>
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <div className="flex items-center justify-center flex-1 dark:bg-violet-400">
                            <img src="./images/beers.png" alt="" className="p-2 h-60" />
                        </div>
                        <div className="flex flex-col justify-center flex-1 px-2 py-2 dark:bg-coolGray-900">
                            <Link to="/beers"><h2 className="text-4xl :text-4xl font-bold ">All beers</h2></Link>
                            <p className="my-6 dark:text-coolGray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <div className="flex items-center justify-center flex-1 dark:bg-violet-400">
                            <img src="./images/random-beer.png" alt="" className="p-2 h-60" />
                        </div>
                        <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
                            <Link to="/random-beer"><h2 className="text-4xl :text-4xl font-bold ">Random beer</h2></Link>
                            <p className="my-6 dark:text-coolGray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <div className="flex items-center justify-center flex-1 dark:bg-violet-400">
                            <img src="./images/new-beer.png" alt="" className="p-2 h-60" />
                        </div>
                        <div className="flex flex-col justify-center flex-1 px-2 py-2 dark:bg-coolGray-900">
                            <Link to="/new-beer"><h2 className="text-4xl :text-4xl font-bold ">New beer</h2></Link>
                            <p className="my-6 dark:text-coolGray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home
