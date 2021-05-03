
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button.jsx';
import Add from './components/Add.jsx';
import List from './components/List';
import Pay from './components/Pay';
import Card from './components/Card';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      activeTab: 'Add',
      items: [],
    }

    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
    this.addItem = this.addItem.bind(this)
   
    
  }

  selectAdd(){
    this.setState({
      activeTab: 'Add'
    })
  }

  selectList(){
    this.setState({
      activeTab: 'List'
    })
  }

  selectPay(){
    this.setState({
      activeTab: 'Pay'
    })
  }

  renderAdd(){
    if(this.state.activeTab === 'Add'){

      return(
        <Add onClickButton={this.addItem}></Add>
      )
    }
  }

  renderList(){
    if(this.state.activeTab === 'List'){
      return(
        <List items={this.state.items}></List>
        )
    }
  }

  renderPay(){
    if(this.state.activeTab === 'Pay'){
      return(
        <Pay items={this.state.items}></Pay>
      )
    }
  }

  addItem(n, p){
    this.setState({
      items: [...this.state.items, { name:n, price:p }]
    })
    console.log(this.state.items);
  }
  
  
  

  render(){
    console.log();
    return(
      <div>

        <Button isSelected={this.state.activeTab === 'Add' ? "btn btn-primary": "btn btn-light"} onClickButton={this.selectAdd}>Add</Button>

        <Button isSelected={this.state.activeTab === 'List' ? "btn btn-primary": "btn btn-light"} onClickButton={this.selectList}>List</Button>

        <Button  isSelected={this.state.activeTab === 'Pay' ? "btn btn-primary": "btn btn-light"} onClickButton={this.selectPay}>Pay</Button>
        
        {/*test composant Card */}
        <Card productName= "croissant" price = {3} onClick={()=>{}} ></Card>
        {this.renderAdd()}
        {this.renderList()}
        {this.renderPay()}

      </div>
    )
  }
}

export default App;
