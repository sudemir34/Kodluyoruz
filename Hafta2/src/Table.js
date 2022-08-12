import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Films from './Films';

const Table = () => {
  const [api, setApi] = useState (null);
 const [search, setSearch] =  useState([])

   const getData = async () => {
   const res =  axios.get ('https://swapi.dev/api/people').then (res => {
      setApi (res.data.results);
    });
  }
const handleClick = (i) => {
  setApi(
    api.filter((item,index) => {
      if(index !==i ){
        return item
      }
    }, ...api)
  )
}

useEffect(() => {
  getData()
},[])
  return (
    <div className="table">
       {api ? ( <div>
            <div className="container">
            <input
              type="text"
              name="name"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <select onChange={(e) => setSearch(e.target.value)}>
                <option value="">All</option>
                <option value="Male">male</option>
                <option value="Female">female</option>
                <option value="N/A">n/a</option>
            </select>
            </div>

            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Height</th>
                  <th>Gender</th>
                  <th>Films</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {api.filter((value) => {
                    if(search == ""){
                      return value;
                    }
                    else if(
                      value.name.toLowerCase().includes(search.toLowerCase())
                    ){
                      return value;
                    }
                    else if(
                      value.gender.toLowerCase() === search.toLowerCase()
                    )
                    {
                      return value
                      }
                }) 
                .map ((run, index) => (
                  <tr className="active-row" key={index}>
                    <td>{run.name}</td>
                    <td>{run.height}</td>
                    <td>{run.gender}</td>
                    <td>{run.films.map((url, index) => (
                      <Films url={url} key={index}></Films>
                    ))}</td>
                    <td>
                      <button style={{backgroundColor: 'transparent', border: 'none'}} id='delete-button'
                          onClick={() => handleClick(index)}>
                        <img
                        
                          src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                        />
                      </button>
                      {' '}{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
       </div>
       ) : 'Loading...'}
    </div>
  );
};
export default Table;
