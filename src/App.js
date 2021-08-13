import "./App.css";
import Post from "./components/Post.js";
import Photos from "./components/Photos.js";
import Contacts from "./components/Contacts";
import { Switch, Route, NavLink } from "react-router-dom";

const ANAKIN_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const LUKE_IMAGE =
  "https://media.nauticamilanonline.com/product/busto-luke-skywalker-star-wars-episode-viii-18cm-800x800.jpg";
const RISE_SKYWALKER =
  "https://media.tenor.com/images/ef05556fe6351303a924db6a05e5a4f4/tenor.png";

const postAuthor = [
  {
    photo: ANAKIN_IMAGE,
    name: "Anakin Skywalker",
    nickname: "@dart_vader",
    image: RAY_IMAGE,
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  },
  {
    photo: LUKE_IMAGE,
    name: "Luke Skywalker",
    image: RISE_SKYWALKER,
    content: "WTF?",
  },
];

const HomeComponent = () => {
  return (
    <div className="home_components">
      <div className="home_components_text">
        <h1>React-Router</h1>
        <h2>Andrii Tantsiura</h2>
      </div>
    </div>
  );
};

const PostComponent = () =>
  postAuthor.map((post) => <Post {...post} key={post.name} />);

const PhotoComponent = () => {
  return <Photos />;
};

const ContactComponent = () => {
  return <Contacts />;
};

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/photos">Photos</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        <Route path="/posts" component={PostComponent}></Route>
        <Route path="/photos" component={PhotoComponent}></Route>
        <Route path="/contacts" component={ContactComponent}></Route>
      </Switch>
    </div>
  );
}

export default App;
