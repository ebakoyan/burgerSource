import s from './BurgerControl.module.css'

const BurgerControl = (props) => {
    // function add(){
    //     let myNewState=props.count;
    //     myNewState.Salad=2;
    //     props.setMyState(myNewState)
    // }
    // let buttonList=props.type.forEach((type,i) => {
    //     <button 
    //         key={"a"+i}
    //         className = "btn btn-success" 
    //         onClick= {()=>props.add(type)}>Add {`${type}`}
    //     </button>
    // });;
    let buttonList=[]
    for(let i=0;i<props.type.length;i++){
        buttonList.push(
            <button 
                key={"a"+i}
                className = "btn btn-success" 
                onClick= {()=>props.add(props.type[i])}>Add {`${props.type[i]}`}
            </button>
        )
    }
    return (
        <div className={s.control}>
            {buttonList}
        </div>
    )    
}
export default BurgerControl