import logo from "./imageInSrc.png";
import myVideo from "./myVideo.mp4";
import "./App.css";

function App() {
  return (
    <div style={{ border: "solid 1 black", maxWidth: "100vw" }}>
      <h1 class="title red">Rihab Kouira</h1>
      <br />
      <img src={logo} width="1300" height="400" />
      <br />
      <img src="/imageInPublic.png" width="200" />

      <video width="320" height="240" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
