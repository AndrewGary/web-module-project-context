import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// Componentss
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductProvider from './contexts/ProductContext';

function App() {
	// const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<ProductProvider>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				{/* <Products products={products} addItem={addItem} /> */}
				<Products addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</ProductProvider>
		</div>
	);
}

export default App;
