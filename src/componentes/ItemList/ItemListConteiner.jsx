import Item from "./Item";



function ItemListConteiner() {
  return (
    <div>
        <h1>Mis productos</h1>
        <Item imgurl="./imagenes/calefon.jpeg"  title="producto 333" price= {200} />
        <Item title="producto 2" price= {300} />
        <Item title="producto 3" price= {400} />
       
    </div>
  )
}

export default ItemListConteiner