function Pizza(props) {
  console.log(props.pizzaObj);
  // console.log(props.pizzaObj.name);
  return (<li className="pizza">
    <img src={props.pizzaObj?.photoName} alt={ props.pizzaObj?.name } className="avatar"/>
    <div>
      <h3>{ props.pizzaObj?.name }</h3>
      <p>{props.pizzaObj?.ingredients }</p>
    </div>
  </li>)
}

export default Pizza;