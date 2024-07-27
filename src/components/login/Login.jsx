import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    faculty: '',
    group: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="form-header">
        <h2>Stipendiyaga Nomzodlarni saralash</h2>
        <p>Tizimga xush kelibsiz</p>
        <img src="logo.png" alt="Namangan Muhandislik-Qurilish Instituti" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ism va familiya</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ism familiya"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email kiriting"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon raqami</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+998931234567"
          />
        </div>
        <div className="form-group">
          <label htmlFor="faculty">Fakultetingizni tanlang</label>
          <select
            id="faculty"
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
          >
            <option value="">Tanlang...</option>
            <option value="faculty1">Fakultet 1</option>
            <option value="faculty2">Fakultet 2</option>
            <option value="faculty3">Fakultet 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="group">Guruh nomi</label>
          <input
            type="text"
            id="group"
            name="group"
            value={formData.group}
            onChange={handleChange}
            placeholder="Guruh nomi"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Parol</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Parolni kiriting"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Parolni tasdiqlang</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Parolni tasdiqlang"
          />
        </div>
        <button type="submit">Ro'yxatdan o'tish</button>
      </form>
    </div>
  );
};

export default Login;
