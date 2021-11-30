import React,{useEffect,useState,useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PostContext } from '../Store/PostContext'

function SecoundPage() {

    const {PostDetials} = useContext(PostContext)

    useEffect(() => {
        
        PostDetials()
    }, [])

    return (
        <div>
            <h1>Secound Page</h1>
            <NavLink to='/Th'><button>Go to Th page</button></NavLink>
            <Link to='/'><button>Go to Fisrt page</button></Link> 

            <img src={PostDetials.li} alt="" />  
            <h2>{PostDetials.price}</h2>            

        </div>
    )
}

export default SecoundPage
