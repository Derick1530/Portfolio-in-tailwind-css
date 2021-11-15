import React, { useEffect, useState } from 'react'
import image from "./image1.jpg";
import image2 from "./image2.jpg"
import { Link } from 'react-router-dom';
import ForDigit from './fourDigit';
import axios from 'axios';
const Header = () => {
    const [news, setNews] = useState()

    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=4d31420538424d2c9d5fc30d50ce2482`
                );
                setNews(data.articles);
            } catch (error) {
                console.error(error);
            }
        };

        getNews();
    }, []);
    return (
        <>
            <div class="  mt-32  ">
                {/* <div class=" w-11/12 block mx-auto my-0 "> */}
                <div class="container h-full md:flex mx-auto p-6 shadow-sm bg-white ">
                    {news?.map((item, index) => {
                        return <div key={index} class=" md:w-1/2 pr-2 mb-8 bg-white ">
                            <div class="flex flex-col  ">
                                <div class="w-full  ">
                                    <img class=" object-cover  w-screen max-h-72 " src={item.urlToImage} alt="pic" />
                                </div>
                                <div class=" p-4  mx-auto">
                                    <h1 class="text-2xl font-extrabold md:text-3xl border-l-8">{item.title}</h1>
                                    <p class=" md:text-xl text-sm  font-thin">{item.description}</p>

                                </div>
                            </div>
                        </div>
                    })}
                    <div class=" md:w-1/2 pl-2 bg-white " >
                        <div class="md:hidden">
                            <p class="uppercase font-bold border-b-4  ">More Hot News</p>
                        </div>
                        <div class=" flex w-full justify-center  ">
                            <div class="w-full py-2 md:py-0 h-full md:h-full ">
                                <img class=" w-full h-full max-h-32  md:max-h-36  object-cover" src={image2} alt="pic" />
                            </div>
                            <div class="px-2">
                                <h1 class="mb-2 md:text-md xl:text-xl text-sm md:font-extrabold ">The number of enfiction by COVID-19 droped dramatically </h1>
                                <div class="md:flex hidden justify-items-center">
                                    <p class="md:text-sm text-gray-400 mr-4"> 19 minutes ago </p>
                                    <p class="md:tex-xs text-blue-400 font-semibold"> World</p>
                                </div>
                                <p class="md:inline hidden md:text-xs xl:text-lg ">
                                    donnee condimenetum nune sapien at tindicus area net vestibulum gracida
                                </p>
                            </div>

                        </div>
                        <div class="  w-full md:grid grid-cols-2">
                            <ForDigit />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
