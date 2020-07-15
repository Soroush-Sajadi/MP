import React, { useState, useEffect } from 'react';
import '../Style/Gallery.css';

function Gallery({ title }) {
	const [ data, setData ] = useState([]);

	const getData = async () => {
		await fetch(`http://localhost:3000/images/${title}`)
			.then(res => res.json())
			.then(res => setData(res))

	}

	useEffect(() => {
		getData();
	},[])
	console.log(data)
  return (
    <div className="gallery-wrapper">
      Contacts
    </div>
  );
}

export default Gallery;