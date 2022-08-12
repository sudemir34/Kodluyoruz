import React, { useEffect, useState } from 'react'
import axios from "axios";
const Films = ({url}) => {
    const [title, setTitle] = useState([])
    const fetchFilms = async(url) => {
        const res = await axios.get(url)
        const result = await res.data;
        return result;
    }
    useEffect(() => {
        const showFilms = async(url) => {
            const fetchData = await fetchFilms(url);
            setTitle(fetchData.title)
        }
        showFilms(url)
    },[])
  return (  
    <div>
    <label>{title}</label>
    </div>
  )
}

export default Films
