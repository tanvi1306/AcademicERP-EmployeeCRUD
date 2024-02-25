import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EmpCard.css';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const EmpCard = () => {
  const [employees, setEmployees] = useState([]);
const [requestComplete,setRequestComplete] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9191/emp/ViewAll')
      .then(response => {
        setEmployees(response.data);
        console.log(response.data);
        setRequestComplete(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if(requestComplete)
  {
  return (
    <section id="team" className="pb-5">
        <Navbar />
      <div >
        <h5 className="section-title h1">OUR TEAM</h5>
        <div className="row">
          {employees.map(employee => (
            <div className="col-xs-12 col-sm-6 col-md-4" key={employee.id}>
              <div className="image-flip">
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className=" img-fluid" src={"/images/"+(((employee.photopath).split("\\")).pop())} alt="card" /></p>
                        <h4 className="card-title">{employee.fname} {employee.lname}</h4>
                        <br /><br />
                        <Link to='/profile' state={employee.id}><i className="fa fa-id-card" style={{ fontSize: '2vw', margin: '0.5vw', color: '#212529' }}></i></Link>
                        <Link to='/delete' state={employee.id}><i className="fa fa-trash" style={{ fontSize: '2vw', margin: '0.5vw', color: '#212529' }}></i></Link>
                        <Link to='/update' state={employee}><i className="fa fa-pencil-square-o" style={{ fontSize: '2vw', margin: '0.5vw', color: '#212529' }}></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  }
};

export default EmpCard;
