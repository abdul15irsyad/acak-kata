import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { INITIAL_LOAD } from '../../actions/actions'

const Wrapper = ({ children }) => {
    const dispatch = useDispatch()
    const getData = async () => {
        return new Promise((resolve, reject) => {
            fetch('/data/data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json())
                .then(response => {
                    resolve(response)
                })
        })
    }

    useEffect(() => {
        getData().then(response => {
            dispatch(INITIAL_LOAD(response))
        })
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            {children}
        </div>
    )
}

export default Wrapper
