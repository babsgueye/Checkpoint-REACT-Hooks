import Movies from "./Movies";
import MovieCard from "./MovieCard";

const MoviesList = ({movies}) => {
    return(
        <div>
            {
                Movies.map((movie)=>(
                    <MovieCard key = {movie.id}
                    {...movie}/>
                ))
            }
        </div>
    );
};
export default MoviesList;