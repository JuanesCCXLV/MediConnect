// VideoCallWindow.jsx
// Componente React visual (no funcional) de una ventana de videollamada.
// Uso: import VideoCallWindow from './VideoCallWindow';
// <VideoCallWindow onExit={() => console.log('Salir')} />

import React, { useState, useEffect } from 'react';

export default function Videollamada({ onExit }) {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [connection, setConnection] = useState('connecting'); // 'connecting' | 'connected' | 'disconnected'

  // Simulación visual del estado de conexión (no hace nada real)
  useEffect(() => {
    const t1 = setTimeout(() => setConnection('connected'), 1400);
    return () => { clearTimeout(t1); };
  }, []);

  function handleExit() {
    if (onExit) onExit();
    // por defecto mostramos un mensaje visual en la consola
    console.log('Usuario salió de la consulta (visual)');
  }

  return (
    <div className="vc-root" role="dialog" aria-label="Ventana de videollamada">
      <style>{`
        .vc-root{ --bg:#0f1724; --card:#0b1220; --accent:#10b981; --muted:#94a3b8; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; display:flex; align-items:center; justify-content:center; padding:18px; }
        .vc-card{ width:920px; max-width:95vw; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.015)); border:1px solid rgba(255,255,255,0.03); border-radius:12px; overflow:hidden; box-shadow: 0 10px 30px rgba(2,6,23,0.6); display:grid; grid-template-columns: 1fr 320px; gap:16px; padding:18px; }
        .vc-left{ display:flex; flex-direction:column; gap:12px; }
        .vc-video{ background:linear-gradient(180deg, #091025 0%, #061026 100%); border-radius:8px; height:420px; display:flex; align-items:center; justify-content:center; color:var(--muted); position:relative; }
        .vc-video .placeholder{ width:92%; height:88%; border:2px dashed rgba(255,255,255,0.04); border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:14px; }
        .vc-info{ display:flex; gap:12px; align-items:center; justify-content:space-between; }
        .vc-texts{ display:flex; flex-direction:column; gap:6px; }
        .vc-title{ color:#e6eef8; font-weight:600; font-size:18px; }
        .vc-sub{ color:var(--muted); font-size:13px; }
        .vc-warnings{ background:rgba(255,255,255,0.02); border-radius:8px; padding:10px; color:var(--muted); font-size:13px; display:flex; gap:10px; align-items:center; }

        .vc-right{ display:flex; flex-direction:column; gap:14px; min-width:260px; }
        .vc-card-panel{ background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.008)); border-radius:10px; padding:12px; border:1px solid rgba(255,255,255,0.02); }
        .connection{ display:flex; gap:10px; align-items:center; }
        .dot{ width:12px; height:12px; border-radius:50%; background:var(--muted); box-shadow:0 0 6px rgba(0,0,0,0.6); }
        .dot.connecting{ animation: pulse 1.4s infinite; background:linear-gradient(180deg,var(--accent), #06b6d4); }
        .dot.connected{ background:var(--accent); }
        .dot.disconnected{ background:#ef4444; }
        @keyframes pulse{ 0%{ transform:scale(0.9); opacity:0.9 } 50%{ transform:scale(1.3); opacity:0.6 } 100%{ transform:scale(0.95); opacity:0.9 } }

        .controls{ display:flex; gap:10px; align-items:center; }
        .btn{ padding:10px 12px; border-radius:8px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.02); color:#e6eef8; font-weight:600; cursor:pointer; min-width:44px; display:inline-flex; align-items:center; justify-content:center; }
        .btn.secondary{ background:transparent; color:var(--muted); font-weight:500; border:1px dashed rgba(255,255,255,0.02); }
        .btn.exit{ background:#111827; border:1px solid rgba(255,255,255,0.04); color:#ffd6d6; box-shadow: 0 6px 18px rgba(239,68,68,0.08); }
        .btn:focus{ outline:3px solid rgba(16,185,129,0.12); }
        .small{ font-size:13px; color:var(--muted); }

        .status-row{ display:flex; gap:8px; align-items:center; }
        .device-pill{ padding:8px 10px; border-radius:999px; background:rgba(255,255,255,0.01); font-size:13px; color:var(--muted); border:1px solid rgba(255,255,255,0.02); }

        .footer-row{ display:flex; gap:8px; align-items:center; justify-content:flex-end; }

        /* responsive */
        @media (max-width:880px){ .vc-card{ grid-template-columns: 1fr; } .vc-video{ height:300px } }
      `}</style>

      <div className="vc-card">
        <div className="vc-left">
          <div className="vc-info">
            <div className="vc-texts">
              <div className="vc-title">Bienvenido a la consulta</div>
              <div className="vc-sub">Tu profesional de la salud se conectará pronto.</div>
            </div>

            <div className="status-row">
              <div className="device-pill">Verifica micrófono y cámara</div>
            </div>
          </div>

          <div className="vc-video" aria-hidden="true">
            <div className="placeholder">Vista previa de cámara (visual)</div>
          </div>

          <div className="vc-warnings">
            <div style={{fontWeight:600, color:'#dbeafe'}}>Recordatorio:</div>
            <div className="small">Asegúrate de habilitar el micrófono y la cámara antes de iniciar.</div>
          </div>

          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div className="controls">
              <button className="btn" onClick={() => setMicOn(v => !v)} aria-pressed={!micOn} aria-label={micOn? 'Silenciar micrófono' : 'Activar micrófono'}>
                {micOn ? 'Mic: ON' : 'Mic: OFF'}
              </button>
              <button className="btn" onClick={() => setCamOn(v => !v)} aria-pressed={!camOn} aria-label={camOn? 'Apagar cámara' : 'Encender cámara'}>
                {camOn ? 'Cam: ON' : 'Cam: OFF'}
              </button>
              <button className="btn secondary" onClick={() => alert('Ayuda (visual)')}>Ayuda</button>
            </div>

            <div className="small">Duración estimada: —</div>
          </div>
        </div>

        <aside className="vc-right">
          <div className="vc-card-panel">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <div className="small">Estado de conexión</div>
                <div style={{display:'flex', alignItems:'center', gap:8, marginTop:8}}>
                  <div className={`dot ${connection}`}></div>
                  <div style={{fontWeight:600, color: connection === 'connected' ? 'var(--accent)' : '#cbd5e1'}}>{connection === 'connecting' ? 'Conectando...' : (connection === 'connected' ? 'Conectado' : 'Desconectado')}</div>
                </div>
              </div>

              <div style={{textAlign:'right'}}>
                <div className="small">ID de llamada</div>
                <div style={{fontWeight:700}}>VC-34A9</div>
              </div>
            </div>

            <div style={{height:10}} />

            <div className="small">Consejo rápido: cierra otras apps que usen cámara para evitar conflictos.</div>
          </div>

          <div className="vc-card-panel">
            <div className="small" style={{marginBottom:8}}>Controles</div>
            <div style={{display:'flex', gap:8}}>
              <div className="device-pill">Micrófono: {micOn ? 'activo' : 'silenciado'}</div>
              <div className="device-pill">Cámara: {camOn ? 'encendida' : 'apagada'}</div>
            </div>
          </div>

          <div className="vc-card-panel" style={{display:'flex', flexDirection:'column', gap:10}}>
            <div className="small">Opciones</div>
            <div style={{display:'flex', gap:8}}>
              <button className="btn" onClick={() => alert('Configuración (visual)')}>Configurar</button>
              <button className="btn exit" onClick={handleExit} aria-label="Salir de la consulta">Salir de la consulta</button>
            </div>
          </div>

          <div style={{flex:1, display:'flex', alignItems:'flex-end', justifyContent:'flex-end'}}>
            <div className="small">Versión prototipo — visual</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
