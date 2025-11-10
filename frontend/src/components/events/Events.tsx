import { Container } from "react-bootstrap";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PastEvents from "./PastEvents";
import UpcomingEvents from "./UpcomingEvents";

const Events = () => {
  return (
    <>
      <NavBar selectedItem="Events" />
      <Container fluid className="events-content">
        <h1>Events</h1>
        <hr />
        <UpcomingEvents />
        <hr />
        <PastEvents />
      </Container>
      <Footer />
    </>
  );
};

export default Events;
