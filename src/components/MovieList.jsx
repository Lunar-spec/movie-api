/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function MovieList({ title, movies, query }) {
    return (
        <div className="movie-list">
            <h2 style={{ textTransform: "capitalize" }}>
                {title}, {query}
            </h2>
            <div className="movie-cards">
                {movies.map((movie) => (
                    <div key={movie.show.id} className="movie-card">
                        <img
                            src={movie.show.image?.medium}
                            alt={movie.show.name}
                            className="movie-acrd-image"
                        />
                        <div className="movie-detail">
                            <h3 className="movie-title">{movie.show.name}</h3>
                            <p className="movie-score">
                                Score: {Math.floor(movie.score * 10)}/10
                            </p>
                            <Link to={`/movie/${movie.show.id}`} className="movie-link">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;
