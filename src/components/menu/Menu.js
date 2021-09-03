import React from 'react'
import pizzaTypes from "./PizzaTypes.json";
import pastaTypes from "./PastaTypes.json";
import "./Menu.css"

const Menu = () => {
	return (
		<div className="menu">
			<div className="sheet">
				<h3>Pizza</h3>
				<ul id="pizzaList">
					{pizzaTypes["pizzaTypes"].map((pizza) => (
					<li className="menuLI">
						<div className="pizza">
							<strong>{pizza.name}</strong> <em>€{pizza.price}</em>
							<div className="toppings">{pizza.topping}</div>
						</div>
					</li>))}
				</ul>
				<h3>Pasta</h3>
				<ul id="pastaList">
					{pastaTypes["pastaTypes"].map((pasta) => (
					<li className="menuLI">
						<div className="pasta">
							<strong>{pasta.name}</strong> <em>€{pasta.price}</em>
							<div className="description">{pasta.description}</div>
						</div>
					</li>))}
				</ul>
			</div>	
		</div>
	)
}

export default Menu
