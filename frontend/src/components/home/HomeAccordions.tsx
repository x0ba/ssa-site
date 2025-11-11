import Accordion from "react-bootstrap/Accordion";

const HomeAccordions = () => {
  return (
    <>
      <Accordion className="accordion" defaultActiveKey="-1">
        <h3>
          <b>Frequently Asked Questions</b>
        </h3>{" "}
        <br />
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Do I need to have prior experience in music?
          </Accordion.Header>
          <Accordion.Body>
            No! We welcome musicians of all skill levels, from beginners to
            advanced players. Our goal is to create an inclusive environment
            where everyone can enjoy and learn about symphonic music.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What do you do in this organization?
          </Accordion.Header>
          <Accordion.Body>
            We organize a variety of events, including ensemble rehearsals,
            concerts, masterclasses, and socials.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How do I contact a board member for more information?
          </Accordion.Header>
          <Accordion.Body>
            You can reach out to us via email at symphoni@ucsd.edu or ping a
            board member on the Discord.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default HomeAccordions;
