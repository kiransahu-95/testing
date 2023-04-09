// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import DataTable from './component/DataTable';
import { Route, Routes } from 'react-router-dom';
import Blog from './component/Blog';
import Navbar from './component/Navbar';
import Login from './component/Login';

const App = () => {
  const [tableData, setTableData] = useState([])
  console.log("first",tableData)
  return (
    <>
      {1 ?
        <>
          <Navbar tableData={tableData} setTableData={setTableData} />
          <Routes defaultpath='/'>
            <Route path="/" element={<DataTable tableData={tableData} setTableData={setTableData} />} />
            <Route path="/blog" element={<Blog />} />

          </Routes>
        </>
        :
        <Routes >
          <Route path="/login" element={<Login />} />
        </Routes>
      }
    </>
  );
}

export default App;
