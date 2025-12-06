import { useState } from "react";
import { Link } from "react-router-dom";

export default function AgendarCita() {
  const [date, setDate] = useState("");

  return (
    <div style={styles.page}>
      <div style={styles.header}> 
        <h1 style={styles.title}>Agendar Cita</h1>
        <Link to="/" style={styles.backBtn}>⟵ Volver</Link>
      </div>

      <div style={styles.sectionGrid}>
        {/* DATOS DEL PACIENTE */}
        <div style={styles.card}>
          <h2 style={styles.cardSubtitle}>Datos del Paciente</h2>

          <label style={styles.label}>Nombre completo</label>
          <input style={styles.input} placeholder="Ej: Juan Pérez" />

          <label style={styles.label}>Documento</label>
          <input style={styles.input} placeholder="Ej: 123456789" />

          <label style={styles.label}>Correo electrónico</label>
          <input style={styles.input} type="email" placeholder="ejemplo@mail.com" />
        </div>

        {/* CALENDARIO */}
        <div style={styles.card}>
          <h2 style={styles.cardSubtitle}>Seleccionar Fecha</h2>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
          <button style={styles.primaryBtn}>Confirmar Cita</button>
        </div>
      </div>

      {/* SEGUNDA SECCIÓN */}
      <div style={styles.sectionGrid}>
        {/* CITAS ACTUALES */}
        <div style={styles.card}>
          <h2 style={styles.cardSubtitle}>Citas Actuales</h2>
          <p style={styles.text}>Aún no tienes citas programadas.</p>
        </div>

        {/* CANCELAR CITAS */}
        <div style={styles.card}>
          <h2 style={styles.cardSubtitle}>Cancelar Citas</h2>
          <p style={styles.text}>No hay citas disponibles para cancelar.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  backBtn: {
    fontSize: "16px",
    color: "#0077ff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  cardSubtitle: {
    fontSize: "20px",
    marginBottom: "5px",
    fontWeight: "600",
  },
  label: {
    fontSize: "14px",
    color: "gray",
    marginTop: "5px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  primaryBtn: {
    marginTop: "10px",
    padding: "12px",
    background: "#0077ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  text: {
    color: "#555",
  },
};


