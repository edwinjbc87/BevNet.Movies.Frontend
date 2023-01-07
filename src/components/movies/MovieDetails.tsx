import { Box, Card, CardContent, Typography } from "@mui/material";
import Movie from "../../entities/Movie";

export interface MovieDetailProps {
    movie: Movie;
}

export default function MovieDetails(props: MovieDetailProps) {
    const { title, year, imdbID} = props.movie;

    return (<div>
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" className="movie-details">
                <CardContent>
                    <Typography className="movie-details__title" variant="h5">{title}</Typography>
                    <div style={{textAlign: 'left', padding: '20px'}}>
                        <Typography variant="body2">
                            <strong className='movie-details__year'>Year: </strong> {year}<br />
                            <strong className="movie-details__imdbID">imdb ID: </strong> {imdbID}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </Box>
    </div>)
}