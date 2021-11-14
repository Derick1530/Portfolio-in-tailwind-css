import React from 'react'
import { Link } from 'react-router-dom'
import { useSideBarNews } from '../../../../../app/modules/hooks/useSideBarTopNews'

const SideNavBar = () => {
    const onSuccess = (data) => {
        console.log("Perform sideBAr effect after data fetching", data)
    }
    const onError = (data) => {
        console.log("Perform sideBar effect after Error encounter", data)
    }
    const { isLoading, data, isError, error, isFetching } = useSideBarNews(onSuccess, onError)
    if (isLoading) {
        return <h2>loading...</h2>
    }
    return (
        <div>
            {data?.data.articles.map((item, index) => (
                <Link to={`/post/${item.title}`}>
                    <p key={index} class="md:text-xl p-4 border-2">  {item.title}</p>
                </Link>
            ))}
        </div>
    )
}

export default SideNavBar
