import { Grid, Skeleton } from "@mui/material";
import Movie from "../../entities/Movie";
import MovieDetail from "./MovieDetails";

export interface MoviesListProps {
    movies: Movie[];
    isLoading: boolean;
}

export default function MoviesList(props: MoviesListProps) {    
    return (<div>
        <Grid container spacing={2}>
            {props.isLoading ? 
            [...Array(10)].map((_, i) => 
                <Grid item xs={12} sm={6}><Skeleton key={i} variant="rectangular" width={'100%'} height={'118px'} /></Grid>
            ): props.movies.map(movie => 
                <Grid role='listitem' key={'it-'+movie.imdbID} item xs={12} sm={6}><MovieDetail key={'md-'+movie.imdbID} movie={movie} /></Grid>
            )}
        </Grid>
    </div>)
}