import React, { useState, useEffect } from 'react';
import '../Style/Gallery.css';

function Gallery({ title }) {
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState('Loading')

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
		<>
			{data.length === 0 ? loading 
			:
			<div class = "wrapper">
				{data.map((item, i)=> 
    				<img src={item.picture}/>
				)}
			</div>
			}
		</>
  );
}

export default Gallery;

