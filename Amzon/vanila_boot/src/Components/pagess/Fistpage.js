import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Posterss from '../../Posterss'
import { ProductAdOffer } from './Arrarss'
import SecoundPage from './SecoundPage'

function Fistpage() {
    return (
        <div>
            <h1>1st Page</h1>

            {/* <NavLink to='/Th'><button>Go to Th page</button></NavLink> */}

            {
                ProductAdOffer.map((obj) => {
                    return (
                        <div>
                            {/* <NavLink to='/Sec'><button> <SecoundPage Prod={obj}/> </button></NavLink> */}
                            <Link to={{
                                pathname: '/Sec',
                                state: [{ obj }]
                            }}> Your Page </Link>
                        </div>

                    )
                })
            }
            <div>
                <Posterss/>
            </div>
        </div>
    )
}

export default Fistpage
