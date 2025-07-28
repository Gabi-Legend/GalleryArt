import styles from "./Main.module.css";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>Gallery Art</h1>
      <div className={styles.artworks}>
        <p>Artworks</p>
      </div>
      <button
        onClick={() => {
          navigate("/artwork");
        }}
      >
        Add Artwork
      </button>
    </div>
  );
}

export default Main;
