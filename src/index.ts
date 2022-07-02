import Table from "./lib/Table";
import "./lib/Utils";

export class TexasHoldem extends Table {
  constructor(seats?: number) {
    super("texas_holdem", seats);
  }
}

export class SixPlusHoldem extends Table {
  constructor() {
    super("sixplus_holdem");
  }
}

export class Omaha extends Table {
  constructor() {
    super("omaha");
  }
}