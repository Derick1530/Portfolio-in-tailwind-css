import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
function SearchData() {
    const { id } = useParams()
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${id}&apiKey=00279f36e86d4a04bf15d9a84e4e31aa`)
                setNews(data.articles);


            } catch (error) {
                console.error(error);
            }
        }
        getNews();

    }, [id]);
    return (

        <div class="container mx-auto">
            {
                news?.map((item, index) => {
                    return <div key={index} class=" md:w-1/2 pr-2 mb-8 bg-white ">
                        <div class="flex flex-col  ">
                            <div class="w-full  ">
                                <img class=" object-cover  w-screen max-h-72 " src={item.urlToImage} alt="pic" />
                            </div>
                            <div class=" p-4  mx-auto">
                                <h1 class="text-2xl font-extrabold md:text-4xl border-l-8">{item.title}</h1>
                                <p class="text-2xl font-thin">{item.description}</p>

                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default SearchData
