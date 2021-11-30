import React from 'react'
import { Link } from 'react-router-dom'

function ThirdPage() {
    return (
        <div>
            <h1>3rd Page</h1>
            <Link to='/'><button>Go to Fist page</button></Link>
            <Link to='/Sec'><button>got ot Sec</button></Link>
        </div>
    )
}

export default ThirdPage
