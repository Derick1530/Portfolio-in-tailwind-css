import React from 'react'
import { Link } from 'react-router-dom'
import image2 from "./image4.jpg"
import image3 from "./image5.jpg"
import { Data } from '../../../../app/static'
import { useHeadline } from '../../../../app/modules/hooks/useHeadline'
import SideNavBar from './sideNavbar'
import ShowMore from './showmore'
const Content = () => {
    const onSuccess = (data) => {
        console.log("Perform side effect after data fetching", data)
    }
    const onError = (data) => {
        console.log("Perform side effect after Error encounter", data)
    }
    const { isLoading, data, isError, error, isFetching } = useHeadline(onSuccess, onError)


    if (isError) {
        return <h2>{error.message}</h2>
    }


    return (
        <div class="container my-3 md:mt-4 md:flex mx-auto">

            <div class="w-full h-full  my-0 md:mr-4 ">

                <ShowMore />
                <div class="w-full md:w-full my-2 md:my-4 bg-white  p-6 ">
                    {
                        Data.map((item, key) => (
                            <Link to={`/post/${item.id}`}>
                                <p>🔴 Hot Topic</p>
                                <p class=" text-lg text-gray-400 my-2.5">THE INSIDER</p>
                                <p class="max-w-sm text-md">{item.title}</p>
                                <div class="flex my-2.5 ju">

                                    <p class="text-gray-300 mx-2">{item.createAt} by </p>
                                    <p class="text-blue-400 font-semibold">{item.author}</p>
                                </div>
                            </Link>

                        ))}
                </div>
            </div>

            <div class="hidden md:inline w-full h-screen md:w-4/12  mx-aut shadow-md bg-white">

                <p class="p-4 md:text-xl border-l-8 font-bold underline ">MOST READ</p>
                <SideNavBar />
            </div>
        </div>
    )
}

export default Content
