import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Delete = () =>{
    const [requestComplete, setRequestComplete] = useState(false);
    const location = useLocation();
    var id = location.state;
    const navigate = useNavigate();



  useEffect(() => {
    axios.put(`http://localhost:9191/emp/Delete?empId=${id}`,
    //   params:{
    //     empId:id,
    //   }
    )
      .then(response => {
        setRequestComplete(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  if (requestComplete) {
    navigate('/view');
  }

    
}

export default Delete;