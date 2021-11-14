import React from 'react'
import { Link } from 'react-router-dom'
import { useHeadNews } from '../../../../../app/modules/hooks/useHeaderNews'


const ForDigit = () => {
    const onSuccess = (data) => {
        console.log("Perform sideBAr effect after data fetching", data)
    }
    const onError = (data) => {
        console.log("Perform sideBar effect after Error encounter", data)
    }
    const { isLoading, data, isError, error, isFetching } = useHeadNews(onSuccess, onError)
    if (isLoading) {
        return <h2>loading...</h2>
    }
    return (



        <>
            {data?.data.articles.map((item, index) => {
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
