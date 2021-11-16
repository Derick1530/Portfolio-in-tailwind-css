/* This Navbar requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { Link } from "react-router-dom";
import { Transition } from '@headlessui/react'
import HumbMenu from '../svg/HumbMenu';
import Cross from '../svg/Cross';
import Search from '../svg/Search';
import SearchField from './Search';
const allcategories = ["all_categories", "Covid_19", "BBC_news", "TechCrunch"]


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggle = () => setIsSearchOpen(!isSearchOpen);
    console.log("isOpen?:", toggle)

    return (
        <nav class=" shadow p-2 mt-0 fixed w-full z-10 top-0">
            <div class="container bg-black md:bg-white   mx-auto flex flex-wrap items-center">
                <div class="hidden md:flex w-full md:w-1/2 justify-center md:justify-start text-black font-extrabold">
                    <Link class=" " to="/">
                        <span class="text-2xl text-white pl-2"> Africa99.com</span>
                    </Link>

                </div>
                <div class=" md:hidden   flex w-full md:w-1/2 justify-between
                  text-white font-extrabold">
                    <Link to="/" class="text-white no-underline hover:text-white">
                        <span class="text-2xl pl-2"> 99</span>
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-gray-900 inline-flex items-center justify-center p-2  text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        {!isOpen ? (

                            <HumbMenu />
                        ) :
                            (
                                <Cross />
                            )
                        }
                    </button>


                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <p>Search</p>
                    {
                        allcategories.map((category) => <Link to={category} onClick={() => setIsOpen(false)} key={category}
                            class="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium">{category}</Link>)
                    }

                </Transition>

                <div class=" hidden md:flex  pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    {
                        allcategories.map((category) => <Link to={category} key={category}
                            className="hover:bg-gray-700 hover:text-white text-white  block px-3 py-2 rounded-md text-base font-medium">{category}</Link>)
                    }
                    <button onClick={toggle}>
                        <Search />
                    </button>
                </div>
            </div>
            <SearchField isOpen={isSearchOpen} />

        </nav >
    )
}

export default Navbar;