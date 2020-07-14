import React, { useState, useEffect } from 'react';
import '../Style/MyWork.css';

function MyWork() {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState('Loading');
  
  const getData = async () => {
    await fetch (`http://localhost:3000/`)
      .then(res => res.json())
      .then(res => setData(res))
  }
  useEffect(()=> {
    getData()
  },[]);

  console.log(data)
  return (
    <div className="my-work-wrapper">
      {data.length === 0 ? loading 
      :
      data.map(item => 
        <div className="my-work">
          <div className="my-work-title">
            <h1>{item.title}</h1>
            <h4>{item.describtion}</h4>
          </div>
          <div className="my-work-img">
            <img src={item.picture} />
          </div>
        </div>
        
      )
      }
    </div>
  );
}

export default MyWork;