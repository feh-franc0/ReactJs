import React, { useState, useEffect } from "react";


function Counter(props){

    const [count, setCount] = useState(props.count)

    
    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count")));

        return () => {
            console.log("Não tem mais contador")
        }
    },[])

    useEffect(() => {
        document.title = count
        localStorage.setItem("count", count)
    },[count]);

    function add() {

        setCount(count + 1)
 
    }



    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add} >Add</button>
        </div>
    )

}

//! - 

// class Counter extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = { count: 0 }
//         this.add = this.add.bind(this)
//     }

//     add() {

//         this.setState((state)=>{return {count: state.count + 1} },() => {
//             console.log(this.state)
//         })
//     }

//     componentDidMount(){
//         document.title = this.state.count
//         this.setState(JSON.parse(localStorage.getItem("state")))
//     }

//     componentDidUpdate() {
//         document.title = this.state.count
        
//         localStorage.setItem("state", JSON.stringify(this.state))
//     }

//     componentWillUnmount(){
//         console.log("O Unmount foi chamado")
//     }

//     // shouldComponentUpdate(){
//     //     return false;
//     // }

//     render() {
//         return (<div>
//             <h1>Counter: {this.state.count}</h1>
//             <button onClick={this.add} >Add</button>
//         </div>)
//     }

// }

export default Counter;