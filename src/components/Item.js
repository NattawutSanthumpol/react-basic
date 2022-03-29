import PropTypes from 'prop-types';
import './Item.css'
import NumberFormat from 'react-number-format';

const Item = (props) => {
  const { title, amount } = props
  const status = amount < 0 ? "expense" : "income"
  const symbol = amount < 0 ? "-" : "+"
  const numFormat = (num) => {
    return <NumberFormat
      value={Math.abs(num)}
      displayType={'text'}
      thousandSeparator={true}
      decimalScale={2}
      fixedDecimalScale={true} />
  }

  return (
    <li className={status}>{title} <span>{symbol}{numFormat(amount)}</span></li>
  )
}

//กำหนด รูปแบบข้อมูล
Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Item