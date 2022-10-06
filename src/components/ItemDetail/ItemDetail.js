import { useState,useEffect } from "react"
import { ObtenerProducto } from "../../AsyncMock"
import { useParams } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = () =>{

const onAdd = () => {
    console.log('Agregar al carrito')
}

const [pr, SetProduct] = useState({})
    const { productID }  = useParams()
    

    useEffect(() =>{
        ObtenerProducto(productID).then(prd => {SetProduct(prd) 
        })
    }, [])


    return(
        <div>
            <h1>Detalle de producto</h1>
            <h2>{pr.title}</h2>
            <img src={pr.pictureURL} />
            <h3>{pr.price}</h3>
            <br></br>
            <h3>Descripcion del producto</h3>
            <h4>{pr.description}</h4>
            <ItemCount initial='0' stock='50' onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail