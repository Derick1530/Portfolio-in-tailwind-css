import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from '../navbar';

const allcategories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

const AllCategories = () => {


    const [categories, setCategories] = useState(allcategories);

    const [news, setNews] = useState([]);
    const [keyword, setKeyword] = useState("");


    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(
                    `https://newsapi.org/v2/top-headlines/sources?category=${keyword}&apiKey=4d31420538424d2c9d5fc30d50ce2482`
                );
                setNews(data.sources);
            } catch (error) {
                console.error(error);
            }
        };

        getNews();
    }, [keyword]);

    return (
        <>
            <div class="container mx-auto mt-32">
                <div class="mdflex">

                    {allcategories.map((category) => <div key={category}
                        onClick={() => setKeyword(category)}
                        className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">{category}</div>)}

                </div>



                {
                    news?.map((item, index) => {
                        return <div key={index} class=" md:w-1 /2 pr - 2 mb - 8 bg - white ">
                            < div class="flex flex-col  " >

                                <div class=" p-4 mx-auto">
                                    <h1 class="text-2xl font-extrabold md:text-4xl border-l-8">{item.title}</h1>
                                    <p class="text-2xl font-thin">{item.description}</p>
                                    <a href={item.url} target="_blank" class="text-blue-500" rel="noreferrer">Read More</a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default AllCategories
