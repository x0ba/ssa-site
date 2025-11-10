import { Container } from "react-bootstrap";
import NavBar from "../NavBar";
import Footer from "../Footer";
import BoardCards from "./BoardCards";
import PastBoard from "./PastBoard";

const Board = () => {
  return (
    <>
      <NavBar selectedItem="Board Members" />
      <Container className="board-content" fluid>
        <BoardCards />
        <hr />
        <PastBoard />
      </Container>
      <Footer />
    </>
  );
};

export default Board;
