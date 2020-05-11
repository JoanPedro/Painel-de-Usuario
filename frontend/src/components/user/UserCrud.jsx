import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de Usuários: C.R.U.D'
}

const baseUrl = 'http://localhost:3004/users'
const initialState = {
  user: {name: '', email: ''},
  list: []
}

export default class UserCrud extends Component {
  state = {...initialState}

  clear() {
    this.setState({ user: initialState.user })
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

    axios[method](url, user)
      .then(res => {
        const list = this.getUpdatedList(res.data)
        this.setState({ user: initialState.user, list })
      })
  }

  getUpdatedList(user) {
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)

    return list
  }

  render() {
    return (
      <Main {...headerProps}>
        Cadastro de Usuários
      </Main>
    )
  }
}

