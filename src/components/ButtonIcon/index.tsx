import React from 'react'
import { BotaoCliqueOpacidade, IconWrapper, Icon, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  image?: any
  titulo: string
}

export function ButtonIcon({ image, titulo, ...rest }: Props) {
  return (
    <BotaoCliqueOpacidade {...rest}>
      <IconWrapper>
        <Icon source={image} />
      </IconWrapper>

      <Title>{titulo}</Title>
    </BotaoCliqueOpacidade>
  )
}
