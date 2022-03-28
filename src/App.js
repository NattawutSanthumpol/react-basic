//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';

function App() {
  const initData = [
    { id: 1, title: "เงินเดือน", amount: 28000 },
    { id: 2, title: "ค่าอาหาร", amount: -8000 },
    { id: 3, title: "เงินพิเศษ", amount: 10000 },
  ]
  const [items, setItems] = useState([])
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }
  return (
    <DataContext.Provider value={
      {
        income : 50000,
        expanse : -8000
      }
    }>
      <div className='container'>
        <h1>แอพบัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>

  )
}

export default App;
