const Home = () => {
  return (
    <>
      <span className="horizontal-container">
        <div className="ssa-ucsd">
          <span className="date">est. 2021</span>
          <div className="club-title">
            <span className="word1">Symphonic</span> <br />
            <span className="word2">Student</span> <br />
            <span className="word3">Association</span> <br />
            <span className="word4">@ UCSD</span>
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

export default Home;
