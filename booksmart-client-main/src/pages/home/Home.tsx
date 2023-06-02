import React from "react"
import {
  Background,
  BarSection,
  CardItem,
  Cards,
  Container,
  Final,
  Image,
  Prase,
  PraseText,
  Section
} from "./Home.styles"
import { Title } from "@components/Text"
import { HomePic } from "@assets/index"
import { useQuery } from "react-query"
import { instance } from "src/API/calls"
import ScrollList from "@interfaces/books/ScrollList/ScrollList"
import { Button } from "@components/form/Button"
import useUserStore from "@stores/UseUserStore"
import { Navigate } from "react-router"
import { Link } from "react-router-dom"

const Home = () => {
  const { isLoggedIn } = useUserStore()
  const { data: bookResponse } = useQuery("books", {
    queryFn: () => instance.get("/book")
  })

  if (isLoggedIn) return <Navigate to="/dashboard" />
  return (
    <Container>
      <Image src={HomePic} alt="" />
      <Prase>
        <PraseText>
          A leitura abre a mente, impulsiona sonhos e alimenta a alma.
        </PraseText>
        <p>- Érico Teixeira</p>
      </Prase>
      <BarSection>
        <Title as="h2">Conheça nossos livros</Title>
        <ScrollList books={bookResponse ? bookResponse.data : []} />
        <Background />
      </BarSection>

      <Section>
        <Title as="h2">Motivos para você trocar livros</Title>
        <Cards>
          <CardItem>Você obtém um livro totalmente gratuito!</CardItem>
          <CardItem>Você interage com novas pessoas!</CardItem>
          <CardItem>Você pode enriquecer seu conhecimento!</CardItem>
        </Cards>
      </Section>

      <Final>
        <div>
          <Title as="h2">Ainda não tem uma conta?</Title>
          <Link to={"/registrar"}>
            <Button variant="rounded">Cadastre-se</Button>
          </Link>
        </div>
        <div>
          <Title>Já tem uma conta?</Title>
          <Link to={"/login"}>
            <Button variant="rounded">Entre</Button>
          </Link>
        </div>
      </Final>
    </Container>
  )
}

export default Home
