// import s from './BurgerControl.module.css'

const BurgerControl = (props) => {
    // function add(){
    //     let myNewState=props.count;
    //     myNewState.Salad=2;
    //     props.setMyState(myNewState)
    // }

    return (
        <div>
            <button onClick = {(Salad)=>props.add}>+</button>
        </div>
    )    
}
export default BurgerControl