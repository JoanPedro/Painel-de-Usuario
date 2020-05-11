import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de Usuários: C.R.U.D'
}

export default class UserCrud extends Component {
  render() {
    return (
      <Main {...headerProps}>
        Cadastro de Usuários
      </Main>
    )
  }
}

