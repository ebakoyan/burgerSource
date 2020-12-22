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
        cheese.push(<Cheese/>)
    }
    for(let i=0;i<props.Count.Bacon;i++){
        bacon.push(<Bacon />)
    }
    for(let i=0;i<props.Count.Meat;i++){
        meat.push(<Meat/>)
    }
    for(let i=0;i<props.Count.Salad;i++){
        salad.push(<Salad/>)
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