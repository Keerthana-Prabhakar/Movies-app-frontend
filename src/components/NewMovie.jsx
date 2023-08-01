import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewMovie = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`,{ title, director, year})
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(e => console.log(e));
    };
    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Title</label>
                <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                <label htmlFor="">Director</label>
                <input type="text" name="Director" value={director} onChange={e => setDirector(e.target.value)} />
                <label htmlFor="">Year</label>
                <input type="text" name="Year" value={year} onChange={e => setYear(e.target.value)} />
                <button>Add Movie</button>
            </form>
        </div>
    );
};

export default NewMovie