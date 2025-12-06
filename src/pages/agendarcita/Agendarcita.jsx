import { useState } from "react";

export default function AgendarCita() {
  const [date, setDate] = useState("");

  return (
    <div style={styles.container}>
      {/* DATOS DEL PACIENTE */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Datos del Paciente</h2>
        <input style={styles.input} placeholder="Nombre del paciente" type="text" />
        <input style={styles.input} placeholder="Documento de identidad" type="text" />
        <input style={styles.input} placeholder="Correo electrónico" type="email" />
      </div>

      {/* CALENDARIO */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Seleccionar Fecha de la Cita</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button}>Confirmar Cita</button>
      </div>

      <div style={styles.row}>
        {/* CITAS ACTUALES */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Citas Actuales</h2>
          <p style={styles.text}>No hay citas programadas.</p>
        </div>

        {/* CANCELAR CITAS */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Cancelar Citas</h2>
          <p style={styles.text}>No hay citas para cancelar.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    background: "white",
    display: "grid",
    gap: "10px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    background: "#0077ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  text: {
    color: "#555",
  }
};

