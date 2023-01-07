import { useState } from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api/MoviesApi";
import Movie from "../entities/Movie";
import MoviesSearchResult from "../entities/MoviesSearchResult";

export default function useMovies(){
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);
    const {data} = useQuery<MoviesSearchResult>(["movies", title, page], () => getMovies(title, page));

    const search = (_title: string, _page?:number) => {
        setTitle(_title);
        setPage(_page??1);
    };

    return {search, data};
}