import { useQuery } from "react-query";
import axios from "axios"
import ENDPOINTS from "../../services/endpoints";
const fetchHeadlines = () => {
    return axios.get(ENDPOINTS.TOP_HEADLINES);
}

export const useHeadline = (onSuccess, onError) => {
    return useQuery('head-lines', fetchHeadlines, {
        onSuccess, onError,

    }
    )
}