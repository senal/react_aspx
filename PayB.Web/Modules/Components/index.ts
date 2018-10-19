import { Overview } from './overview';

let overview: Overview = new Overview('Ranga');
let message: string = overview.greet();

console.log(message);