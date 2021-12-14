import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
  
  let number = 0
  
  const addNum = (num) => {
    num = num + 1
    return num
  }
  
  const onclick = () => {
    console.log("click")
}
  return (
    <header className="header">
      <h1>{title}</h1>
      {
        location.pathname === '/'
        && 
        <Button 
          color={showAdd ? "Red" : "Green"} 
          text={showAdd ? 'Close' : 'Add' } 
          onclick={onAdd
        }></Button>
      }
      
      {/* <h1 style={{color: "red"}}>Task tracker {props.title}</h1>
      <h1 style={headingStyler}>Task tracker {props.title}</h1> */}

    </header>
  )
}

const headingStyle = {
  color: "green"
}

Header.defaultProps = {
  title: "Default props"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
