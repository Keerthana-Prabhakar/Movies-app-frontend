import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Movies = () => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
        .then(res => setMovies(res.data))
        .catch(e => console.log(e));
    }, []);

        return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies && 
                movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title} by {movie.director}
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Movies