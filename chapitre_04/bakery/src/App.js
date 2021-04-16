
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button.jsx';
import Add from './components/Add.jsx';
import List from './components/List';
import Pay from './components/Pay';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      activeTab: 'Add',
      items: []
    }

    this.changeActiveTabAdd = this.changeActiveTabAdd.bind(this)
    this.changeActiveTabList = this.changeActiveTabList.bind(this)
    this.changeActiveTabPay = this.changeActiveTabPay.bind(this)
    
  }

  changeActiveTabAdd(){
    this.setState({
      activeTab: 'Add'
    })
  }

  changeActiveTabList(){
    this.setState({
      activeTab: 'List'
    })
  }

  changeActiveTabPay(){
    this.setState({
      activeTab: 'Pay'
    })
  }

  renderAdd(){
    return(
      <Add></Add>
    )
  }

  renderList(){
    if(){

      return(
        <List></List>
        )
    }
  }

  renderPay(){
    return(
      <Pay></Pay>
    )
  }

  render(){
    return(
      <div>

        <Button isSelected={this.state.activeTab === 'Add' ? "btn btn-primary": "btn btn-light"} onClickButton={this.changeActiveTabAdd}>Add</Button>

        <Button isSelected={this.state.activeTab === 'List' ? "btn btn-primary": "btn btn-light"} onClickButton={this.changeActiveTabList}>List</Button>

        <Button  isSelected={this.state.activeTab === 'Pay' ? "btn btn-primary": "btn btn-light"} onClickButton={this.changeActiveTabPay}>Pay</Button>

      </div>
    )
  }
}

export default App;
