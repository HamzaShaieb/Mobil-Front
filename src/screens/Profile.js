import React from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function Profile({ navigation }) {
    return (
      <Background>
     <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>profile</Header>
        <Paragraph> User Name </Paragraph>
        <Paragraph> Role </Paragraph>
        <Paragraph> descution </Paragraph>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Pointage')}
        >
          Pointage
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Conge')}
        >
          Conge
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Groupe')}
        >
          Groupe
        </Button>
       
      </Background>
    )
  }