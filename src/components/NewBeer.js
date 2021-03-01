import React from 'react';
import axios from 'axios';

class NewBeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    onChangeHandler(event) {
        const { name, value } = event.target;
        this.setState(() => ({ [name]: value }));
    }

    async formSubmitHandler(event) {
        event.preventDefault();
        let { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        attenuation_level = Number(attenuation_level);
        const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', 
                                         { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }
                                         
        );
    }
    render() {
        return (
            <div className="p-8 h-100 dark:bg-coolGray-800 dark:text-coolGray-50">
                <form onSubmit={this.formSubmitHandler} className="container flex flex-col m-auto">

                    <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="text-lg font-medium">Add new beer</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-2">
                    <label htmlFor="name">Name</label>
                            <input id="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChangeHandler} placeholder=""  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" ></input>
                        </div>
                        <div className="col-span-full sm:col-span-4">
                            <label className="text-sm">Tagline</label>
                            <input id="tagline"
                                name="tagline"
                                value={this.state.tagline}
                                onChange={this.onChangeHandler} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" ></input>
                        </div>
                        <div className="col-span-full sm:col-span-4">
                            <label className="text-sm">Description</label>
                            <textarea id="description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChangeHandler} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" ></textarea>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">First Brewed</label>
                            <input id="first_brewed"
                                name="first_brewed"
                                value={this.state.first_brewed}
                                onChange={this.onChangeHandler}  placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" ></input>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Brewer Tips</label>
                            <input id="brewers_tips"
                                name="brewers_tips"
                                value={this.state.brewers_tips}
                                onChange={this.onChangeHandler} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"  ></input>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label  className="text-sm">Attenuation Level</label>
                            <input id="attenuation_level"
                                name="attenuation_level"
                                value={this.state.attenuation_level}
                                onChange={this.onChangeHandler} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"  ></input>
                       </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Contributed By</label>
                            <input id="contributed_by"
                                name="contributed_by"
                                value={this.state.contributed_by}
                                onChange={this.onChangeHandler} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"  ></input>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <button className=" px-8 py-3 font-semibold rounded-full dark:bg-coolGray-100 dark:text-coolGray-800">Add new</button>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default NewBeer