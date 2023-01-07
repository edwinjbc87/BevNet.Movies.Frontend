import Movie from "./Movie";

export default interface MoviesSearchResult{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Movie[];
}