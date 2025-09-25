import { useState } from "react";

function Card({ title }) {
  // state for like/unlike
  const [liked, setLiked] = useState(false);

  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{liked ? "❤️ Liked" : "💔 Not Liked"}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "10px",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
};

export default Card;
