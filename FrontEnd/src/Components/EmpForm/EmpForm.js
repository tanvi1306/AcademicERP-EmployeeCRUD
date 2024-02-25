import React, { useState } from 'react';
import './EmpForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const EmpForm = () => {
  
  const [requestComplete, setRequestComplete] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mail: '',
    title: '',
    photopath: '',
    dname: '',
  });

  const handleChangeOptions = (e) => {
    setFormData({ ...formData, dname: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9191/emp/Add', formData, {
        params: {
          dname: formData.dname,
        },
      });
      console.log('Employee added successfully:', response.data);
      setRequestComplete(true);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  if (requestComplete) {
    navigate('/view')
  }
  else{
  return (
    <div className="form-container container shadow p-3 mb-5 bg-white rounded">
        <Navbar />
      <div className="bg-light">
        <div className="row">
          <div className="col-lg-8 col-md-12 p-5 bg-white rounded-3">
            <div className="col-md-6 p-3">
              <h1 className="h5  my-4">Enter Employee Details</h1>
            </div>
            <form onSubmit={handleSubmit} className="row mb-3">
              <div>
                <div className="col-md-6 p-3">
                  <input
                    required
                    placeholder="First Name"
                    type="text"
                    name="fname"
                    id="fname"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="col-md-6 p-3">
                  <input
                    required
                    placeholder="Last Name"
                    type="text"
                    name="lname"
                    id="lname"
                    value={formData.lname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="col-md-6 p-3">
                  <input
                    required
                    placeholder="Email"
                    type="email"
                    name="mail"
                    id="mail"
                    value={formData.mail}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="col-md-6 p-3">
                  <select
                    name="dname"
                    style={{ width: '19vw' }}
                    onChange={handleChangeOptions}
                    value={formData.dname}
                  >
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Accounts">Accounts</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="col-md-6 p-3">
                  <input
                    required
                    placeholder="Title"
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="col-md-6 p-3">
                  <input
                    placeholder="Image"
                    type="file"
                    name="photopath"
                    id="photopath"
                    value={formData.photopath}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="col-md-6 p-3">
                  <button className="btn btn-md btn-dark" type="submit">
                    Add Employee
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md-12 text-white aside px-4 py-5 bg-dark"></div>
        </div>
      </div>
    </div>
  );
  }
};

export default EmpForm;
