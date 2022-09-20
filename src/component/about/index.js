import Layout from "../hoc/layout";
import "./style.scss"
export default function about() {
  return (
    <Layout>
      <div className=".container bg">
        <h3>About The Game</h3>
        <p>
          Tic-tac-toe (American English), noughts and crosses (Commonwealth
          English), or Xs and Os (Irish English) is a paper-and-pencil game for
          two players who take turns marking the spaces in a three-by-three grid
          with X or O.
        </p>
        <p>
          The player who succeeds in placing three of their marks in a
          horizontal, vertical, or diagonal row is the winner. It is a solved
          game, with a forced draw assuming best play from both players.
        </p>
        <p>
          There is no universally-agreed rule as to who plays first, but in this
          article the convention that X plays first is used. Players soon
          discover that the best play from both parties leads to a draw. Hence,
          tic-tac-toe is often played by young children who may not have
          discovered the optimal strategy.
        </p>
        <h3>History</h3>
        <p>
          Games played on three-in-a-row boards can be traced back to ancient
          Egypt, where such game boards have been found on roofing tiles dating
          from around 1300 BC.
        </p>
        <p id="about">
          An early variation of tic-tac-toe was played in the Roman Empire,
          around the first century BC. It was called terni lapilli (three
          pebbles at a time) and instead of having any number of pieces, each
          player had only three; thus, they had to move them around to empty
          spaces to keep playing.
        </p>
      </div>
    </Layout>
  );
}
