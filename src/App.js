import React from "react"
import Burger from './Burger/Burger'
import s from './app.module.css'
import BurgerControl from './BurgerControl/BurgerControl'


class App extends React.Component{
  constructor(props) {
    super(props);
    if(localStorage.getItem('state')!==null){
      this.state=JSON.parse( localStorage.getItem('state'))
    }
    else{
      this.state = {
        list:{
          Salad: 0,
          Bacon: 0,
          Meat: 0,
          Cheese: 0,
        },
        type:["Salad","Bacon","Meat","Cheese"]
      };
  }
  }
  add = (item)=>{
    const oldItem = this.state.list[item]
    const updateItem=oldItem+1;
    const updateStateItem ={
      ...this.state.list
    }
    updateStateItem[item]=updateItem;
    this.setState({list: updateStateItem},()=>{
      localStorage.setItem("state",JSON.stringify(this.state))
    })
  }
  render(){
    return(
      <div>
        {/* <div className={s.control}>
          <button className = "btn btn-success" onClick={()=> this.add('Salad')}>Add Salad</button>
          <button className = "btn btn-success" onClick={()=> this.add('Bacon')}>Add Bacon</button>
          <button className = "btn btn-success" onClick={()=> this.add('Meat')}>Add Meat</button>
          <button className = "btn btn-success" onClick={()=> this.add('Cheese')}>Add Cheese</button>
        
        </div> */}
        <BurgerControl type={this.state.type} add={(type)=> this.add(type)}/>
        <Burger Count = {this.state.list}/>
      </div>
   )
  }
}

export default App;
