import Movies from "./Movies";
import Movie from "./Movie";

const MoviesList = () => {
    return(
        <div>
            {
                Movies.map((Movie)=>(
                    <Movie key = {Movie.title}
                    {...Movie}/>
                ))
            }
        </div>
    );
};
export default MoviesList;