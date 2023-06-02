import { styled } from "styled-components"

export const Container = styled.footer`
  background-color: #69140e;
  padding: 0.5rem 1rem;
  color: #fff;
  display: grid;
  gap: 4rem;
  height: 100%;
  margin-top: 10rem;
`

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Item = styled.div`
  flex: 1 1 10rem;
  display: grid;
  gap: 0.5rem;

  h3 {
    font-size: 1.5rem;
  }
`

export const Rights = styled.div`
  justify-self: center;
  color: #f2b675;
`
