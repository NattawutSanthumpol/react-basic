//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useState, useEffect, useReducer } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";


function App() {
  const initData = [
    { id: 1, title: "เงินเดือน", amount: 28000 },
    { id: 2, title: "ค่าอาหาร", amount: -8000 },
    { id: 3, title: "เงินพิเศษ", amount: 10000 },
    { id: 4, title: "ค่าบ้าน", amount: -10500 },
  ]
  const [items, setItems] = useState(initData)
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }
  useEffect(() => {
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0)
    const expanse = amounts.filter(element => element < 0).reduce((total, element) => total += element, 0) * -1

    setReportIncome(income)
    setReportExpense(expanse)
  }, [items, reportIncome, reportExpense])

  // reducer state
  // const [showReport, setShowReport] = useState(false)
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true)
  //     case "HIDE":
  //       return setShowReport(false)
  //   }
  //   // switch (action.type) {
  //   //   case "ADD":
  //   //     return state + action.payload
  //   //   case "SUB":
  //   //     return state - action.payload
  //   //   case "CLEAE":
  //   //     return 0
  //   // }
  // }
  // const [result, dispatch] = useReducer(reducer, showReport)
  return (
    <DataContext.Provider value={{ income: reportIncome, expanse: reportExpense }}>
      <div className='container'>
        <h1>แอพบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className='horizontal-menu'>
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path='/' element={<ReportComponent />}></Route>
              <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem} /><Transaction items={items} /></>}></Route>
            </Routes>
          </div>
        </Router>
        {/* {showReport && <ReportComponent />} */}

        {/* <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button> */}
      </div>
      {/* <div align="center">
        <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "ADD", payload: 1 })}>เพิ่ม</button>
        <button onClick={() => dispatch({ type: "SUB", payload: 1 })}>ลด</button>
        <button onClick={() => dispatch({ type: "CLEAE" })}>ล้าง</button>
      </div> */}
    </DataContext.Provider>


  )
}

export default App;
