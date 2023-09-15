import { useState } from "react"
import { Link } from "react-router-dom"
import "../Tudo/index.css"
import imagem from "../../public/lista.png"
export default function Home (){
/*const [ count, setCount] = useState(0)
if(count == -1){
    setCount(0)
}
if (count == 11){
    setCount(10) 
}*/

const[name,setName]= useState()

     return(
        <div>
            <h1>Home</h1>
            <img className="img" src={imagem}></img>
            <br></br>
            <Link className="link" to="/tudo">Lista de Produtos</Link>

            {/* <p>{count}</p>
            <button onClick={() => { setCount(count + 1)} }>+</button>
            <button onClick={() => { setCount(count - 1)}}>-</button>
            <button onClick={() => { setCount(0)}}>Reset</button>*/}

        

        </div>
     )
}