import React from 'react'
import { Link } from 'react-router-dom'
import image2 from "./image4.jpg"
import image3 from "./image5.jpg"
import { Data } from '../../../../app/static'
import SideNavBar from './sideNavbar'
import ShowMore from './showmore'
import CovidNews from './covid/Covidnews'
const Content = () => {
    return (
        <div class="container my-3 md:mt-4 md:flex mx-auto">

            <div class="w-full h-full  my-0 md:mr-4 ">

                <ShowMore />

                <CovidNews />

            </div>

            <div class="hidden md:inline w-full h-screen md:w-4/12  mx-aut shadow-md bg-white">

                <p class="p-4 md:text-xl border-l-8 font-bold underline ">MOST READ</p>
                <SideNavBar />
            </div>
        </div>
    )
}

export default Content
