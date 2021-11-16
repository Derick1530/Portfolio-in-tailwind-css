import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const CovidNews = () => {
    const [news, setNews] = useState()

    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(
                    `https://newsapi.org/v2/everything?q=covid&apiKey=d2f5f511d7af43bc8189878f8ce74594&pageSize=5`
                );
                setNews(data.articles);
            } catch (error) {
                console.error(error);
            }
        };

        getNews();
    }, []);
    return (

        <div>
            {news?.map((item, index) => {
                return <div class="md:w-full w-full mb-4  p-6 shadow-md bg-white" key={item.id}>
                    <Link to={`/post/${item.title}`} >
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
                    </Link>
                </div>
            }
            )}
        </div>
    )
}

export default CovidNews


