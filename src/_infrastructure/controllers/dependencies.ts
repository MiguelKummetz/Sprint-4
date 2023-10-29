import { PlaysCounter } from "../../_application/PlaysCounter"; 
import { FakeCounter } from "../fakeCounter";
import { PlayerController } from "./PlayerController";
import { InMemoryPlayerRepository } from "./inMemoryPlayerRepository";

const fakeCounter = new FakeCounter()
const inMemoryPlayerRepository = new InMemoryPlayerRepository();
export const playsCounter = new PlaysCounter(inMemoryPlayerRepository, fakeCounter);
export const playerController = new PlayerController(playsCounter);