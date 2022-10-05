import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
    return(
        <div key={item.id} class="Item" >
            <h2>{item.title}</h2>
            <img src={item.pictureURL}></img>
            <h3>{item.price}</h3>
            <Link to={`/item/${item.id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item