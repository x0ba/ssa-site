const HomeContent = () => {
  return (
    <>
      <span className="horizontal-container">
        <div className="text-content">
          <span className="date">est. 2018</span>
          <div className="club-title">
            <span className="word1">Symphonic</span> <br />
            <span className="word2">Student</span> <br />
            <span className="word3">Association</span> <br />
            <span className="word4">@ UCSD</span> <br />
            <p className="description">
              UCSD's premier student organization dedicated to bringing together
              musicians, music lovers, and anyone who wants to experience the
              magic of symphonic music.
            </p>
          </div>
        </div>
        <img
          src="/assets/home-image.jpeg"
          alt="SSA Ensemble"
          className="home-image"
        />
      </span>
    </>
  );
};

export default HomeContent;
