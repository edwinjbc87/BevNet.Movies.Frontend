import { Grid } from "@mui/material";
import Movie from "../../entities/Movie";
import MovieDetail from "./MovieDetails";

export interface MoviesListProps {
    movies: Movie[];
}

export default function MoviesList(props: MoviesListProps) {    
    return (<div>
        <Grid container spacing={2}>
            {props.movies.map(movie => 
                <Grid role='listitem' key={'it-'+movie.imdbID} item xs={12} sm={6} md={3}><MovieDetail key={'md-'+movie.imdbID} movie={movie} /></Grid>
            )}
        </Grid>
    </div>)
}