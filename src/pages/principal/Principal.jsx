import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Principal.css';

const Principal = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verificar si hay un usuario en sessionStorage
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      // Si no hay usuario, redirigir al login
      navigate('/');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    // Limpiar sessionStorage y redirigir al login
    sessionStorage.removeItem('user');
    navigate('/');
  };

  // Si no hay usuario aún, no renderizar nada
  if (!user) {
    return null;
  }

  return (
    <div className="principal-container">
      {/* Header */}
      <header className="principal-header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo">
              <img src="/public/logo.jpeg" alt="MediConnect Logo" className="logo-image" />
            </div>
            <h1 className="header-title">MediConnect</h1>
          </div>
          
          <div className="header-right">
            <div className="user-info">
              <p className="user-name">{user?.nombre}</p>
              <p className="user-cedula">Cédula: {user?.cedula}</p>
            </div>
            <div className="user-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <button onClick={handleLogout} className="btn-logout" title="Cerrar sesión">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="principal-main">
        {/* Bienvenida */}
        <div className="welcome-banner">
          <h2 className="welcome-title">Hola, {user?.nombre}</h2>
          <p className="welcome-subtitle">¿Qué necesitas hacer hoy?</p>
        </div>

        {/* Opciones principales */}
        <div className="options-grid">
          {/* Agendar cita */}
          <button
            onClick={() => navigate('/agendarcita')}
            className="option-card"
          >
            <div className="option-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3 className="option-title">Agendar cita</h3>
            <p className="option-description">Programa tu consulta médica con tu especialista</p>
            <div className="option-action">
              Continuar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          </button>

          {/* Videollamada */}
          <button
            onClick={() => navigate('/videollamada')}
            className="option-card"
          >
            <div className="option-icon purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 7l-7 5 7 5V7z"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
              </svg>
            </div>
            <h3 className="option-title">Entrar a videollamada</h3>
            <p className="option-description">Únete a tu consulta virtual cuando sea la hora</p>
            <div className="option-action">
              Continuar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          </button>

          {/* Adjuntar documentos */}
          <button
            onClick={() => alert('Pendiente de implementación')}
            className="option-card"
          >
            <div className="option-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 className="option-title">Adjuntar documentos</h3>
            <p className="option-description">Sube tus exámenes y resultados médicos</p>
            <div className="option-action">
              Continuar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          </button>

          {/* Ayuda */}
          <button
            onClick={() => alert('Pendiente de implementación')}
            className="option-card"
          >
            <div className="option-icon orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <h3 className="option-title">Ayuda al usuario</h3>
            <p className="option-description">Encuentra respuestas a tus preguntas frecuentes</p>
            <div className="option-action">
              Continuar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Información adicional */}
        <div className="info-box">
          <h3 className="info-title">Información importante</h3>
          <div className="info-list">
            <div className="info-item">
              <span className="info-bullet"></span>
              <p>Para tu videollamada, asegúrate de tener buena conexión a internet</p>
            </div>
            <div className="info-item">
              <span className="info-bullet"></span>
              <p>Puedes entrar a la consulta virtual solo cuando sea tu horario de cita</p>
            </div>
            <div className="info-item">
              <span className="info-bullet"></span>
              <p>Si tienes dudas, visita la sección de ayuda para más información</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Principal;