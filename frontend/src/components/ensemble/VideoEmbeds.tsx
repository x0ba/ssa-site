import { Row, Col } from "react-bootstrap";
import YouTube, { type YouTubeProps } from "react-youtube";

const VideoEmbeds = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Row className="video-embeds g-3 g-lg-4">
      <Col xs={12} lg={6} className="video-embed-col">
        <YouTube videoId="BP3JlLMf71c" opts={opts} onReady={onPlayerReady} />
      </Col>
      <Col xs={12} lg={6} className="video-embed-col">
        <YouTube videoId="W1jpaxIIwrY" opts={opts} onReady={onPlayerReady} />
      </Col>
    </Row>
  );
};

export default VideoEmbeds;
