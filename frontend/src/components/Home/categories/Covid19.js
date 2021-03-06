import React from 'react'
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ShowWidget from '../__modules__/showWidget';


const Covid = () => {

    let pageSize = 10;

    const [covidNews, setCovidNews] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getComments = async () => {
            setLoading(true);
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=covid&apiKey=d2f5f511d7af43bc8189878f8ce74594&page=2&pageSize=${pageSize}`
            );
            const limit = await fetch(
                `https://newsapi.org/v2/everything?q=covid&apiKey=d2f5f511d7af43bc8189878f8ce74594&page=3`
            );
            const data = await res.json();
            const limitTot = await limit.json();
            const total = limitTot?.articles.length;
            // console.log(total);
            setpageCount(Math.ceil(total / pageSize));
            // console.log(Math.ceil(total/12));
            setCovidNews(data.articles);
            setLoading(false);

        };

        getComments();
    }, [pageSize]);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `https://newsapi.org/v2/everything?q=covid&apiKey=d2f5f511d7af43bc8189878f8ce74594&page=${currentPage}&pageSize=${pageSize}`
            // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        // console.log(data.selected);

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setCovidNews(commentsFormServer.articles);

        // scroll to the top
        //window.scrollTo(0, 0)
    };
    console.log("is Loading", loading);


    return (
        <>



            <div class="container mx-auto mt-20">
                <ShowWidget
                    condition={!loading}
                    fallback={
                        <div className="h-72 w-full bg-gray-400 animate-pulse" />

                    }>
                    {
                        covidNews?.map((item, index) => {
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
                </ShowWidget>
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
        </>
    )
}

export default Covid
