import { Component } from 'react';
import Schedule from './editor/schedule';
import Panel from './editor/panel';
import Menu from './editor/menu';
import './editor.css';

class Editor extends Component {
  componentDidMount() {
    document.getElementById('category').addEventListener('click', (event) => {
      
    });
  }

  render() {
    const { params } = this.props.match
    const meetings = JSON.parse(window.localStorage.getItem("meetings"))[params['category']]
    return (
      <div>
        <hr id="ct_hr"></hr>
        <div id="sch_div">
          <Schedule meetings={ meetings }/>
        </div>
        {/* <button id="new_schedule" onClick={ () => {display = true} }>
          <i id="add_btn_plus" className="fas fa-plus"></i>
          <div></div>
        </button> */}
        <Panel/>
        <div id="category">
          <p>{ params['category']}</p>
          <i className="fas fa-chevron-down fa-2x"></i>

          <Menu/>
        </div>
      </div>
    );
  }
}

export default Editor;
