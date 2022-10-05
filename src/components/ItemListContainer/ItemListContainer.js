import './ItemListContainer.css';
import { ObtenerProductos } from '../../AsyncMock';
import { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {

    const [productos, Products] = useState([])
    
    const { categoryName } = useParams()

    useEffect(() => {
        ObtenerProductos(categoryName).then(res =>{
            Products(res)
            })
    }, [categoryName])

    return(

        <div class="SubtituloCuerpo">
            <h2>{greeting}</h2>
            <h1>{categoryName}</h1>
            <ItemList items={productos}></ItemList>
        </div>
    )
}

export default ItemListContainer