import React from 'react'
import Logo from '../components/Logo'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import Background from '../components/Background'
import Switch from '../components/Switch'


export default function Pointage({ navigation }) {
    return (
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Pointage</Header>
        <Switch> 
        </Switch>
        </Background>
    )
  }