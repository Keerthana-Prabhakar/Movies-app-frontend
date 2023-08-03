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
        
            <div className="card w-500 h-700 shadow-xl gap-10 bg-gray-800 ">
<div className="card-body ">
            <h2 className=" mb-10 mx-11 text-center font-bold text-xl text-white">Movie List</h2>
            <div>
            <ul className="flex flex-wrap gap-10">
            
                {movies && 
                movies.map((movies) => (
                    <li className="max-w-sm rounded overflow-hidden shadow-lg  w-[40%] mb-8 gap-8 text-white" key={movies.id}>
<img className="rounded-xl border hover:border-yellow-600" style={{ height:"300px",width:"400px"}}  src= {movies.poster} />
                        <Link to={`/movies/${movies.id}`} >
                            {movies.title} by {movies.director} 
                        </Link>
                    

                    </li>
                    
                ))}
            </ul>
            </div>
            </div>
            </div>

/* <div className="card w-96 bg-base-100 shadow-xl">
<figure></figure>
<div className="card-body">
  <h2 className="card-title mb-10 mx-11 text-center font-bold text-xl">Movie List</h2>
 <ul className="flex flex-row">
 {movies && 
                movies.map((movies) => (
                    <li  key={movies.id}>
                        <img style={{ height:"100px",width:"100px"}} className="rounded-xl border hover:border-yellow-600" src={movies.poster} alt="Shoes" />
 <Link to={`/movies/${movies.id}`} >
{movies.title} by {movies.director} 
</Link>
</li>
                ))}
</ul> 
</div>
</div> */
            
        
 
    )
}

export default Movies