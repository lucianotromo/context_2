import Context from "../context/context"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const Pokemones = ()=> {
    const { data } = useContext(Context)
    const [seleccionado, setSeleccionado] = useState("")
    const navigate = useNavigate()

    const verDetalle = ()=> {
        navigate(`/pokemones/${seleccionado}`)
    }

    return (
        <main>
            <h1>Selecciona un Pokemon</h1>

            <select className="pkmn-select" onChange={(e)=> setSeleccionado(e.target.value)}>
                <option value="0">Seleccionar</option>
                {
                    data.map((pkmn)=> {
                        return (
                            <option key={pkmn.name} value={pkmn.name}>{pkmn.name}</option>
                        )
                    })
                }
            </select>

            <button className="btn" onClick={()=>verDetalle()}>Ver detalle</button>
        </main>
    )

}

export default Pokemones