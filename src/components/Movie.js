import React from "react";
import PropTypes from "prop-types";
import ".components/Movie.css";

function Movie({ year, title, summary, poster, genres }) {



    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <div className="movie__summary">
                    {summary.length > 255? `${summary.slice(0,255)}...` : summary}</div>
            </div>
        </div>
    )
}

Movie.propTypes = {

    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

}

export default Movie;