import React from 'react'
import AddCardItem from './AddCardItem'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../UseContext/Context'



const AddItems = () => {

    const {items} = useContext(Context)
    return (
        <>
            <div className='add-card'>

                {
                    items.map((CurCardItem) => {
                        return <AddCardItem key={CurCardItem} {...CurCardItem} />
                    })
                }


                <div className='card'>
                    <Link to="/FormCard"><button className='plus-btn'><i class="fa-solid fa-plus"></i></button></Link>
                    <h2>Click Your Add</h2>
                </div>
            </div>





        </>
    )
}

export default AddItems
