import styles from "./Main.module.css";
import { useEffect, useState } from "react";

function Main() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const storedArtworks = JSON.parse(localStorage.getItem("artworks")) || [];
    setArtworks(storedArtworks);
  }, []);

  const toggleFavorite = (index) => {
    const updated = [...artworks];
    updated[index].favorite = !updated[index].favorite;

    setArtworks(updated);
    localStorage.setItem("artworks", JSON.stringify(updated));
  };

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
              <p className={styles.description}>{art.description}</p>
              <button
                className={`${styles.heartButton} ${
                  art.favorite ? styles.favorited : ""
                }`}
                onClick={() => toggleFavorite(index)}
              >
                {art.favorite ? "❤️" : "🤍"}
              </button>
            </div>
          ))
        )}
      </div>
      <button>Add Artwork</button>
    </div>
  );
}

export default Main;
