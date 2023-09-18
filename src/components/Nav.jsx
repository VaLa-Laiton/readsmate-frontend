import {useContext} from 'react'
import {ApiContext} from '../context/Context'
import {NavUser} from './nav/NavUser'
import {NavNotUser} from './nav/NavNotUser'

export const Nav = () => {
    const {user} = useContext(ApiContext)

  return (
    <>
        {user ? <NavUser/> : <NavNotUser/>}
    </>
  )
}
