import Menu from '../../components/menu'
import styles from '../../components/menu.css'
import  { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
export default function Dashboard () {
    
    const History = Navigate
    
    const [user, setUser] = useState()

    useEffect(() => {

        let email = localStorage.getItem('emailEco')
        let senha = localStorage.getItem('senhaEco')

        axios.get(`http://localhost:4001/user?email=${email}`)
        .then((response) => {
            setUser(response.data.message)
        })
        .catch((response) => {
            console.log(response)
        })
        
        if(email == '' || email == null) {
            localStorage.clear()
            History('/')
        } else if (senha == '' || senha == null) {
            localStorage.clear()
            History('/')
        } else {
            console.log('Autenticado com sucesso!')
        }

    }, [])
    
    return (
        <div className={`d-flex flex-row w-100 min-vh-100 bg-color-primary`}>
            <Menu/>
        </div>
    )
}