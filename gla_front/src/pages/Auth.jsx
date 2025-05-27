import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : { name: formData.name, email: formData.email, password: formData.password };

    try {
      const res = await fetch("http://localhost:5000/api/auth/" + (isLogin ? "login" : "register"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();
      console.log("Authenticated:", data);

      localStorage.setItem("token", data.token);

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Authentication failed");
    }

  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleAuth = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '' }); // Reset form when switching
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {isLogin ? (
        <Login
          onToggle={toggleAuth}
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      ) : (
        <Signup
          onToggle={toggleAuth}
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default Auth;