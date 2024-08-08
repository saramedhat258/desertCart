import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '../styles/Modal.module.css'
import { clear } from '../slices&store/Cart-slice'
import confirmicon from '../icons/icon-order-confirmed.svg'
import * as cartActions from '../slices&store/Cart-slice';

console.log(cartActions); // Ensure `clear` is listed

function Modalcart(props) {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const calctotallprice = cart.reduce((acc, pro) => {
        acc += pro.price * pro.quantity
        return acc
    }, 0)
    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div className={`m-auto pt-3 ${style.confirm}`}>
                                <img src={confirmicon} alt="" />
                                <h1 className='mx-0 mt-3'>Order Confirmed</h1>
                                <p>We hope you enjoy your food!</p>
                            </div>
                            <div className={style.allpro}>
                                {cart.map(pro =>
                                (<div className='row justify-content-between'>
                                    <div className={`row col-9 mx-2 ${style.modalpro}`} key={props.keyid}>
                                        <img src={pro.image.thumbnail} className='col-3 rounded' alt="" />
                                        <div className={`col-9 row mb-0 ${style.name}`}><span>{pro.name}</span>
                                            <p className={`col-3 px-0 ${style.quntity}`}>{pro.quantity}x</p>
                                            <p className={`col-4 col-sm-5 px-0 ${style.price}`}>@ ${pro.price}</p>
                                        </div>
                                    </div>
                                    <p className={`col-2 ${style.priceq}`}>${pro.price * pro.quantity}</p>
                                    <hr />
                                </div>
                                ))}
                                <div className={`row justify-content-between ${style.ordertotal}`}>
                                    <p className={`${style.totaltext} col-7 mt-2 px-5`}>Order Total </p>
                                    <p className={`col-3 ${style.totalprice}`}>${calctotallprice}</p>
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={() => dispatch(clear())} className={`rounded-pill m-auto mb-3 ${style.neworder}`} data-bs-dismiss="modal" >start new order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modalcart