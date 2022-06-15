
import './App.css';
import {Button,Div,Pic} from "./components/Button"

function App() {
  return (
    <Div className="App">
      <Div>
        <a href="/#">
          <Pic src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg" />
          <Button green image>
            New post
          </Button>
        </a>
      </Div>
      <Div>
        <a href="/#">
          <Button blue>Go Add-Free</Button>
        </a>
        <a href="/#">
          <Button>Sign up</Button>
        </a>
        <a href="/#">
          <Button green>Sign in</Button>
        </a>
      </Div>
    </Div>
  );
}

export default App;
