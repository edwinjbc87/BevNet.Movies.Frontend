import axios from "axios";
import MoviesSearchResult from "../entities/MoviesSearchResult";

export async function getMovies(title: string, page: number): Promise<MoviesSearchResult> {
    const {data}:{data:MoviesSearchResult} = await axios.get(`${process.env.REACT_APP_API_URL}/api/movies?title=${title}&page=${page}`).catch((error) => {
        console.error(error.response.data);
        return {data:{
            page: 1,
            per_page: 10,
            total_pages: 1,
            total: 0,
            data: []
        } as MoviesSearchResult};
    });
    return data;
}