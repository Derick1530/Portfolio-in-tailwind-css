import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ForDigit = () => {
    const [news, setNews] = useState()
    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(
                    `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=4&apiKey=c909a8727ff34d88967e0c9aa2912703`
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
            {news?.map((item, index) => {
                return <div class="flex h-full w-full justify-center">
                    <div class="w-full h-full py-2">
                        <img class="object-cover h-full w-full max-h-32 max-w-xs" src={item.urlToImage} alt="pic" />
                    </div>
                    <div class=" p-2">
                        <p class=" text-sm">{item.title}</p>
                    </div>
                </div>
            })}
        </>


    )
}

export default ForDigit
