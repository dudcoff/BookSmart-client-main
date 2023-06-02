import React from "react"
import { Author, Container, Info, Title } from "./Book.styles"
import Cover from "../cover/Cover"

interface Props {
  book: IBook
}

const Book = ({ book }: Props) => {
  return (
    <Container>
      <Cover src={book.coverUrl || ""} fallback={book.title} delayMs={0} />
      <Info>
        <Title>{book.title}</Title>
        <Author>
          {book.authorsName instanceof Array
            ? book.authorsName.join(", ")
            : book.authorsName}
        </Author>
      </Info>
    </Container>
  )
}

export default Book
