import React, { useState, useEffect } from 'react';
import '../EmpDetails/EmpCard.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Profile.css'
import Navbar from '../Navbar/Navbar';
const Profile = () => {
  const [employee, setEmployee] = useState({});
  const [requestComplete, setRequestComplete] = useState(false);

  const location = useLocation();
  const id = location.state;


  useEffect(() => {
    axios.get(`http://localhost:9191/emp/View`,{
      params:{
        empId:id,
      }
    })
      .then(response => {
        setEmployee(response.data);
        setRequestComplete(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

 if(requestComplete)
 {
  return (
    <div style={{fontfamily: "Montserrat,sans-serif",
    background: "#f3f5fa",
    backgroundSize:" 150% 150%",
    animation: "backgroundAnimation 10s ease infinite",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    margin: "0"}}>
        <Navbar />
            <main className="profile">
          <div className="profile-bg"></div>
          <section className="container">
            <aside className="profile-image" style={{backgroundImage: `url("/images/${employee.photopath.split('\\').pop()}")`}}> 
            </aside>
            <section className="profile-info">
              <h1 className="first-name" style={{visibility:'hidden'}}>1</h1>
              <h1 className="second-name" style={{visibility:'hidden'}}>2</h1>
              <h2>{employee.fname} {employee.lname}</h2>
              <p style={{visibility:'hidden'}}>
                hello hello, hello hello, hello hello  hello hello hello hellohello hellohello hellohello hellohello hellohello hellohello hellohello hellohello hello
              </p>
              <ul style={{listStyleType:'none'}}>
                <li>Department: {employee.d.name}</li>
                  <li>Title: {employee.title}</li>
                  <li>Email: {employee.mail}</li>
                </ul>

              <aside className="social-media-icons ">
                <Link to='/view'><i className="fa fa-chevron-left" style={{ fontSize: '2vw'}}></i></Link>
                <Link to='/delete' state={employee.id}><i className="fa fa-trash" style={{ fontSize: '2vw'}}></i></Link>
                <Link to='/update' state={employee}><i className="fa fa-pencil-square-o" style={{ fontSize: '2vw' }}></i></Link>
              </aside>
            </section>
          </section>
          <section className="statistics" style={{visibility:'hidden'}} >
            <button className="icon arrow left"></button>
            <button className="icon arrow right"></button>
            <p><strong>29</strong> Followers</p>
            <p><strong>184</strong> Following</p>
            <p><strong>6</strong> Likes</p>
          </section>
          <button className="icon close"></button>
        </main>
      </div>
  );
 }
};

export default Profile;
