/* This Navbar requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { Link, } from "react-router-dom";
import { Transition } from '@headlessui/react'
import HumbMenu from '../__modules__/svg/HumbMenu';
import Cross from '../__modules__/svg/Cross';
import Search from '../__modules__/svg/Search';
import SearchField from './Search';
const allcategories = ["all_categories", "Covid_19", "BBC_news", "TechCrunch"]


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [text, setText] = useState("");
    const [isSmall, setIsSmall] = useState(true);

    const toggle = () => setIsSearchOpen(!isSearchOpen);

    const handleSubmit = () => {
        return <Link to={`/search/${text}`} />
    }
    // console.log("isOpen?:", toggle)

    return (
        <>
            <nav class=" md:bg-white bg-black shadow-md p-2 mt-0 fixed w-full z-10 top-0">
                <div class="container  md:bg-white   mx-auto flex flex-wrap items-center">
                    <div class="hidden md:flex w-full md:w-1/2 justify-center md:justify-start text-gray-500 font-extrabold">
                        <Link class=" " to="/">
                            <span class="text-2xl pl-2"> Africa99.com</span>
                        </Link>

                    </div>
                    <div class=" md:hidden   flex w-full md:w-1/2 justify-between
                  text-white font-extrabold">
                        <Link to="/" class="text-white no-underline hover:text-white">
                            <span class="text-2xl pl-2"> Africa99</span>
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 rounded-md inline-flex items-center justify-center p-2  text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                    <div class=" hidden md:flex  pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        {
                            allcategories.map((category) => <Link to={category} key={category}
                                className="hover:bg-gray-700  hover:text-white   block px-3 py-2 rounded-md text-base font-medium">{category}</Link>)
                        }
                        <button onClick={toggle}>
                            <Search />
                        </button>
                    </div>
                </div>
                <Transition
                    show={isOpen && isSmall}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"

                >
                    <div class="mt-2" >
                        <form action={`/search/${text}`} class=" flex items-center  h-full  w-full  text-gray-600">
                            <input
                                class="w-full font-bold ml-1 bg-white pl-4 py-3  text-sm focus:outline-none"
                                type="text"
                                placeholder="Technologies ..."
                                onChange={(e) => setText(e.target.value)}
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="bg-gray-900 h-full m-2 rounded-md   p-2 text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <Link to={`/search/${text}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            width: "30px",
                                            height: "30px",

                                            cursor: "pointer",
                                        }}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </Link>
                            </button>
                        </form>
                    </div>
                    {
                        allcategories.map((category) => <Link to={category} onClick={() => setIsOpen(false)} key={category}
                            class="hover:bg-gray-700 w-full hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium">{category}</Link>)
                    }

                </Transition>




            </nav >
            <div class="absolute z-10 bg-white w-full top-0">
                <div class={`${isSearchOpen ? "inline" : "hidden"
                    }  flex items-center  text-gray-600 container`}>
                    <form class="w-full" action={`/search/${text}`}>
                        <input
                            class="  w-full text-2xl font-bold bg-white px-5 py-3 rounded-lg focus:outline-none"
                            type="search"
                            placeholder="Example ..."
                            onChange={(e) => setText(e.target.value)}
                        />
                    </form>
                    <button className="m-4" onClick={() => setIsSearchOpen(false)}>
                        <Cross />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;