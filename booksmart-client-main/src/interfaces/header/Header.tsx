import React from "react"
import { Container, Nav, UserButton } from "./Header.styles"
import { Title } from "@components/Text"
import Search from "@components/search/Search"
import { Button } from "@components/form/Button"
import { RiAccountCircleFill } from "react-icons/ri"
import useUserStore from "@stores/UseUserStore"
import { Link } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@interfaces/dropdownMenu/DropdownMenu"

const Header = () => {
  const { isLoggedIn } = useUserStore()

  const firstPage = isLoggedIn ? "/dashboard" : "/"

  return (
    <Container>
      <Link to={firstPage}>
        <Title>Booksmart</Title>
      </Link>
      <Search />
      <Nav>
        <Link to={firstPage}>
          <Button>Início</Button>
        </Link>
        <HandleIsLoggedIn />
      </Nav>
    </Container>
  )
}

const HandleIsLoggedIn = () => {
  const { isLoggedIn, userData, logoutUser } = useUserStore()

  if (isLoggedIn)
    return (
      <>
        <Link to={`/trocar`}>
          <Button>Trocar</Button>
        </Link>
        {/* <Button>Encontro</Button> */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserButton>
              <RiAccountCircleFill size={40} />
            </UserButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <Link to={`/${userData?.username}`}>
                <DropdownMenuItem>Perfil</DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={() => logoutUser()}>
                Sair
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  else
    return (
      <>
        <Link to="/login">
          <Button>Entrar</Button>
        </Link>
        <Link to="/registrar">
          <Button>Cadastrar</Button>
        </Link>
      </>
    )
}

export default Header
