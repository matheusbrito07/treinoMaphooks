import { useEffect, useState } from "react"


export default function Lista (){

const [lista, setLista] = useState([
  {id:0, text:"Criar Lista"}, 
  {id:1, text:"Renderizar Lista"}, 
  {id:2, text:"Adicionar a Lista"}
])
const [newText, setnewText] = useState({id:lista.length})

console.log(newText)

const handleChange = ({target}) => {
  const {name, value} = target
  setnewText({...newText,[name]:value})
}
const handleClick = () => {
  setLista([...lista, newText])
  
}
useEffect(()=>{
  setnewText({id:lista.length})
},[lista])


const deleteItem = () =>{
 
}

  return(
    <div className="main">
    <h1>Lista de Tarefas</h1>
    <div>
      <ol>
        {lista.map(item => 
            <li>  
              {item.text}
                <button  id="excluirItem" type="submit">Excluir</button>
                <hr/>
            </li>
        )}
      </ol>
    </div>

    <div className="addTarefa">
        <label htmlFor="adicionarTarefa"></label>
        <input  onChange={handleChange} name="text" type="text" />
        <button onClick={handleClick} name="adicionarItem">Adicionar</button>
    </div>
    
      </div>
  )
}
