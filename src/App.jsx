import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Routes
import { fetchMoviesAndSeries } from './services/api.js';
import SearchBar from './components/SearchBar.jsx';
import MovieList from './components/MovieList.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import NotFound from './components/NotFound.jsx';

import './App.scss';

function App() {
  // State to hold the search query and search results
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle the search query
  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    try {
      const results = await fetchMoviesAndSeries(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // console.log(searchResults);

  useEffect(() => {
    handleSearch('car');
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Movie/Series Library</h1>
          <SearchBar onSearch={handleSearch} />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={ 
                <MovieList
                  title="Search Results"
                  movies={searchResults}
                  query={query}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
