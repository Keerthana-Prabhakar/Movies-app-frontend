import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
        const [movie, setMovie] = useState(null);
        useEffect(() => {
            axios
            .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
            .then(res => setMovie(res.data))
            .catch(e => setError(e.response?.data?.message));
        }, []);
        const handleDelete = () => {
            axios
            .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
            .then(res => navigate('/'))
            .catch(e => console.log(e));
        };
    return (
        <div className="bg-blue-200 ">
        {error && <p style={{"color":"Green"}}>{error}</p>}
        {movie && (
            <>
                
        <h2 className= " bg-yellow-200 flex flex-col space-x-5;">{movie.title}</h2>
        <p className= " flex flex-col space-x-5;">Director: {movie.director}</p>
        <p className= " flex flex-row space-x-5;">Year: {movie.year}</p>
        <p className= " flex flex-row space-x-5;">Poster: {movie.poster}</p>
        <Link className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline" to={`/movies/${id}/update`}>Update Movie</Link>
        <button className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline" onClick={handleDelete}>Delete Movie</button>
        </>
        )}
</div>
    );
};

export default MovieDetails