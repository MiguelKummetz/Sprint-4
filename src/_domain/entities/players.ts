
export class Player {
  constructor(readonly id: string, readonly totalPlays: number) {}
}

// class Player {
//     static id_: number = 0;
//     private readonly id: string;
//     private readonly name: string;
//     private totalPlays: number;
//     private totalWins: number;
  
//     constructor(name: string, totalPlays: number = 0, totalWins: number = 0) {
//       this.id = String(Player.id_++);
//       this.name = name;
//       this.totalPlays = totalPlays;
//       this.totalWins = totalWins;
//     };
  
//     getId(): string | undefined {
//       return this.id
//     }
  
//     getName(): string | undefined {
//       return this.name;
//     };
  
//     getTotalPlays(): number | undefined {
//           return this.totalPlays;
//     };
  
//     getTotalWins(): number | undefined {
//           return this.totalWins;
//     };
  
//     setTotalPlays(newTotalPlays: number): void {
//           this.totalPlays = newTotalPlays;
//     };
  
//     setTotalWins(newTotalWins: number): void {
//           this.totalWins = newTotalWins;
//     };
//   };
  
//   export default Player;