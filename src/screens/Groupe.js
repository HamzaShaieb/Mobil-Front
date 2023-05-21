import React from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'


export default function Groupe({ navigation }) {
    return (
    <Background>
    <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Groupe</Header>
        
       
        </Background>
    )
  }