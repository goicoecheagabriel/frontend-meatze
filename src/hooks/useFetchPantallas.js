import { useState, useEffect } from 'react'
import {getPantallas} from './../helpers/getPantallas';

export const useFetchPantallas = ( )=>{

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
       getPantallas()
        .then( pantallas =>{ 
      
            setState({
                data: pantallas,
                loading: false
            })
        })
    }, [])

    return state; 
}
