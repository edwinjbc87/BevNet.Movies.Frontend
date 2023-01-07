import axios from "axios";
import MoviesSearchResult from "../entities/MoviesSearchResult";

export async function getMovies(title: string, page: number): Promise<MoviesSearchResult> {
    const {data}:{data:MoviesSearchResult} = await axios.get(`${process.env.REACT_APP_API_URL}/api/movies?title=${title}&page=${page}`);
    return data;
}