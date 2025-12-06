import { useState } from "react";
import { Link } from "react-router-dom";

export default function AgendarCita() {
  const [form, setForm] = useState({ nombre: "", cedula: "", correo: "", fecha: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validar = () => {
    let newErrors = {};

    if (!form.nombre.trim()) newErrors.nombre = "Este campo es obligatorio.";
    if (!form.cedula.trim()) newErrors.cedula = "Ingresa tu número de documento.";
    if (!form.correo.trim()) newErrors.correo = "El correo es obligatorio.";
    if (!form.fecha.trim()) newErrors.fecha = "Selecciona una fecha válida.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validar()) return;
    alert("Cita confirmada correctamente");
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}> 
        <h1 style={styles.title}>Agendar Cita</h1>
        <Link to="/principal" style={styles.backBtn}>⟵ Volver</Link>
      </div>

      <div style={styles.sectionGrid}>
        {/* DATOS DEL PACIENTE */}
        <div style={styles.card}>
          <h2 style={styles.cardSubtitle}>Datos del Paciente</h2>

          <label style={styles.label}>Nombre completo</label>
          <input 
            style={{ ...styles.input, borderColor: errors.nombre ? "#ff4d4d" : "#ccc" }} 
            placeholder="Ej: Juan Pérez"
            onChange={(e) => handleChange("nombre", e.target.value)}
          />
          {errors.nombre && <p style={styles.error}>{errors.nombre}</p>}

          <label style={styles.label}>Documento</label>
          <input 
            style={{ ...styles.input, borderColor: errors.cedula ? "#ff4d4d" : "#ccc" }} 
            placeholder="Ej: 123456789"
            onChange={(e) => handleChange("cedula", e.target.value)}
          />
          {errors.cedula && <p style={styles.error}>{errors.cedula}</p>}

          <label style={styles.label}>Correo electrónico</label>
          <input 
            style={{ ...styles.input, borderColor: errors.correo ? "#ff4d4d" : "#ccc" }}
            type="email" placeholder="ejemplo@mail.com"
            onChange={(e) => handleChange("correo", e.target.value)}
          />
          {errors.correo && <p style={styles.error}>{errors.correo}</p>}
        </div>

        {/* CALENDARIO */}
        <div style={styles.card}>
          <h2 style={styles.cardSubtitle}>Seleccionar Fecha</h2>
          <input
            type="date"
            value={form.fecha}
            onChange={(e) => handleChange("fecha", e.target.value)}
            style={{ ...styles.input, borderColor: errors.fecha ? "#ff4d4d" : "#ccc" }}
          />
          {errors.fecha && <p style={styles.error}>{errors.fecha}</p>}

          <button style={styles.primaryBtn} onClick={handleSubmit}>Confirmar Cita</button>
        </div>
      </div>

      {/* SEGUNDA SECCIÓN */}
      <div style={styles.sectionGrid}>
        <div style={styles.card}>
          <h2 style={styles.cardSubtitle}>Citas Actuales</h2>
          <p style={styles.text}>Aún no tienes citas programadas.</p>
        </div>

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
    backgroundColor: "#f6faff",
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
    color: "#004fa3",
  },
  backBtn: {
    fontSize: "16px",
    color: "#004fa3",
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
    color: "#003b73",
  },
  label: {
    fontSize: "14px",
    color: "#4a4a4a",
    marginTop: "5px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    transition: "0.2s",
  },
  primaryBtn: {
    marginTop: "10px",
    padding: "12px",
    background: "#0073e6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
  },
  text: {
    color: "#555",
  },
  error: {
    color: "#ff4d4d",
    fontSize: "13px",
  }
};


