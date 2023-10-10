import { useState } from "react"
import { Button} from "../styled"


export default function Component3(){

    // guarda dados do txtArea
    const [tarefa, setTarefa] = useState('')

    // use state = hook do react (gancho)

    const [todas, setTodas] = useState([])
    
    const anotarTarefa = (e)=>{
        // pega o valor que o usruario esta fornecendo (grava no useState e retorna)
        setTarefa([e.target.value])
    }

    const inserirTarefa = ()=>{
        // guarda as tarefas que estao chegando mais as que ja tinha
        setTodas([...todas, tarefa])
        setTarefa('')
        
    }

    return(
        <div>
            <h2>Componente 3</h2>
            <textarea onChange={anotarTarefa} value={tarefa}></textarea> <br />
            <Button $isOn={tarefa} onClick={inserirTarefa}>Anotar Tarefa</Button>
            <ul>
                {
                    // tar, i  = tarefa e index
                    todas.map((tar, i)=> 
                    // i da um cod interno para cada li
                    // tar retorna a tarefa de acordo com o index
                    <li key={i}>{tar}</li>)
                }
            </ul>
        </div>
    )
}