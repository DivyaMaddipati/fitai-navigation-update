import React, { useState } from 'react';
import './SignIn.css'; // Create a corresponding CSS file for styling

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, e.g., send data to an API or perform validation.
    // Access the form data via formData.username and formData.password.
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="signin-container">
      <div className="card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
