import Bacon from './Bacon/Bacon'
import BurgerTop from './BurgerTop/BurgerTop'
import Cheese from './Cheese/Cheese'
import BurgerBottom from './BurgerBottom/BurgerBottom'
import Meat from './Meat/Meat'
import Salad from './Salad/Salad'


const Burger = props =>{
    let cheese = [];
    let bacon = [];
    let meat = [];
    let salad = [];
    for(let i=0;i<props.Count.Cheese;i++){
        cheese.push(<Cheese key={i}/>)
    }
    for(let i=0;i<props.Count.Bacon;i++){
        bacon.push(<Bacon key = {i}/>)
    }
    for(let i=0;i<props.Count.Meat;i++){
        meat.push(<Meat key={i}/>)
    }
    for(let i=0;i<props.Count.Salad;i++){
        salad.push(<Salad key={i}/>)
    }
    return(
        <div style={{width: "600px",margin:"0 auto"}}>
            <BurgerTop/>
            {cheese}
            {bacon}
            {salad}
            {meat}
            <BurgerBottom/>
        </div>
    )
}
export default Burger