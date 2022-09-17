import Game from "../game";
import "./style.scss"
export default function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-8"><Game/></div>
        <div class="col-md-4 md"> 
            <h1 className="gameText">Tic</h1>
            <h1 className="gameText">Toc</h1>
            <h1 className="gameText">Toe</h1>
            <h1 className="gameText">Game</h1>
        </div>
      </div>
    </div>
  );
}
