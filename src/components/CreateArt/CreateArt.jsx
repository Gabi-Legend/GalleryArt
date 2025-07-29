import styles from "./CreateArt.module.css";
import { useState } from "react";

function CreateArt() {
  const [art, setArt] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArt(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create Artwork</h1>

      <label className={styles.uploadLabel}>
        <input
          type="file"
          accept="image/*"
          className={styles.inputFile}
          onChange={handleImageChange}
        />
      </label>

      {art && <img src={art} alt="Preview" className={styles.previewImage} />}

      <input type="text" placeholder="description" />
      <button>Submit</button>
    </div>
  );
}

export default CreateArt;
