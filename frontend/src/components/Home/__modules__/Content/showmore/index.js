import React from 'react'
import { Link } from 'react-router-dom'
import { useShowMore } from '../../../../../app/modules/hooks/useShowMore'
const ShowMore = () => {
    const onSuccess = (data) => {
        console.log("Perform sideBAr effect after data fetching", data)
    }
    const onError = (data) => {
        console.log("Perform sideBar effect after Error encounter", data)
    }
    const { isLoading, data, isError, error, isFetching } = useShowMore(onSuccess, onError)
    if (isLoading) {
        return <h2>loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (

        <div>
            {data?.data.articles.map((item, index) => {
                return <div class="md:w-ful mb-4 e p-6 shadow-md bg-white" key={item.id}>
                    <Link to={`/post/${item.title}`} >
                        <p>{item.author}</p>
                        <p class=" text-lg text-gray-400 my-2.5">{item.title}</p>
                        <p class=" hidden md:inline text-md">{item.description}</p>
                        <div class="flex my-2.5 ju">

                            <p class="text-gray-300 mx-2">{item.publishedAt = new Date(item.publishedAt).toLocaleDateString()} by </p>
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


