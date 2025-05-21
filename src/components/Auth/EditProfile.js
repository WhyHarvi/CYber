import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EditProfile.css'; // create this file for styling

function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    address: '',
    city: '',
    zipCode: '',
    province: ''
  });

  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      alert('Please login to access your profile.');
      window.location.href = '/login';
      return;
    }

    axios.get('http://localhost:5000/my-profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setFormData(res.data);
      setLoading(false);
    })
    .catch(err => {
      alert('Failed to load profile');
      console.error(err);
    });
  }, [token]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put('http://localhost:5000/update-profile', formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      alert('Profile updated successfully!');
    })
    .catch(err => {
      alert('Failed to update profile');
      console.error(err);
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
        <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code" required />
        <select name="province" value={formData.province} onChange={handleChange} required>
          <option value="">Select Province</option>
          <option value="ON">Ontario</option>
          <option value="BC">British Columbia</option>
          <option value="AB">Alberta</option>
          <option value="QC">Quebec</option>
        </select>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
