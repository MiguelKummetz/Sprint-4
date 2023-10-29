import { PlayerRepository } from "../_domain/repositories/PlayerRepository"
import { Counter } from "../_domain/entities/counter";

export class PlaysCounter {

    constructor(
        private readonly playerRepository: PlayerRepository, 
        private readonly counter: Counter
    ) {}

    async exectue(playerId: string) {
        console.log("player", playerId)

        const player = await this.playerRepository.findPlayerById(playerId);

        if(!player){
            throw new Error(`Player id not found ${playerId}`)
        }

        console.log('Player', player.totalPlays)
        await this.counter.count(player.totalPlays)
    }
} 