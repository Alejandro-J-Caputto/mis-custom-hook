import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        console.log(isMounted)
        return () => {

            isMounted.current = false;
            console.log(isMounted)
        }

    }, [])

    console.log(isMounted)
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json()
                .then(data => {

                    if (isMounted.current) {
                        setState({
                            data: data,
                            loading: false,
                            error: null
                        })

                    }

                })
                .catch(() => {
                    setState({
                        data: null,
                        loading: false,
                        error: 'No se pudo traer la data'
                    })
                })
            )

    }, [url]);

    return state;
}
