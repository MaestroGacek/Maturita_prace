import React, { useState } from 'react'
import { ProduktyList } from '../f/ProduktyList'
import '../styl/Produkty.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Produkty() {
    const [cart, setCart] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (item) => {
        const newCart = { ...cart };
        if (!newCart[item.name]) {
            newCart[item.name] = {
                count: 0,
                price: item.price
            };
        }
        newCart[item.name].count += 1;
        setCart(newCart);
        setTotalPrice(totalPrice + item.price);
    };

    const removeFromCart = (item) => {
        const newCart = { ...cart };
        if (newCart[item.name] && newCart[item.name].count > 0) {
            newCart[item.name].count -= 1;
            setTotalPrice(totalPrice - item.price);
            if (newCart[item.name].count === 0) {
                delete newCart[item.name];
            }
            setCart(newCart);
        }
    };

    const getTotalItems = () => {
        return Object.values(cart).reduce((total, item) => total + item.count, 0);
    };

    return (
        <div className='produkty'>
            {getTotalItems() > 0 && (
                <div className='produktyIcon'>
                    <div className="cart-summary">
                        <ShoppingCartIcon/>
                        <span className="cart-total">
                            {getTotalItems()} ks ({totalPrice} Kč)
                        </span>
                    </div>
                    <div className="cart-items">
                        {Object.entries(cart).map(([name, details]) => (
                            <div key={name} className="cart-item">
                                <span>{name}</span>
                                <div className="cart-item-controls">
                                    <RemoveIcon onClick={() => removeFromCart(ProduktyList.find(item => item.name === name))} />
                                    <span>{details.count}</span>
                                    <AddIcon onClick={() => addToCart(ProduktyList.find(item => item.name === name))} />
                                    <button onClick={() => history.push('/objednat')}>Objednat</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <h1 className='produktyTitle'>Naše produkty</h1>
            <div className='produktyList'>
                {ProduktyList.map((item, key) => (
                    <div className='produktyItem' key={key}>
                        <div style={{ backgroundImage: `url(${item.image})` }}></div>
                        <h3>{item.name}</h3>
                        <p>{item.price} Kč</p>
                        <div className="item-controls">
                            {cart[item.name] && (
                                <>
                                    <RemoveIcon onClick={() => removeFromCart(item)} />
                                    <span>{cart[item.name].count}</span>
                                </>
                            )}
                            <button onClick={() => addToCart(item)}>
                                <AddIcon /> Koupit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Produkty
/*Když kliknu na "Koupit", zavolá se addToCart.
Položka se přidá do košíku nebo se zvýší její počet pak se 
aktualizuje se celková cena.
U položky se zobrazí ovládací prvky pro přidání/odebrání.
Košík se zobrazí, jakmile obsahuje alespoň jednu položku.
Když odeberu všechny položky, zmizí z košíku.
Když je košík prázdný, celý panel košíku se skryje.*/