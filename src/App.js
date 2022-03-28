//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useState,useEffect } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';


function App() {
  const initData = [
    { id: 1, title: "เงินเดือน", amount: 28000 },
    { id: 2, title: "ค่าอาหาร", amount: -8000 },
    { id: 3, title: "เงินพิเศษ", amount: 10000 },
    { id: 4, title: "ค่าบ้าน", amount: -10500 },
  ]
  const [items, setItems] = useState(initData)
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expanse = amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)*-1
    
    setReportIncome(income)
    setReportExpense(expanse)
  },[items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expanse : reportExpense
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
