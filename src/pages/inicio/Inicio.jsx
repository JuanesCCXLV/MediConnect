import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenido a MediConnect</h1>
      <p style={styles.subtitle}>Tu plataforma de teleconsulta médica accesible</p>

      <div style={styles.buttonContainer}>
        <Link to="/videollamada" style={styles.button}>Videollamada</Link>
        <Link to="/agendarcita" style={styles.buttonSec}>Agendar Cita</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#0077ff",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  buttonSec: {
    padding: "12px 24px",
    backgroundColor: "#00b894",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
