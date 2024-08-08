import React, { useState, useEffect } from 'react'
import carticon from '../icons/icon-add-to-cart.svg'
import increseicon from '../icons/icon-increment-quantity.svg'
import decreseicon from '../icons/icon-decrement-quantity.svg'
import { addtocart, increquantity, decrequantity } from '../slices&store/Cart-slice';
import { useDispatch, useSelector } from 'react-redux';
function Desertcompnent(props) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const findproduct = cart.find(pro => pro.id === props.des.id)
    const [clicked, setclicked] = useState(!!findproduct)
    const [quantity, setquantity] = useState(findproduct ? findproduct.quantity : 1)

    useEffect(() => {
        if (findproduct){
            setclicked(true)
            setquantity(findproduct.quantity)
        }
        else{
            setclicked(false)
        }
    },[findproduct])

    const handleclick = (pro) => {
        dispatch(addtocart(pro))
    }

    const handleDecrement = () => {
        dispatch(decrequantity(props.des));
        if (quantity === 1) {
            setclicked(false);
        }
        setquantity(quantity - 1);
    };

    const handleincrement = () => {
        dispatch(increquantity(props.des));
        setquantity(quantity + 1);
    };

    return (
        <div className='desert'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.des.image.desktop} className="card-img-top " alt="desert" />
                {clicked ?
                    <button className='clikedbtn rounded-pill ' >
                        <img src={increseicon} className='incre rounded-pill' onClick={() => handleincrement()} alt="" />
                        <p className='col-3'>{quantity}</p>
                        <img src={decreseicon} alt="" className='decre rounded-pill' onClick={() => handleDecrement()} />
                    </button>
                    : <button className='addtocartbtn rounded-pill' onClick={() => handleclick(props.des)}><img src={carticon} alt="" className=''/> Add To Cart</button>
                }
                <div className="card-body">
                    <p className="card-text name">{props.des.name}</p>
                    <h5 className="card-title category">{props.des.category}</h5>
                    <h6 className="card-title price">${props.des.price}</h6>
                </div>
            </div>
        </div>
    )
}

export default Desertcompnent
