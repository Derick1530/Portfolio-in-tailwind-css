import { useQuery } from "react-query";
import axios from "axios"
import ENDPOINTS from "../../services/endpoints";
const fetchHeadlines = () => {
    return axios.get(ENDPOINTS.SHOW_MORE_INFO);
}

export const useShowMore = (onSuccess, onError) => {
    return useQuery('show-more', fetchHeadlines, {
        onSuccess, onError,

    }
    )
}