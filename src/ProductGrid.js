import React from 'react';
import { ProductImage } from './ProductImage';


export const ProductGrid = ({
	heading,
	cta1,
	p1Name,
	p1Img,
	p1Price,
	p2Name,
	p2Img,
	p2Price,
	p3Name,
	p3Img,
	p3Price,
	p4Name,
	p4Img,
	p4Price,
}) => (
	<section>
		<h2 className='sub__head'>{heading}</h2>
		<div className="home__row">
			<div className="proimg">
				<div>
					<ProductImage image={p1Img} />
				</div>
				<div className="product__info">
					<h1 className="pro__info">{p1Name}</h1>
					<h4 className="pro__price">{p1Price}</h4>
					<button>{cta1}</button>
				</div>
			</div>
			<div className="proimg">
				<div>
					<ProductImage image={p2Img} />
				</div>
				<div className="product__info">
					<h1 className="pro__info">{p2Name}</h1>
					<h4 className="pro__price">{p2Price}</h4>
					<button>{cta1}</button>
				</div>
			</div>
			<div className="proimg">
				<div>
					<ProductImage image={p3Img} />
				</div>
				<div className="product__info">
					<h1 className="pro__info">{p3Name}</h1>
					<h4 className="pro__price">{p3Price}</h4>
					<button>{cta1}</button>
				</div>
			</div>
			<div className="proimg">
				<div>
					<ProductImage image={p4Img} />
				</div>
				<div className="product__info">
					<h1 className="pro__info">{p4Name}</h1>
					<h4 className="pro__price">{p4Price}</h4>
					<button >{cta1}</button>
				</div>
			</div>
		</div>
	</section>
);
