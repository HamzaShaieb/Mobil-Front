import React from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Touchable  from '../components/Touchable'


export default function Conge({ navigation }) {
    return (
    <Background>
    <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>conge</Header>
        
         <Touchable>
         </Touchable>

        </Background>
    )
  }