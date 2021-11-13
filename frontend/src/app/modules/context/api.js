import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";
const NewsContext = createContext();
const NewsProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "c909a8727ff34d88967e0c9aa2912703"
    useEffect(() => {
        axios.get(
            `https://newsapi.org/v2/everything?q=tesla&from=2021-10-11&sortBy=publishedAt&apiKey=${apiKey}`
        ).then(response => setData(response.data())).catch((error) => console.log(error));
    }, [])
    return (
        <NewsProvider>
            {props.children}
        </NewsProvider>
    )
}

export default NewsProvider
