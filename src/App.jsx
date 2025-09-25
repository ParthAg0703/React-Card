import Card from "./assets/Card";

function App() {
  return (
    <div style={styles.container}>
      <h1>React Mini Project - Cards</h1>
      <div style={styles.cards}>
        <Card title="First Card" />
        <Card title="Second Card" />
        <Card title="Third Card" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center"
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  }
};

export default App;
