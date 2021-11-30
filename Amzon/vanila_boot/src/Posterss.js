import React, { useContext } from 'react'
import { ProductAdOffer } from './Components/pagess/Arrarss'
import { PostContext } from './Components/Store/PostContext'
import {useHistory} from 'react-router-dom'
 
function Posterss() {

    const {setPostDitials} = useContext(PostContext)
   const history=useHistory()

   
    return (
        <div>
            {
                ProductAdOffer.map((obj)=>{
                   
                    return(
                        <div onClick={()=>{
                            setPostDitials(obj)
                            history.push("/Sec");
                             
                        }}>
                            <img src={obj.li} alt="" />
                            <h6>{obj.price}</h6>
                            <h6>{obj.category}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posterss
