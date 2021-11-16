import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const ShowMore = () => {
    const [news, setNews] = useState()

    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(
                    `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=2&apiKey=c909a8727ff34d88967e0c9aa2912703`
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
                return <div class="md:w-full mb-4  p-6 shadow-md bg-white" key={item.id}>
                    <Link to={`/post/${item.title}`} >
                        <div class="flex h-full w-full">
                            <div class="h-full py-2 md:pr-4 pr-2 ">
                                <img class="object-cover h-full w-full max-h-32 max-w-xs" src={item.urlToImage} alt="pic" />
                            </div>
                            <div class=" p-2">
                                <p class=" text-sm font-extrabold pb-4">{item.title}</p>
                                <p class=" text-sm">{item.description}</p>

                            </div>
                        </div>
                        <div class="flex">

                            <p class="text-gray-300 text-left mx-2">{item.publishedAt = new Date(item.publishedAt).toLocaleDateString()} by </p>
                            <p class="text-blue-400 font-semibold">{item.author}</p>
                        </div>
                    </Link>
                </div>
            }
            )}
        </div>
    )
}

export default ShowMore


