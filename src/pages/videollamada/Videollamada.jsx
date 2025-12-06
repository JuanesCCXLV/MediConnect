// Videollamada.jsx (versión mejorada)
// • Botón volver removido
// • Botón Salir ahora usa navegación
// • Indicadores de mic y cam ahora son botones estilo toggle

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Videollamada() {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [connection, setConnection] = useState("connecting");
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setConnection("connected"), 1200);
    return () => clearTimeout(t);
  }, []);

  function handleExit() {
    navigate("/"); // vuelve a inicio
  }

  return (
    <div className="vc-root">
      <style>{`
        .vc-root {
          --bg: #0f1724;
          --panel: #111a2b;
          --accent: #10b981;
          --muted: #94a3b8;
          min-height: 100vh;
          background: var(--bg);
          padding: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Inter, sans-serif;
        }

        .vc-wrapper {
          width: 100%;
          max-width: 1000px;
          background: var(--panel);
          border-radius: 14px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.4);
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 20px;
        }
        @media(max-width: 860px) {
          .vc-wrapper { grid-template-columns: 1fr; }
        }

        .vc-videoArea {
          background: #0b1220;
          border-radius: 10px;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
        }

        .vc-panel {
          background: rgba(255,255,255,0.03);
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 16px;
        }

        .btn {
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }
        .btn-toggle { background: rgba(255,255,255,0.06); color: white; }
        .btn-exit { background: #ef4444; color: white; width: 100%; }

        /* NUEVOS BOTONES PARA MIC Y CAM */
        .status-btn {
          padding: 10px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          color: white;
          text-align: center;
          transition: 0.2s;
        }
        .status-btn:hover { background: rgba(255,255,255,0.1); }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot.connecting { background: #facc15; }
        .dot.connected { background: #10b981; }
        .dot.disconnected { background: #ef4444; }
      `}</style>

      <div className="vc-wrapper">
        {/* IZQUIERDA */}
        <div>
          <h2 style={{ color: "white", marginBottom: 10 }}>Videollamada</h2>

          <div className="vc-videoArea">Vista previa de la cámara (visual)</div>

          {/* Controles principales */}
          <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
            <button className="btn btn-toggle" onClick={() => setMicOn(!micOn)}>
              {micOn ? "Mic: ON" : "Mic: OFF"}
            </button>

            <button className="btn btn-toggle" onClick={() => setCamOn(!camOn)}>
              {camOn ? "Cam: ON" : "Cam: OFF"}
            </button>

            <button className="btn btn-toggle" onClick={() => alert("Ayuda visual")}>Ayuda</button>
          </div>
        </div>

        {/* DERECHA */}
        <div>
          {/* Estado conexión */}
          <div className="vc-panel">
            <p style={{ color: "var(--muted)", margin: 0 }}>Estado de conexión</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
              <div className={`dot ${connection}`}></div>
              <strong style={{ color: "white" }}>
                {connection === "connecting"
                  ? "Conectando..."
                  : connection === "connected"
                  ? "Conectado"
                  : "Desconectado"}
              </strong>
            </div>
          </div>

          {/* MIC / CAM estilo botón */}
          <div className="vc-panel" style={{ display: "grid", gap: 10 }}>
            <div
              className="status-btn"
              onClick={() => setMicOn(!micOn)}
            >
              Micrófono: {micOn ? "Activo" : "Silenciado"}
            </div>

            <div
              className="status-btn"
              onClick={() => setCamOn(!camOn)}
            >
              Cámara: {camOn ? "Encendida" : "Apagada"}
            </div>
          </div>

          {/* Botón salir */}
          <div className="vc-panel">
            <button className="btn btn-exit" onClick={handleExit}>Salir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

