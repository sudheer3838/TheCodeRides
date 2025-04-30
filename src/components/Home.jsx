import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setClients, setLoading, setError } from '../redux/clientSlice';
import Loader from '../utlities/Loader/Loader';
const BASE_URL = process.env.REACT_APP_API_BASE_URL
const Home = () => {
  const dispatch = useDispatch();
  const { clientData, loading, error } = useSelector((state) => state.clients);
  useEffect(() => {
    dispatch(setLoading());
    axios.get('https://67a4623231d0d3a6b78625a6.mockapi.io/clientList')
      .then(response => {
        dispatch(setClients(response.data));
      })
      .catch(error => {
        dispatch(setError(error.message));
      });
  }, [dispatch]);
  if (loading) return <Loader />;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className='container pt-5 pb-5'>
      <div className="row">
        <div className="col-md-12">
          <h1 className='pb-5 pt-1'>Client List</h1>
          <div className="row">
            {
              clientData.map((list, indexKey) => (
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
