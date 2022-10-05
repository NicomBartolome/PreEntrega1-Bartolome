import Item from "../Item/Item"

const ItemList= ({items}) => {

    const ProductosTrans = items.map(productoItem => <Item item={productoItem}></Item>)

    return(
        <div class='ItemList'>{ProductosTrans}</div>
        )
}

export default ItemList