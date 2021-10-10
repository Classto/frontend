import { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

class Menu extends Component {
  render() {
    const categorys = JSON.parse(localStorage.getItem('categorys'))
    const menu = categorys.map((category) => 
      <li key={category}><Link to={category}><div>{category}</div></Link></li>
    )
    return(
      <div id="Menu">
        <div/>
        <ul>
          { menu }
          </ul>
      </div>
      )
  }
}

export default Menu;