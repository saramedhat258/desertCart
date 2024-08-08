import React from 'react'
import style from '../styles/Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deletefromcart } from '../slices&store/Cart-slice'
import deleteicon from '../icons/icon-remove-item.svg'
import emptycarticon from '../icons/illustration-empty-cart.svg'
import Modalcart from './Modalcart'
import carbonicon from '../icons/icon-carbon-neutral.svg'
function Cart() {
    const cartproducts = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const calcpriceQ = (pro) => {
        return pro.price * pro.quantity
    }
    const calctotallprice = cartproducts.reduce((acc, pro) => {
        acc += pro.price * pro.quantity
        return acc
    }, 0)

    return (
        <div className={style.cart}>
            <h3 className={style.header}>{`Your Cart(${cartproducts.length})`}</h3>
            <div className={style.pro}>
                {
                    cartproducts.length === 0 ?
                        <div>
                            <img className={style.emptycart} src={emptycarticon} alt="" />
                            <p className={style.emptymsg}>Your added items will appear here</p>
                        </div>
                        : <div>
                            {
                                cartproducts.map(pro => (
                                    <div key={pro.id}>
                                        <p className={style.namepro}>{pro.name}</p>
                                        <button onClick={() => dispatch(deletefromcart(pro))} className={`${style.delete} rounded-circle`}><img src={deleteicon} alt="" /></button>
                                        <div className={`row ${style.productdetail}`}>
                                            <p className={`col-2 ${style.quantity}`}>{pro.quantity}x</p>
                                            <p className={`col-3 ${style.price}`}>@ ${pro.price}</p>
                                            <p className={`col-2 px-2 ${style.priceQ}`}>${calcpriceQ(pro)}</p>
                                        </div>
                                        <Modalcart keyid={pro.id} />
                                        <hr />
                                    </div>
                                ))}
                            <div className={`row justify-content-between ${style.ordertotal}`}>
                                <p className={`col-6 mt-2 ${style.totaltext}`}>Order Total </p>
                                <p className={`col-3 ${style.totalprice}`}>${calctotallprice}</p>
                            </div>
                            <div className={`row ${style.carbon} rounded justify-content-center`}>
                                <img className='col-2 px-1' src={carbonicon} alt="" />
                                <p className='col-8 mb-0 px-1'>this is a <span>carbon-neutral</span> delivery</p>
                            </div>
                            < button type="button" className={`rounded-pill ${style.confirmbtn}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Confirm order
                            </button>
                        </div>
                }
            </div>

        </div >
    )
}

export default Cart