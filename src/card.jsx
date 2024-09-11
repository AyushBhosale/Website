function Card(props){
    return(
        <div className="card">
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        </div>
    )
}
export default Card