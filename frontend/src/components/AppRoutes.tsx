import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import PageTransition from "./PageTransition.tsx";
import LoadingScreen from "./LoadingScreen.tsx";
import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import Home from "./home/Home.tsx";

// Lazy load all route components except home content
const BoardLazy = lazy(() => import("./board/Board.tsx"));
const MissionLazy = lazy(() => import("./Mission.tsx"));
const EventsLazy = lazy(() => import("./events/Events.tsx"));
const EnsembleLazy = lazy(() => import("./ensemble/Ensemble.tsx"));
const SupportLazy = lazy(() => import("./Support.tsx"));
const JoinLazy = lazy(() => import("./join/Join.tsx"));

function AppRoutes() {
  const location = useLocation();
  const [initialPath] = useState(location.pathname);

  // Preload the initial route component immediately
  useEffect(() => {
    const preloadComponent = async () => {
      // ts lowkey jank af but it works 🤷
      try {
        switch (initialPath) {
          case "/board":
            await import("./board/Board.tsx");
            break;
          case "/mission":
            await import("./Mission.tsx");
            break;
          case "/events":
            await import("./events/Events.tsx");
            break;
          case "/ensemble":
            await import("./ensemble/Ensemble.tsx");
            break;
          case "/support":
            await import("./Support.tsx");
            break;
          case "/join":
            await import("./join/Join.tsx");
            break;
        }
      } catch (error) {
        console.error("Failed to preload component:", error);
      }
    };

    if (initialPath !== "/") {
      preloadComponent();
    }
  }, [initialPath]);

  // Only show loading screen for navigation after initial load
  const isInitialRoute = (path: string) => path === initialPath;

  return (
    <>
      <NavBar />
      <PageTransition locationKey={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route
            path="/board"
            element={
              isInitialRoute("/board") ? (
                <BoardLazy />
              ) : (
                <Suspense fallback={<LoadingScreen />}>
                  <BoardLazy />
                </Suspense>
              )
            }
          />
          <Route
            path="/mission"
            element={
              isInitialRoute("/mission") ? (
                <MissionLazy />
              ) : (
                <Suspense fallback={<LoadingScreen />}>
                  <MissionLazy />
                </Suspense>
              )
            }
          />
          <Route
            path="/events"
            element={
              isInitialRoute("/events") ? (
                <EventsLazy />
              ) : (
                <Suspense fallback={<LoadingScreen />}>
                  <EventsLazy />
                </Suspense>
              )
            }
          />
          <Route
            path="/ensemble"
            element={
              isInitialRoute("/ensemble") ? (
                <EnsembleLazy />
              ) : (
                <Suspense fallback={<LoadingScreen />}>
                  <EnsembleLazy />
                </Suspense>
              )
            }
          />
          <Route
            path="/support"
            element={
              isInitialRoute("/support") ? (
                <SupportLazy />
              ) : (
                <Suspense fallback={<LoadingScreen />}>
                  <SupportLazy />
                </Suspense>
              )
            }
          />
          <Route
            path="/join"
            element={
              isInitialRoute("/join") ? (
                <JoinLazy />
              ) : (
                <Suspense fallback={<LoadingScreen />}>
                  <JoinLazy />
                </Suspense>
              )
            }
          />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  );
}

export default AppRoutes;
