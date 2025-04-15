import React, { useEffect, useState } from 'react';
import CreateProjects from '../components/CreateProjects/Create'
import axios from 'axios';
import Loader from '../utlities/Loader/Loader';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make a GET request using axios
    axios.get('https://67a4623231d0d3a6b78625a6.mockapi.io/clientList')
      .then((response) => {
        setData(response.data); // Set the data state with the response data
        setLoading(false); // Set loading to false once data is received
        console.log(data);

      })
      .catch((error) => {
        setError(error.message); // Set error message in case of an error
        setLoading(false);
      });
  }, []); // Empty dependency array means the effect will run once when the component mounts

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='container pt-5 pb-5'>
      <div className="row">
        <div className="col-md-12">
          <h1 className='pb-5 pt-1'>Client List</h1>
          <div className="row">
            {
              data.map((list, indexKey) => (
                <div className="col-lg-12 pb-3" key={indexKey + 1}>
                  <div className="card p-4 pb-3 pt-3">
                    {/* <strong className='d-block'>Name: {list.id}</strong> */}
                    {/* <strong className='d-block'><img src={list.avatar} alt="User Image" /></strong> */}
                    {/* <strong className='d-block'>Date: {list.createdAt}</strong> */}
                    <strong className='d-block'>Name: {list.name}</strong>
                    <strong className='d-block'>Email: {list.email}</strong>
                    <strong className='d-block'>Message: {list.clientMessage}</strong>
                    <strong className='d-block'>{list.feedbackType}</strong>
                    {/* <strong className='d-block'>Age: {list?.age ?? 'NA'}</strong> */}
                    {/* <strong className='d-block'>Phone: {list.e_email || "No Email Found!"}</strong> */}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
