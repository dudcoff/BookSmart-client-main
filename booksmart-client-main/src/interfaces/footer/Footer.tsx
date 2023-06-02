import React from "react"
import { Container, Info, Item, Rights } from "./Footer.styles"
import { FooterBg } from "@assets/index"
import { Title } from "@components/Text"

const Footer = () => {
  return (
    <Container>
      <Info>
        <Item>
          <Title as="h3">Conheça nossa equipe</Title>
          <p>Instigate</p>
        </Item>
        <Item>
          <Title as="h3">Faça Parte!</Title>
          <p>Crie sua conta</p>
        </Item>
        <Item>
          <Title as="h3">Ajuda</Title>
          <p>FAQ</p>
        </Item>
      </Info>
      <Rights>
        <p>© 2023 Instigate. Todos os direitos reservados.</p>
      </Rights>
    </Container>
  )
}

export default Footer
