import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewMovie = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`,{ title, director, year, poster})
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(e => console.log(e));
    };
    return (
        <div className="bg-yellow-200 bg-cover mx-h-screen justify-items-center">
            <h2 className="mb-10 mx-11 text-center font-bold text-xl ">Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Title</label>
                <input className= " flex flex-row"type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                <label htmlFor="">Director</label>
                <input className= "flex flex-row " type="text" name="Director" value={director} onChange={e => setDirector(e.target.value)} />
                <label htmlFor="">Year</label>
                <input className= "flex flex-row" type="text" name="Year" value={year} onChange={e => setYear(e.target.value)} />
                <label htmlFor="">Poster</label>
                <input className= "flex flex-row" type="text" name="Poster" value={poster} onChange={e => setPoster(e.target.value)} />
                <button className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">Add Movie</button>
            </form>
        </div>
    );
};

export default NewMovie