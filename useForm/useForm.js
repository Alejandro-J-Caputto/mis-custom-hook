import { useState } from "react"


export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }
    const handleInputChange = ({ target }) => {

        // console.log(target.name)
        setValues({
            ...values,
            [target.name]: target.value // ha usado los corchetes para que en un par de valores de objetos puedas entrar en una capa inferior
        })

    }

    return [values, handleInputChange, reset];
}
