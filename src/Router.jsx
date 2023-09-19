/** @format */
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Aside,
  Navbar,
  Main,
  VideoPage,
  SearchPage,
} from "./components";
import {
  Library,
  LikedVideos,
  Shorts,
  Subscriptions,
  WatchLater,

} from "./components/sidebarPages";
import { auth } from "./components/auth/firebase";
import { GlobalState } from "./context/GlobalState";

const Router = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  });

  return (
    <GlobalState>
      <BrowserRouter>
        <Navbar user={user} />
        <Aside />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Main />} />
          <Route path='/library' element={<Library />} />
          <Route path='/likedvideos' element={<LikedVideos />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/subscriptions' element={<Subscriptions />} />
          <Route path='/watchlater' element={<WatchLater />} />
          <Route path='/search' element={<SearchPage />} />
          <Route
            path='/video/:id/:title/:time/:userName/:viewCount'
            element={<VideoPage />}
          />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
};

export default Router;
