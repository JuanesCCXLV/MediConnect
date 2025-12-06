import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    cedula: '',
    password: '',
    confirmPassword: '',
    nombre: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const validateCedula = (cedula) => {
    return cedula.length >= 6 && cedula.length <= 10 && /^\d+$/.test(cedula);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleLogin = () => {
    const newErrors = {};

    if (!formData.cedula) {
      newErrors.cedula = 'Por favor ingresa tu número de cédula';
    } else if (!validateCedula(formData.cedula)) {
      newErrors.cedula = 'Revisa que tu número de cédula tenga entre 6 y 10 dígitos';
    }

    if (!formData.password) {
      newErrors.password = 'Por favor ingresa tu contraseña';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Tu contraseña debe tener al menos 6 caracteres';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Guardar datos del usuario en sessionStorage
    const userData = {
      cedula: formData.cedula,
      nombre: formData.nombre || 'Usuario',
      email: formData.email || 'usuario@ejemplo.com'
    };
    sessionStorage.setItem('user', JSON.stringify(userData));

    // Navegar a la página principal
    navigate('/principal');
  };

  const handleRegister = () => {
    const newErrors = {};

    if (!formData.nombre) {
      newErrors.nombre = 'Por favor ingresa tu nombre completo';
    }

    if (!formData.cedula) {
      newErrors.cedula = 'Por favor ingresa tu número de cédula';
    } else if (!validateCedula(formData.cedula)) {
      newErrors.cedula = 'Revisa que tu número de cédula tenga entre 6 y 10 dígitos';
    }

    if (!formData.email) {
      newErrors.email = 'Por favor ingresa tu correo electrónico';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido';
    }

    if (!formData.password) {
      newErrors.password = 'Por favor crea una contraseña';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Tu contraseña debe tener al menos 6 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Por favor confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Guardar datos del usuario en sessionStorage
    const userData = {
      cedula: formData.cedula,
      nombre: formData.nombre,
      email: formData.email
    };
    sessionStorage.setItem('user', JSON.stringify(userData));

    // Navegar a la página principal
    navigate('/principal');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      isRegistering ? handleRegister() : handleLogin();
    }
  };

  return (
    <div className="inicio-container">
      <div className="inicio-card">
        <div className="inicio-header">
          <div className="inicio-logo">
            <img src="/public/logo.jpeg" alt="MediConnect Logo" className="logo-image" />
          </div>
          <h1 className="inicio-title">MediConnect</h1>
          <p className="inicio-subtitle">
            {isRegistering ? 'Crea tu cuenta para comenzar' : 'Bienvenido de nuevo'}
          </p>
        </div>

        <div className="inicio-form">
          {isRegistering && (
            <div className="form-group">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className={`form-input ${errors.nombre ? 'error' : ''}`}
                placeholder="Escribe tu nombre completo"
              />
              <p className="form-helper">Ingresa tu nombre tal como aparece en tu documento</p>
              {errors.nombre && <p className="form-error">{errors.nombre}</p>}
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Número de cédula</label>
            <input
              type="text"
              name="cedula"
              value={formData.cedula}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className={`form-input ${errors.cedula ? 'error' : ''}`}
              placeholder="1234567890"
            />
            <p className="form-helper">Ingresa tu cédula tal como aparece en tu documento</p>
            {errors.cedula && <p className="form-error">{errors.cedula}</p>}
          </div>

          {isRegistering && (
            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="tucorreo@ejemplo.com"
              />
              <p className="form-helper">Usaremos este correo para enviarte recordatorios</p>
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="••••••••"
            />
            <p className="form-helper">
              {isRegistering ? 'Debe tener al menos 6 caracteres' : 'Ingresa tu contraseña'}
            </p>
            {errors.password && <p className="form-error">{errors.password}</p>}
          </div>

          {isRegistering && (
            <div className="form-group">
              <label className="form-label">Confirmar contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="••••••••"
              />
              <p className="form-helper">Escribe la misma contraseña nuevamente</p>
              {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
            </div>
          )}

          <button
            onClick={isRegistering ? handleRegister : handleLogin}
            className="btn-primary"
          >
            {isRegistering ? 'Crear cuenta' : 'Iniciar sesión'}
          </button>
        </div>

        <div className="inicio-footer">
          <button
            onClick={() => {
              setIsRegistering(!isRegistering);
              setErrors({});
              setFormData({ cedula: '', password: '', confirmPassword: '', nombre: '', email: '' });
            }}
            className="btn-link"
          >
            {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;