import { useQuery } from "react-query";
import axios from "axios"
import ENDPOINTS from "../../services/endpoints";
const fetchHeadlines = () => {
    return axios.get(ENDPOINTS.HEAD_INFO);
}

export const useHeadNews = (onSuccess, onError) => {
    return useQuery('head-news', fetchHeadlines, {
        onSuccess, onError,

    }
    )
}