import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ForDigit = () => {
    const [news, setNews] = useState()
    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(
                    `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=4&page=2&apiKey=00279f36e86d4a04bf15d9a84e4e31aa`
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
                        <a href={item.url} target="_blank" rel="noreferrer">

                            <p class=" text-sm font-bold">{item.title}</p>
                            <p class=" text-sm text-blue-600">{item.author}</p>
                        </a>
                    </div>
                </div>
            })}
        </>


    )
}

export default ForDigit
