import React from 'react'

/** Componentes */
import { ButtonIcon } from '../../components/ButtonIcon'

/** Images */
import ilustracao from '../../assets/illustration.png'
import discord from '../../assets/discord.png'

/** Styles */
import { Tela, Images, Content, Title, Texto } from './styles'


export function SignIn() {
  return (
    <Tela>
      <Images source={ilustracao} resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se{`\n`}e organize suas{`\n`}jogatinas
        </Title>
        <Texto>
          Crie grupos para jogar seus games {`\n`}favoritos com seus amigos
        </Texto>

        <ButtonIcon
          image={discord}
          titulo="Entrar com Discord"
          activeOpacity={0.7}
        />
      </Content>
    </Tela>
  )
}
