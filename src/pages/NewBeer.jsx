import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NewBeer() {
  const [form, setForm] = useState({name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: 0, contributed_by: ""});
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, form);
    navigate("/beers");
}
  const handleInputChange = (e) => {
    const formCopy = {...form};
    formCopy[e.target.name] = e.target.value;
    console.log(formCopy);
    setForm(formCopy);
  }
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
    <h2 class="text-3xl font-semibold text-gray-700 capitalize">New Beer</h2>
    
    <form onSubmit={handleSubmit}>
        <div class="grid grid-cols-1 gap-6 mt-4">
            <div>
                <label class="text-gray-700 font-bold" for="name">Name</label>
                <input onChange={handleInputChange} name="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-gray-700 font-bold" for="tagline">Tagline</label>
                <input onChange={handleInputChange} name="tagline" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-gray-700 font-bold" for="description">Description</label>
                <input onChange={handleInputChange} name="description" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-gray-700 font-bold" for="first_brewed">First Brewed</label>
                <input onChange={handleInputChange} name="first_brewed" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-gray-700 font-bold" for="brewer_tips">Brewer tips</label>
                <input onChange={handleInputChange} name="brewer_tips" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-gray-700 font-bold" for="attenuation_level">Attenuation level</label>
                <input onChange={handleInputChange} name="attenuation_level" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-gray-700 font-bold" for="contributed_by">Contributed by</label>
                <input onChange={handleInputChange} name="contributed_by" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div class="flex justify-center mt-6">
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
  )
}
