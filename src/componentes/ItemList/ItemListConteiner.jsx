import Item from "./Item";

function ItemListConteiner() {
  return (
    <div>
        <h1>Mis productos</h1>
        <Item img="https://articulo.mercadolibre.com.ar/MLA-928094415-remeras-venum-clasica-serpiente-rojo-frespalda-mma-gym-_JM#reco_item_pos=1&reco_backend=machinalis-seller-items-pdp&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=0e8a6723-86d3-40e3-b3a3-8794901ebcb5"  title="producto 333" price= {200} />
        <Item title="producto 2" price= {300} />
        <Item title="producto 3" price= {400} />
       
    </div>
  )
}

export default ItemListConteiner