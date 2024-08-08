import React,{ useEffect} from "react"
import Desertcompnent from "./Desertcompnent"
import style from '../styles/alldesert.module.css'
import { useDispatch,useSelector } from "react-redux"
import { fetchproduct } from "../slices&store/Product-slice"
function DesertList() {
    const deserts=useSelector(state=>state.product)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchproduct())
    },[])
    return (
        <div className={style.alldeserts}>
            <h1 >Deserts</h1>
            {
                deserts.map((des)=>(
                    <Desertcompnent des={des} key={des.id} />
                ))
            }
        </div>
    )
}

export default DesertList