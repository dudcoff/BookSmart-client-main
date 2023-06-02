import { Title } from "@components/Text"
import { styled } from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: 5rem;
`

export const Prase = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 1.5rem);
  background-size: cover;
  height: 30rem;
  color: #fff;
  z-index: 1;
  align-content: center;
  max-width: 60rem;
  padding: 0 1rem;

  p {
    justify-self: end;
  }
`

export const PraseText = styled(Title)`
  font-size: 3rem;
  font-family: "Playfair Display SC", serif;
  font-weight: 400;

  @media (max-width: 740px) {
    font-size: 2rem;
  }
`

export const Image = styled.img`
  position: absolute;
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 30rem;
  left: 0;
  top: 5%;
`

export const Section = styled.div`
  text-align: center;
  display: grid;
  gap: 2rem;
  position: relative;
`

export const BarSection = styled.div`
  text-align: center;
  display: grid;
  gap: 2rem;
  position: relative;
`

export const Cards = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
`

export const CardItem = styled.li`
  flex: 1 0 20rem;
  background-color: #69140e;
  text-align: center;
  padding: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: 2px solid #f2b675;
`

export const Background = styled.span`
  position: absolute;
  background-color: #f2b675aa;
  width: 100%;
  height: 85%;
  z-index: -1;
  left: 0;
  bottom: 0;
  box-shadow: -300px 0px 0px 0px #f2b675aa, 300px 0px 0px 0px #f2b675aa;
`

export const Final = styled.div`
  display: flex;
  row-gap: 5rem;
  justify-content: space-evenly;
  justify-items: center;
  flex-wrap: wrap;

  div {
    display: grid;
    gap: 1rem;
    justify-items: center;
    text-align: center;
  }
`
