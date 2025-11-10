import { Col } from "react-bootstrap";

const EnsembleDescription = () => {
  return (
    <>
      <Col className="ensemble-description" xs={12} md={6} lg={7}>
        <p>
          The SSA Ensemble is a symphonic student ensemble open to all
          instruments and experience levels! We've performed at venues such as
          the Che Cafe, Price Center Ballroom and Epstein Family Ampitheater,
          and have played repertoire like Rachmaninoff's 2nd Piano Concerto,
          Appalachian Spring by Copland, Beethoven's 7th Symphony, Mendelssohn's
          Violin Concerto, and so much more. We're always happy to add more
          musicians to our group - if you would like to join, please send an
          email to <a href="mailto:symphoni@ucsd.edu">symphoni@ucsd.edu</a>, and
          we'll reach out with more information! We will update this page
          throughout the year as information becomes available. If you're not
          already there, make sure to join our Discord below and look out for
          messages in the #ssa-chamber-ensemble channel for additional
          announcements!
        </p>
      </Col>
    </>
  );
};

export default EnsembleDescription;
