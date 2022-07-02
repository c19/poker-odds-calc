import { TexasHoldem } from '../../index';
import Card from '../Card';
import { IHand } from '../Interfaces';

let iteration = 0;
let hand = ["Qs", "Ks"] as IHand;
let board = [] as string[]; //["Js", "Ts", "5h", "Td"]
let wins = 0;
let ties = 0;
let simulations = 0;
while (iteration < 1000) {
  iteration++;
  const table = new TexasHoldem(6);
  table
    .limit(1000)
    .addPlayer(hand)
    .setBoard(board)
    .randomPlayers()
    ;

  const Result = table.calculate();
  let player = Result.getPlayers()[0];
  wins += player.getWins();
  ties += player.getTies();
  simulations += player.getIterations();
}

let winrate = wins / simulations;
let tierate = ties / simulations;
// console.log(`${hand} on ${board} winrate ${winrate} tierate ${tierate}`);
console.log(`${hand} on ${board} winrate ${winrate.toFixed(4)} tierate ${tierate.toFixed(4)}`);