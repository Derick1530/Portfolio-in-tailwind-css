import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSideBarNews } from '../../../../../app/modules/hooks/useSideBarTopNews'

const SideNavBar = () => {
    const [news, setNews] = useState()
    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(
                    `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=5&apiKey=c909a8727ff34d88967e0c9aa2912703`
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
                <Link to={`/post/${item.title}`}>
                    <p key={index} class="md:text-xl p-4 border-2">  {item.title}</p>
                </Link>
            ))}
        </div>
    )
}

export default SideNavBar
