import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Table, Row, Col, Container} from 'reactstrap';

const Dene = () => {
  const [api, setApi] = useState (null);
  const [filterdata, setFilterData] = useState ([]);
  const [filterGender, setFilterGender] = useState([])
  const [query, setQuery] = useState ('');
  const [queryGender, setQueryGender] = useState('')

  useEffect (() => {
    axios.get ('https://swapi.dev/api/people').then (res => {
      setApi (res.data.results);
      setFilterData (res.data.results);
      setFilterGender(res.data.results.gender)
    });
  }, []);

  const notify = () => {
    toast.success ('Silme İşlemi Başarılı.', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      backgroundColor: 'success',
    });
  };

  const handlesearch = event => {
    const getSearch = event.target.value;
    setQuery (getSearch);
    // console.log(getSearch)
    if (getSearch.length > 0) {
      const searchData = api.filter (item =>
        item.name.toLowerCase ().includes (getSearch)
      );
      setApi (searchData);
    } else {
      setApi (filterdata);
    }
  };

  const onChangeComboBox = (e) => {
    const selectedId = e.target.value
   setQueryGender(selectedId)
   if(selectedId){
    const searchGender = api.filter((item) => item.gender.toLowerCase().includes(selectedId))
    setApi(searchGender)
   }
   else{
    setApi(filterGender)
   }
  }
  return (
    <div className="table">
      <ToastContainer />
       {api ? (
        <Container>
        <Row>
          <Col xs="12">
            <input
              type="text"
              name="name"
              placeholder="Search..."
              value={query}
              onChange={e => handlesearch (e)}
            />
            <select onChange={(e) => onChangeComboBox(e)} value={queryGender}>
                <option>male</option>
                <option>female</option>
                <option>n/a</option>
            </select>
            <Table striped>
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
                {api.map ((run, index) => (
                  <tr key={index}>
                    <td>{run.name}</td>
                    <td>{run.height}</td>
                    <td>{run.gender}</td>
                    <td>{run.films[0]}</td>
                    <td>
                      <button
                        style={{backgroundColor: 'transparent', border: 'none'}}
                      >
                        <img
                          onClick={notify}
                          src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                        />
                      </button>
                      {' '}{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

          </Col>
        </Row>
      </Container>
       ) : 'Loading...'}
    </div>
  );
};

export default Dene;
