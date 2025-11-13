import { useEffect, useState, useRef } from "react";
import "./PageTransition.scss";

interface PageTransitionProps {
  children: React.ReactNode;
  locationKey: string;
}

const PageTransition = ({ children, locationKey }: PageTransitionProps) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const currentKey = useRef(locationKey);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }

    if (locationKey !== currentKey.current) {
      setTransitionStage("fadeOut");
    }
  }, [locationKey]);

  return (
    <div
      className={`page-transition ${
        isInitialMount.current ? "no-animation" : transitionStage
      }`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setDisplayChildren(children);
          currentKey.current = locationKey;
          setTransitionStage("fadeIn");
        }
      }}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
