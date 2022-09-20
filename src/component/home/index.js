import Game from "../game";
import Layout from "../hoc/layout";
import "./style.scss";
export default function Home() {
  return (
    <Layout>
      <div class="container-fluid bg">
        <div class="row">
          <div class="col-12 col-md-8 d-flex justify-content-center">
            <Game />
          </div>
          <div class="col-12 col-md-4 justify-content-start" id="gameName">
            <h1 className="gameText">Tic</h1>
            <h1 className="gameText">Toc</h1>
            <h1 className="gameText">Toe</h1>
            <h1 className="gameText">Game</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
