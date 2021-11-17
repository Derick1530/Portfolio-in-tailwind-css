import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const SideNavBar = () => {
    const [news, setNews] = useState()
    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(
                    `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=5&apiKey=00279f36e86d4a04bf15d9a84e4e31aa`
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
            {news?.map((item, index) => (

                <a href={item.url} target="_blank" rel="noreferrer">
                    <p key={index} class="md:text-sm p-4 border-2">  {item.title}</p>
                </a>

            ))}
        </div>
    )
}

export default SideNavBar
