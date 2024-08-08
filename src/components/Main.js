import styles from '../styles/Main.module.css'
import DesertList from './DesertList'
import Cart from './Cart'
function Main() {

    /*understand it tommorow */

    return (
        <div className='containter-fluid'>
            <div className={`${styles.parent} row`}>
                <div className={`${styles.products} col-lg-8 col-md-8 col-sm-12`}>
                    <DesertList />
                </div>
                <div className={`${styles.cart} col-lg-4 col-md-4 col-sm-12`}>
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default Main