import styles from "./CreateArt.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateArt() {
  const [art, setArt] = useState(null);
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setArt(imageURL);
    }
  };

  const handleSubmit = () => {
    if (!art || !desc) {
      alert("Please select an image and add a description.");
      return;
    }

    const existingArtworks = JSON.parse(localStorage.getItem("artworks")) || [];
    const newArtwork = {
      image: art,
      description: desc,
    };

    localStorage.setItem(
      "artworks",
      JSON.stringify([...existingArtworks, newArtwork])
    );
    navigate("/"); // redirect to Main page
  };

  return (
    <div className={styles.container}>
      <h1>Create Artwork</h1>

      <label className={styles.uploadLabel}>
        Choose Image
        <input
          type="file"
          accept="image/*"
          className={styles.inputFile}
          onChange={handleImageChange}
        />
      </label>

      {art && <img src={art} alt="Preview" className={styles.previewImage} />}

      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CreateArt;
