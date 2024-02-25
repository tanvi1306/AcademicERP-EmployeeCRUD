import React, { useState, useEffect } from 'react';
import '../EmpForm/EmpForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [requestComplete, setRequestComplete] = useState(false);
  const [ans, setAns] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    pwd: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get('http://localhost:9191/Admin/check', { params: formData })
      .then((response) => {
        console.log(response.data);
        console.log('Admin Login:', response.data);
        setAns(response.data);

        if (response.data) {
          console.log('LoggedIn!\n');
          setRequestComplete(true);
        } else {
          console.log('Cannot Login\n');
          setShowAlert(true);
          setFormData({
            id: '',
            pwd: '',
          });
        }
      })
      .catch((error) => {
        console.error('Error in Login:', error);
      });
  };

  useEffect(() => {
    if (requestComplete) {
      navigate('/view');
    }
  }, [requestComplete, navigate]);

  useEffect(() => {
    if (showAlert) {
      alert('Incorrect credentials. Please try again.');
      setShowAlert(false);
    }
  }, [showAlert]);

  return (
    <div className="form-container container shadow p-3 mb-5 bg-white rounded" style={{ width: '43vw' }}>
      <div className="" style={{ backgroundColor: '#212529' }}>
        <div className="row">
          <div className="col-lg-8 col-md-12 p-5 bg-white rounded-3">
            <div className="col-md-6 p-3">
              <h1 className="h5 my-4">Enter Admin Credentials</h1>
            </div>
            <form onSubmit={handleSubmit} className="row mb-3">
              <div>
                <div className="col-md-12 p-3">
                  <input
                    required
                    placeholder="Enter Name"
                    type="text"
                    name="id"
                    id="id"
                    value={formData.id}
                    onChange={handleChange}
                    style={{ width: '70%' }}
                  />
                </div>
              </div>
              <div>
                <div className="col-md-12 p-3">
                  <input
                    required
                    placeholder="Enter Password"
                    type="password"
                    name="pwd"
                    id="pwd"
                    value={formData.pwd}
                    onChange={handleChange}
                    style={{ width: '70%' }}
                  />
                </div>
              </div>
              <div>
                <div className="col-md-6 p-3">
                  <button className="btn btn-md btn-dark" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;