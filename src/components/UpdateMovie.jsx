import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(e => setError(e.response?.data?.message));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`, movie)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(e => console.log(e));
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });

  };
  return (
    <div>
      <h2>Update movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={movie?.title || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Director</label>
        <input type="text" name="author" value={movie?.director || ''} onChange={handleChange} />
        <label htmlFor="">Year</label>
        <input type="text" name="year" value={movie?.year || ''} onChange={handleChange} />
        <button>Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateMovie;