import React from 'react';

import caret from './images/caret.svg';


export const ProductDesc = ({ name, description, rating, features, shade }) => (
	<section className=" product__disc">
		<h2>{name}</h2>
		<p className="description">{description}</p>
		<figure>
			<img src={rating} alt="Product Rating" />
			<img src={caret} alt="View All Ratings" />
		</figure>
		<section className=" product__disc">
			<div className="productdis__list">
				<h3>Benefits</h3>
				<p>{features.benefits}</p>
			</div>
			<div className="productdis__list">
				<h4>Finish</h4>
				<p>{features.finish}</p>
			</div>
			<div className="productdis__list">
				<h4>Coverage</h4>
				<p>{features.coverage}</p>
			</div>
			<div className="productdis__list">
				<h4>Key Ingredients</h4>
				<p>
					{features.keyIngredients} <a href="http://www.clinique.com">More</a>
				</p>
			</div>
		</section>
		<section className="shade__name">
			<span>{shade.name}</span>
			<div style={{ background: shade.color }}></div>
		</section>
	</section>
);
