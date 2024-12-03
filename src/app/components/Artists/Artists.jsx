"use client";
import { useEffect, useState } from 'react';
import { fetchArtists, createArtist } from '../../services/assetService';
import './styles.css'; 

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [newArtist, setNewArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArtists = async () => {
      try {
        setLoading(true);
        const data = await fetchArtists();
        setArtists(data.result || []);
      } catch (err) {
        console.error('Error loading artists:', err);
        setError('Failed to load artists');
      } finally {
        setLoading(false);
      }
    };
    loadArtists();
  }, []);

  const handleAddArtist = async () => {
    try {
      setLoading(true);
      await createArtist({ name: newArtist });
      setNewArtist('');
      const updatedArtists = await fetchArtists();
      setArtists(updatedArtists.result || []);
    } catch (err) {
      console.error('Error adding artist:', err);
      setError('Failed to add artist');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="artists-container">
      <h1 className="artists-title">Your Favorite Artists</h1>
      <div className="artists-form">
        <input
          className="artists-input"
          type="text"
          value={newArtist}
          onChange={(e) => setNewArtist(e.target.value)}
          placeholder="Add a new artist..."
        />
        <button
          className="artists-button"
          onClick={handleAddArtist}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Artist'}
        </button>
      </div>
      {error && <p className="artists-error">{error}</p>}
      <ul className="artists-list">
        {loading ? (
          <p className="artists-loading">Loading artists...</p>
        ) : (
          artists.map((artist) => (
            <li key={artist['@key']} className="artists-list-item">
              {artist.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Artists;
