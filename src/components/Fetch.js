import React, { useEffect, useState } from 'react'
import { useMounted } from './Utility'

export const useFetch = (url) => {
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState()
    let [data, setData] = useState(null)
    let mounted = useMounted()

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok) return setError(res.statusText);
            return res.json()
        })
        .then(data =>{
            if(mounted){
                return setData(data)
            }
            else{
                setError("Not mounted")
            }
        })
        .then(() => setLoading(false))
        .catch(err => setError(err))
    }, [mounted, url])

    return {loading, data, error, setData};
}


const Fetch = ({url, renderSuccess}) => {
    let {loading, data, error, setData} = useFetch(url)

    if(loading) return <h1>Loading</h1>
    if(error) return <pre>{JSON.stringify(data, null, 2)}</pre>

    return renderSuccess(data, setData)
}

export default Fetch
