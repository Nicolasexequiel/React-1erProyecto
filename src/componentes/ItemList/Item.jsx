import "./item.css"
function Item(props) {
  return (
    <div>
      <div className="card">
        <div className="card-img" >
          <img src={props.imgurl} alt={props.title} />
        </div>
        <div className="" >
          <h3>{props.title}</h3>
          <p>{props.price}</p>
        </div>

      </div>
    </div>
  )
}

export default Item