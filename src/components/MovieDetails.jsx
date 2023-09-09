import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

function MovieDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                setDetails(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    // console.log(details)

    if (!details) {
        return <div>No such Movie/ Show</div>;
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <div className="movie-details">
                <img src={details.image.medium} alt={details.name} className="movie-image" />
                <div className="details-info">
                    <div className="details-section">
                        <h3>Summary</h3>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }} />
                    </div>
                    <div className="details-section">
                        <h3>Details</h3>
                        <p>
                            Language: {details.language}
                            <br />
                            Premiered: {details.premiered}
                            <br />
                            Type: {details.type}
                            <br />
                            Status: {details.status}
                            <br />
                            Runtime: {details.runtime} minutes
                            <br />
                            Network: {details.network?.name}
                            <br />
                            Official Site: <a href={details.officialSite} target="_blank" rel="noopener noreferrer">{details.officialSite}</a>
                        </p>
                    </div>
                    <div className="details-section">
                        <h3>Rating</h3>
                        {details.rating?.average ? (
                            <p>
                                <FaStar className="star-icon" /> {details.rating.average}
                            </p>
                        ) : (
                            <p>No ratings available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
