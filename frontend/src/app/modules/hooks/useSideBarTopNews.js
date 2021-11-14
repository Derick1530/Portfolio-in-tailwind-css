import { useQuery } from "react-query";
import axios from "axios"
import ENDPOINTS from "../../services/endpoints";
const fetchHeadlines = () => {
    return axios.get(ENDPOINTS.TOP_SIDENAVBAR);
}

export const useSideBarNews = (onSuccess, onError) => {
    return useQuery('side-navbar', fetchHeadlines, {
        onSuccess, onError,

    }
    )
}