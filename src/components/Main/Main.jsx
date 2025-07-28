import styles from "./Main.module.css";
function Main() {
  return (
    <div className={styles.container}>
      <h1>Gallery Art</h1>
      <div className={styles.artworks}>
        <p>Artworks</p>
      </div>
      <button>Add Artwork</button>
    </div>
  );
}

export default Main;
