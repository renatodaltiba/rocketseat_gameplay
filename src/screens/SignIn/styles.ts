import React from 'react'

import styled from 'styled-components/native'

export const Tela = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => props.theme.colors.secondary90};
`
export const Images = styled.Image`
  width: 100%;
  height: 360px;
`

export const Content = styled.View`
  margin-top: -40px;
  padding-horizontal: 50px;
`
export const Title = styled.Text`
  color: ${(props: any) => props.theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${(props: any) => props.theme.fonts.title700};
  line-height: 40px;
`
export const Texto = styled.Text`
  color: ${(props: any) => props.theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
  font-family: ${(props: any) => props.theme.fonts.title700};
`
