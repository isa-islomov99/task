import Header from "./components/header/Header";
import PostItem from "./components/post/PostItem";
import "./styles/App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PostItem />
    </div>
  );
}

export default App;
