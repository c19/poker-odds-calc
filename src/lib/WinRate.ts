import { TexasHoldem } from '../index';
import { IHand } from './Interfaces';
// hand: [string, string], board: string[], seats: number, limit: number = 1000
function calc_winrate(args: {
  hand: [string, string],
  board: string[],
  seats: number,
  limit?: number,
}): [number, number] {
  let {
    hand,
    board,
    seats,
    limit = 1000,
  } = args;
  let iteration = 0;
  // let hand = ["Qs", "Ks"] as IHand;
  // let board = [] as string[]; //["Js", "Ts", "5h", "Td"]
  let wins = 0;
  let ties = 0;
  let simulations = 0;
  while (iteration < limit) {
    iteration++;
    const table = new TexasHoldem(seats);
    table
      .limit(limit)
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
  // console.log(`${hand} on ${board} winrate ${winrate.toFixed(4)} tierate ${tierate.toFixed(4)}`);
  return [winrate, tierate];
}

export { calc_winrate };