import Movies from "./Movies";
import Movie from "./Movie";

const MoviesList = () => {
    return(
        <div>
            {
                Movies.map((movie)=>(
                    <Movie key = {movie.title}
                    {...movie}/>
                ))
            }
        </div>
    );
};
export default MoviesList;