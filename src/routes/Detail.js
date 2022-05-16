import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function Detail() {

    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();



    useEffect(() => {

        if (location.state === null) {
            navigate("/");
        }

        setMovie(location.state);

    }, [])

    console.log(movie.genres);


        return (
            <div className="movie">
                <img src={movie.poster} alt={movie.title} title={movie.title} />
                <div className="movie__data">
                    <h3 className="movie__title">{movie.title}</h3>
                    <h5 className="movie__year">{movie.year}</h5>
                    <ul className="movie__genres">
                        {movie.genres?.map((genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        ))}
                    </ul>
                    <div className="movie__summary">
                        {movie.summary}</div>
                </div>
            </div>
        )

    }



export default Detail;