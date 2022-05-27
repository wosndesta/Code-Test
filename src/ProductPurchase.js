import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';
import './styles/product.scss'

export const ProductPurchase = ({ price }) => (
	<section className="decrease__qui">
		<div className = 'quantity__container'>
			<h3>Quantity </h3>
			<div className="quantity__number">
				<img src={minus} alt="Decrease Quantity" />{" "}
				<div className="num__one">1 </div>
				<img src={plus} alt="Increase Quantity" />
			</div>
		</div>
		<div className = 'purchase__arrow'>
			One Time Purchase <img src={caret} alt="Select Frequency" />
		</div>
		<div className = 'purchase__price'>{price}</div>
		<button name="AddToBag">Add To Bag</button>
	</section>
);