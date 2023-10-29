import { Counter } from "../_domain/entities/counter";

export class FakeCounter implements Counter {
    async count(totalPlays: number): Promise<void> {
        const newPlays = totalPlays + 1
        console.log(`contando ${totalPlays} +1 = ${newPlays}`)
    }
}