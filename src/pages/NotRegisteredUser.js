import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <>
          <UserForm onSubmit={activateAuth} title='Registrarse'/>
          <UserForm onSubmit={activateAuth} title='Iniciar Sesión'/>
        </>
      }
    }
  </Context.Consumer>
)
