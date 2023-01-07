import { useState } from "react";
import Movie from "../../entities/Movie";
import useMovies from "../../hooks/useMovies";
import Pagination from "../general/Pagination";
import MoviesList from "./MoviesList";
import MoviesSearchForm from "./MoviesSearchForm";

export default function MoviesApp(){
    const { search, data:result } = useMovies();
    const [title, setTitle] = useState("");

    return(<div className="movies-app">
        <section className="movies-form-section">
            <MoviesSearchForm searchTerm={title} onSearch={(searchTerm)=>{ setTitle(searchTerm); search(searchTerm, 1); }} />
        </section>
        <MoviesList movies={result?.data??[] as Movie[]} />
        <Pagination setPage={(_page)=>search(title, _page)} page={result?.page??1} total_pages={result?.total_pages??1} />
    </div>);
}