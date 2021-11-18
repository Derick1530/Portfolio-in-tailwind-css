import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from '../navbar';
import ReactPaginate from 'react-paginate';

const allcategories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

const AllCategories = () => {

    let pageSize = 8;

    const [categories, setCategories] = useState(allcategories);

    const [news, setNews] = useState([]);
    const [keyword, setKeyword] = useState("business");
    const [pageCount, setpageCount] = useState(0);



    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://newsapi.org/v2/top-headlines?country=us&category=${keyword}&apiKey=00279f36e86d4a04bf15d9a84e4e31aa&pageSize=${pageSize}`
            );
            const limit = await fetch(
                `https://newsapi.org/v2/top-headlines?country=us&category=${keyword}&apiKey=00279f36e86d4a04bf15d9a84e4e31aa`
            );
            const data = await res.json();
            const limitTot = await limit.json();
            const total = limitTot.articles?.length;
            console.log(total);
            setpageCount(Math.ceil(total / pageSize));
            // console.log(Math.ceil(total/12));
            setNews(data.articles);



        };

        getComments();
    }, [keyword]);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${keyword}&apiKey=00279f36e86d4a04bf15d9a84e4e31aa&&page=${currentPage}&pageSize=${pageSize}`
            // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        // console.log(data.selected);

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setNews(commentsFormServer.articles);

        // scroll to the top
        //window.scrollTo(0, 0)
    };
    return (
        <>
            <div class="container mx-auto mt-20">
                <div class="mdflex">

                    {allcategories.map((category) => <div key={category}
                        onClick={() => setKeyword(category)}
                        className="bg-gray-900 inline-flex items-center justify-center rounded-sm p-2 m-1 text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">{category}</div>)}

                </div>

                <div class="container mx-auto">

                    {
                        news?.map((item, index) => {
                            return <div key={index} class=" md:w-1/2 pr-2 mb-8 bg-white ">
                                <div class="flex flex-col  ">
                                    <div class="w-full  ">
                                        <img class=" object-cover  w-screen max-h-72 " src={item.urlToImage} alt="pic" />
                                    </div>
                                    <div class=" p-4  mx-auto overflow-hidden">
                                        <h1 class="text-2xl font-extrabold md:text-4xl border-l-8">{item.title}</h1>
                                        <p class="text-2xl font-thin">{item.description}</p>

                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination justify-content-center"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
                </div>
            </div>
        </>
    )
}

export default AllCategories
