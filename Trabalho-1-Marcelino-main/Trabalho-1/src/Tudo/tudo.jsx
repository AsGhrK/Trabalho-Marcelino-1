import {useState} from "react"
import "./index.css"
import { Link } from "react-router-dom"
export default function Tudo (){

    const [produto , setProduto] = useState("")
    const [preco , setPreco] = useState("")
    const [id , setId] = useState(1)
    const [lista , setLista] = useState([])

    const salvar = (e) => {
        e.preventDefault(); setLista([...lista, { produto:produto , preco:preco, id:id}])  
      setId( id +  1)
    }
    
 const removeProduto = (id) => {
    const novaLista = lista.filter((prod) => prod.id !== id);
    setLista(novaLista);
  };

  return (
    <div className="container">
      <h1 style={{ color: "#007bff" }}>Lista de Produtos</h1>
      <form onSubmit={salvar}>
        <h2>Nome: <input value={produto} onChange={(e) => setProduto(e.target.value)} /></h2>
        <h2>Preço: <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} /></h2>
        <button style={{ backgroundColor: "#007bff", color: "#fff" }}>ADD</button>
      </form>
      {lista.map((prod) => (
        <div className="produtos" key={prod.id}>
          <p>Nome: {prod.produto}, Preço: {prod.preco}, Id: {prod.id}</p>
          <button onClick={() => removeProduto(prod.id)} style={{ backgroundColor: "#d9534f", color: "#fff" }}>Remover</button>
        </div>
      ))}
    </div>
  );
}