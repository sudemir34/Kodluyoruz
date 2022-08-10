import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Loading = () => {
  const [post, setPost] = useState (null);
 useEffect(() => {
    axios.get ('https://swapi.dev/api/people').then (res => setPost ((res.data.results)))
 },[])
  return (
    <div>
      <h1>ReactApp</h1>
     {
        post ? (post.map ((run, index) => <div key={index}>{run.name}</div>)) : "Loading...."
     }
      <table>
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
             
                  <tr>
                    <td>sdsd</td>
                    <td>fsdfsdf</td>
                    <td>sdfsdf</td>
                    <td>sdfsdfsd</td>
                    
                  </tr>
          
              </tbody>
      </table>

    </div>
  );
};

export default Loading;
