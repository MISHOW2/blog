import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPosts from "./React Router/BlogPost";
import Home from "./React Router/Home";
import SharedLayout from "./React Router/SharedRoute";
import ErrorPage from "./React Router/404";
import "./App.css";
import SinglePost from "./React Router/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<BlogPosts />} />
          <Route path="posts/:postId" element={<SinglePost />} />

          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
