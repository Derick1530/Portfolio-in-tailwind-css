import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="footer bg-white relative pt-1 border-b-2 border-blue-700">
            <div class="container mx-auto px-6">

                <div class="sm:flex sm:mt-8">
                    <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div class="flex flex-col">
                            <span class="font-bold text-gray-700 uppercase mb-2">About</span>
                            <span class="my-2"><Link to="/" class="text-blue-700  text-md hover:text-blue-500">About Us</Link></span>
                            <span class="my-2"><Link to="/" class="text-blue-700  text-md hover:text-blue-500">Terms and condition</Link></span>
                            <span class="my-2"><Link to="/" class="text-blue-700  text-md hover:text-blue-500">Privacy Policy</Link></span>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Connect</span>
                            <span class="my-2"><Link to="/" class="text-blue-700 text-md hover:text-blue-500">Contact Us</Link></span>
                            <span class="my-2"><Link to="/" class="text-blue-700  text-md hover:text-blue-500">Submit a tip</Link></span>
                            <span class="my-2"><Link to="/" class="text-blue-700 text-md hover:text-blue-500">Podcast</Link></span>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Language</span>
                            <span class="my-2"><Link to="/" class="text-blue-700  text-md hover:text-blue-500">English</Link></span>
                            <span class="my-2"><Link to="/" class="text-blue-700  text-md hover:text-blue-500">French</Link></span>
                            <span class="my-2"><Link to="/" class="text-blue-700  text-md hover:text-blue-500">Swahili</Link></span>
                            <span class="my-2"><Link to="/" class="text-blue-700  text-md hover:text-blue-500">Arabic</Link></span>



                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-6">
                <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div class="sm:w-2/3 text-center py-6">
                        <p class="text-sm text-blue-700 font-bold mb-2">
                            © 2021 by Derick Zr
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
