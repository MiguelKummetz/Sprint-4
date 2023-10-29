import { Player } from "../entities/players";

// export default interface PlayerRepository {
//   createPlayer(newPlayer: Player): Promise<void>;
//   findAllPlayers(): Promise<Player[]>;
//   findPlayerById(id: String): Promise<Player | null>;
//   deletePlayer(id: String): Promise<void>;
//   playsCounter(id: String): Promise<number>;
//   winsCounter(id: String): Promise<number>;
// }

export interface PlayerRepository {
    findPlayerById(playerId: string): Promise<Player | null>;
  }

 