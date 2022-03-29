import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportComponent.css'
import NumberFormat from 'react-number-format';

const ReportComponent = () => {
     const { income, expanse } = useContext(DataContext)
     const numFormat = (num) => {
          return <NumberFormat
               value={(num)}
               displayType={'text'}
               thousandSeparator={true}
               prefix={'฿'}
               decimalScale={2}
               fixedDecimalScale={true} />
     }

     return (
          <div>
               <h4>ยอดคงเหลือ (บาท)</h4>
               <h1>{numFormat(income - expanse)}</h1>
               <div className="report-container">
                    <div>
                         <h4>รายได้ทั้งหมด</h4>
                         <p className="report plus">{numFormat(income)}</p>
                    </div>
                    <div>
                         <h4>รายจ่ายทั้งหมด</h4>
                         <p className="report minus">{numFormat(expanse)}</p>
                    </div>
               </div>

               {/* <DataContext.Consumer>
                    {context=><p>รายรับ : {context.income} รายจ่าย : {context.expense}</p>}
               </DataContext.Consumer> */}
          </div>
     )
}

export default ReportComponent