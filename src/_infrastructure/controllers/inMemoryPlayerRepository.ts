import {Player} from "../../_domain/entities/players";
import { PlayerRepository } from "../../_domain/repositories/PlayerRepository";

const players: Player[] = [
{
    id: "1",
    totalPlays:0,
},
{
    id: "2",
    totalPlays:4,
},
{
    id: "3",
    totalPlays:7,
}
]

export class InMemoryPlayerRepository implements PlayerRepository { 
    async findPlayerById(playerId: string): Promise<Player | null> {
        const player = players.find((player)=> player.id == playerId)

        if(!player){
            return null;
        }
            return new Player(player.id, player.totalPlays)
    }
}
