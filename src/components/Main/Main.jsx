import styles from "./Main.module.css";
import { useEffect, useState } from "react";

function Main() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const storedArtworks = JSON.parse(localStorage.getItem("artworks")) || [];
    setArtworks(storedArtworks);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Gallery Art</h1>
      <div className={styles.artworks}>
        {artworks.length === 0 ? (
          <p>No artworks yet.</p>
        ) : (
          artworks.map((art, index) => (
            <div key={index} className={styles.artItem}>
              <img
                src={art.image}
                alt={`art-${index}`}
                className={styles.artImage}
              />
              <p>{art.description}</p>
            </div>
          ))
        )}
      </div>
      <button>Add Artwork</button>
    </div>
  );
}

export default Main;
