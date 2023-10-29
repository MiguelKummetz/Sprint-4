export interface Counter {
    count(totalPlays: number): Promise<void>;
}