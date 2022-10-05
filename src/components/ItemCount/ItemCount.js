import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({initial,stock, onAdd}) =>{
    let [contador, funcionContador] = useState(parseInt(initial))
    
    const aumentar = () => {
        if(contador < parseInt(stock)){
            funcionContador(contador + 1)

        }
    }

    const disminuir = () => {
        if(contador > 0){
            funcionContador(contador - 1)
        }
    }

    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={aumentar}>+</button>
            <button onClick={disminuir}>-</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )}

export default ItemCount