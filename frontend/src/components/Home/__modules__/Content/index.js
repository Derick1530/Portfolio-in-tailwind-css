import React from 'react'
import { Link } from 'react-router-dom'
import image2 from "./image4.jpg"
import image3 from "./image5.jpg"
import { Data } from '../../../../app/static'
const Content = () => {
    return (
        <div class="container md:flex mx-auto px-6">

            <div class=" md:flex  justify-between w-full  my-0 mx-auto p-12 ">


                <div class="md:w-full ">
                    {
                        Data.map((item, key) => (
                            <Link to={"/post/" + item.id}>
                                <p>🔴 Hot Topic</p>
                                <p class=" text-lg text-gray-400 my-2.5">THE INSIDER</p>
                                <p class="max-w-sm text-md">{item.title}</p>
                                <div class="flex my-2.5 ju">

                                    <p class="text-gray-300 mx-2">{item.createAt} by </p>
                                    <p class="text-blue-400 font-semibold">{item.author}</p>
                                </div>
                            </Link>

                        ))}
                </div>




            </div>

            <div class="w-11/12 my-0 mx-auto p-12">
                <p class="py-4 text-2xl">World News</p>
                <div class=" w-full">
                    <div class="flex w-full px-4 ">
                        <div class=" w-full grid grid-cols-2 py-4">

                            <div class=" h-76 relative">
                                <img class=" w-full  h-full object-cover" src={image3} alt="pic" />
                                <h2 class=" text-white  absolute left-0 right-0 text-center bottom-20 text-4xl" >There are fierce protests from president's supporters</h2>
                            </div>
                            <div class=" px-4 flex flex-col justify-around    ">
                                <div class=" flex  ">
                                    <div class="w-32 h-full ">
                                        <img class=" w-full h-full object-cover" src={image3} alt="pic" />
                                    </div>
                                    <div class="flex w-full h-full px-4  flex-col justify-center">
                                        <h1 class="mb-4 text-xl max-w-xs ">The number of enfiction by COVID-19 droped dramatically </h1>
                                        <div class="flex ">
                                            <p class="text-gray-300 mx-2"> 19 minutes ago </p>
                                            <p class="text-blue-400 font-semibold"> World</p>
                                        </div>
                                        <p class="max-w-xs">
                                            donnee condimenetum nune sapien at tindicus area net vestibulum gracida
                                        </p>
                                    </div>

                                </div>
                                <div class=" flex ">
                                    <div class="w-12 h-full ">
                                        <img class=" w-full h-full object-cover" src={image3} alt="pic" />
                                    </div>
                                    <div class="flex w-full h-full px-4 flex-col justify-center">
                                        <h1 class="mb-4">The number of enfiction by COVID-19 droped dramatically </h1>
                                        <div class="flex ">
                                            <p class="text-gray-300 mx-2"> 19 minutes ago </p>

                                            <p class="text-blue-400 font-semibold"> World</p>

                                        </div>
                                    </div>
                                </div>
                                <div class=" flex ">
                                    <div class="w-24 h-full ">
                                        <img class=" w-full h-full object-cover" src={image3} alt="pic" />
                                    </div>
                                    <div class="flex w-full h-full px-4 flex-col justify-center">
                                        <h1 class="mb-4">The number of enfiction by COVID-19 droped dramatically </h1>
                                        <div class="flex ">
                                            <p class="text-gray-300 mx-2"> 19 minutes ago </p>

                                            <p class="text-blue-400 font-semibold"> World</p>

                                        </div>
                                    </div>
                                </div>
                                <div class=" flex ">
                                    <div class="w-24 h-full ">
                                        <img class=" w-full h-full object-cover" src={image3} alt="pic" />
                                    </div>
                                    <div class="flex w-full h-full px-4 flex-col justify-center">
                                        <h1 class="mb-4">The number of enfiction by COVID-19 droped dramatically </h1>
                                        <div class="flex ">
                                            <p class="text-gray-300 mx-2"> 19 minutes ago </p>

                                            <p class="text-blue-400 font-semibold"> World</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class=" w-1/5 h-full flex justify-between border-b-4 mb-4">
                            <p class="cursor-pointer border-b-4 border-red-700">Last news</p>
                            <p class="cursor-pointer">Top news</p>
                            <p class="cursor-pointer">Top Events</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Content
