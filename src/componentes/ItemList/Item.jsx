
function Item(props) {
  return (
    <div>
       <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.price}</p>
    </div>
  )
}

export default Item