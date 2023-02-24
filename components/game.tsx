import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Modal from "./ui/modal";
import Tile from "./ui/tile";

const Game = () => {
  const [tiles, setTiles] = useState<Array<string>>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [moves, setMoves] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  const router = useRouter();

  const checkGameStatus = useCallback(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let status = "";

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (tiles[a] && tiles[a] === tiles[b] && tiles[b] === tiles[c]) {
        const data = parseInt(localStorage.getItem(currentPlayer) || "0");
        localStorage.setItem(currentPlayer, `${data + 1}`);
        status = `Game finished, ${currentPlayer} won!`;
      }

      if (i === lines.length - 1) {
        if (moves === 9 && status === "") {
          const data = parseInt(localStorage.getItem("Draw") || "0");
          localStorage.setItem("Draw", `${data + 1}`);
          status = "It's a Draw!";
        }
        setGameStatus(status);
      }
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }, [tiles, moves, currentPlayer]);

  useEffect(() => {
    checkGameStatus();
  }, [tiles]);

  const handleTileClick = (index: number) => {
    if (tiles[index] !== "" || moves === 9) return;
    setTiles([...tiles].map((t, i) => i === index ? currentPlayer : t));
    setMoves(moves + 1);
  };

  const restartGame = () => {
    router.reload();
  };

  return (
    <div className="flex flex-col gap-2 grow">
      <h2>{`${currentPlayer} TURN`}</h2>
      <div className="flex flex-wrap gap-2 w-[260px] sm:w-[400px]">
        {tiles.map((value, i) => (
          <Tile key={i} label={`${i}`} value={value} onClick={() => handleTileClick(i)}/>
        ))}
      </div>
      { gameStatus !== "" &&
        <Modal message={gameStatus} onClick={restartGame} />
      }
    </div>
  );
};

export default Game;
