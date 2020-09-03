# useForm Hook

Ejemplo de uso:

```
    const initialForm = {
        name: '',
        age: 0,
        email: '@gmail.com'
    }
    const [values, handleInputChange, reset] = useForm(initialForm)
```