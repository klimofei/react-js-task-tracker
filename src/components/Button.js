import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({color, text, onclick}) => {
  
  // const onclick = () => {
  //     console.log("click")
  // }

  return (
    <div>
      <button onClick={onclick} style={{backgroundColor: color}} className="btn">{text}</button>
    </div>
  )
}

Button.defaultProps = {
  color: "steelblue",
  text: "Hi!"
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onclick: PropTypes.func
}

// Button.PropTypes = {
//   color: ReactPropTypes.text,
//   text: ReactPropTypes.text
// }

export default Button