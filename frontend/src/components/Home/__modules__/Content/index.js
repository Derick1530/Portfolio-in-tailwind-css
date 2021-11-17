import React from 'react'
import { Link } from 'react-router-dom'
import SideNavBar from './sideNavbar'
import ShowMore from './showmore'
import CovidNews from './covid/Covidnews'
const Content = () => {
    return (
        <div class="container my-3 md:mt-4 h-full w-full md:flex mx-auto">

            <div class="w-full h-full  my-0 md:mr-4 ">

                <ShowMore />

                <CovidNews />

            </div>

            <div class="hidden md:inline w-4/12 h-full  mx-auto shadow-md bg-white">

                <p class="p-4 md:text-xl border-l-8 font-bold underline ">MOST READ</p>
                <SideNavBar />
            </div>
        </div>
    )
}

export default Content
