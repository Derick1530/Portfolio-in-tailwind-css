import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import placeholder from "../../../static/placeholder.png"
import axios from 'axios';
const French = () => {
    const [news, setNews] = useState();
    const [covidNews, setCovidNews] = useState();
    console.log("Let see what is inside the news:", covidNews)

    useEffect(() => {
        const getCovidNews = async () => {
            try {
                const { data } = await axios.get(
                    "https://newsapi.org/v2/top-headlines?q=covid&language=fr&pageSize=3&page=2&apiKey=00279f36e86d4a04bf15d9a84e4e31aa"
                );
                setCovidNews(data.articles);

            } catch (error) {
                console.error(error);
            }
        };

        getCovidNews();
    }, []);

    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=fr&pageSize=6&page=2&apiKey=00279f36e86d4a04bf15d9a84e4e31aa`
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
            <div class="container  mt-32   ">
                {/* <div class=" w-11/12 block mx-auto my-0 "> */}
                <div class="h-full md:flex mx-auto p-6 shadow-sm bg-white ">
                    {news?.slice(0, 1).map((item, index) => {

                        return <div key={index} class=" md:w-1/2 pr-2 mb-8 bg-white ">

                            <div class="flex flex-col  ">
                                <div class="w-full  ">
                                    <img class=" object-cover  w-screen max-h-72 " src={item?.urlToImage || placeholder} alt="pic" />
                                </div>
                                <div class=" p-4  mx-auto">
                                    <a href={item.url} target="_blank" rel="noreferrer">
                                        <h1 class="text-2xl font-extrabold md:text-xl border-l-8">{item.title}</h1>
                                        <p class=" md:text-dm text-sm  font-thin">{item.description}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    })}
                    <div class=" md:w-1/2 pl-2 bg-white " >
                        <div class="md:hidden">
                            <p class="uppercase font-bold border-b-4  ">More Hot News</p>
                        </div>
                        {news?.slice(1, 2).map((item, index) => {
                            return <div class=" flex w-full justify-center  ">

                                <div class="w-full py-2 md:py-0 h-full md:h-full ">
                                    <img class=" w-full h-full max-h-32  md:max-h-36  object-cover" src={item.urlToImage} alt="pic" />
                                </div>

                                <a href={item.url} target="_blank" rel="noreferrer">
                                    <div class="px-2">
                                        <h1 class="mb-2 md:text-md xl:text-xl text-sm md:font-extrabold ">{item.title}</h1>
                                        <div class="md:flex hidden justify-items-center ">
                                            <p class="md:text-sm text-gray-400 mr-4">{item.publishedAt = new Date(item.publishedAt).toLocaleDateString()} by</p>
                                            <p class="md:tex-xs text-blue-400 font-semibold">{item.author}</p>
                                        </div>
                                        <p class="md:inline hidden md:text-xs xl:text-lg ">
                                            {item.author}
                                        </p>
                                    </div>
                                </a>

                            </div>
                        })}
                        <div class="  w-full md:grid grid-cols-2">
                            {news?.slice(2, 6).map((item, index) => {
                                return <div class="flex h-full w-full justify-center">
                                    <div class="w-full h-full py-2">
                                        <img class="object-cover h-full w-full max-h-32 max-w-xs" src={item.urlToImage} alt="pic" />
                                    </div>
                                    <div class=" p-2">
                                        <a href={item.url} target="_blank" rel="noreferrer">

                                            <p class=" text-sm font-bold">{item.title}</p>
                                            <p class=" text-sm text-blue-600">{item.author}</p>
                                        </a>
                                    </div>
                                </div>
                            })}

                        </div>
                        <div class="hidden md:inline w-4/12 h-full  mx-auto shadow-md bg-white">

                            <p class="p-4 md:text-xl border-l-8 font-bold underline ">MOST READ</p>
                            {news?.map((item, index) => (

                                <a href={item.url} target="_blank" rel="noreferrer">
                                    <p key={index} class="md:text-sm p-4 border-2">  {item.title}</p>
                                </a>

                            ))}
                        </div>

                    </div>




                </div>

                <div class="w-full h-full  my-0 md:mr-4 ">

                    {covidNews?.map((item, index) => {
                        return <div class="md:w-full w-full mb-4  p-6 shadow-md bg-white" key={item.id}>
                            <a href={item.url} target="_blank" rel="noreferrer">

                                <div class="flex h-full w-full justify-center">
                                    <div class=" h-full py-2 md:pr-4 pr:4">
                                        <img class="object-cover h-full w-full max-h-32 max-w-xs" src={item.urlToImage} alt="pic" />
                                    </div>
                                    <div class=" text-left w-full p-2">
                                        <p class=" text-sm font-extrabold pb-4">{item.title}</p>
                                        <p class="text-sm md:inline hidden">{item.description}</p>

                                    </div>
                                </div>
                                <div class="flex my-2.5 ">

                                    <p class="text-gray-300 mx-2">{item.publishedAt = new Date(item.publishedAt).toLocaleDateString()} by </p>
                                    <p class="text-blue-400 font-semibold">{item.author}</p>
                                </div>
                            </a>
                        </div>
                    }
                    )}

                    {covidNews?.map((item, index) => {
                        return <div class="md:w-full w-full mb-4  p-6 shadow-md bg-white" key={item.id}>
                            <a href={item.url} target="_blank" rel="noreferrer">

                                <div class="flex h-full w-full justify-center">
                                    <div class=" h-full py-2 md:pr-4 pr:4">
                                        <img class="object-cover h-full w-full max-h-32 max-w-xs" src={item.urlToImage} alt="pic" />
                                    </div>
                                    <div class=" text-left w-full p-2">
                                        <p class=" text-sm font-extrabold pb-4">{item.title}</p>
                                        <p class="text-sm md:inline hidden">{item.description}</p>

                                    </div>
                                </div>
                                <div class="flex my-2.5 ">

                                    <p class="text-gray-300 mx-2">{item.publishedAt = new Date(item.publishedAt).toLocaleDateString()} by </p>
                                    <p class="text-blue-400 font-semibold">{item.author}</p>
                                </div>
                            </a>
                        </div>
                    }
                    )}

                    {covidNews?.map((item, index) => {
                        return <div class="md:w-full w-full mb-4  p-6 shadow-md bg-white" key={item.id}>
                            <a href={item.url} target="_blank" rel="noreferrer">

                                <div class="flex h-full w-full justify-center">
                                    <div class=" h-full py-2 md:pr-4 pr:4">
                                        <img class="object-cover h-full w-full max-h-32 max-w-xs" src={item.urlToImage} alt="pic" />
                                    </div>
                                    <div class=" text-left w-full p-2">
                                        <p class=" text-sm font-extrabold pb-4">{item.title}</p>
                                        <p class="text-sm md:inline hidden">{item.description}</p>

                                    </div>
                                </div>
                                <div class="flex my-2.5 ">

                                    <p class="text-gray-300 mx-2">{item.publishedAt = new Date(item.publishedAt).toLocaleDateString()} by </p>
                                    <p class="text-blue-400 font-semibold">{item.author}</p>
                                </div>
                            </a>
                        </div>
                    }
                    )}

                </div>

            </div>
        </>
    )
}

export default French
