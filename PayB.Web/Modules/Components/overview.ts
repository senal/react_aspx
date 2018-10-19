export class Overview {
    to: string;
    constructor(to: string) {
        this.to = to;
    }

    greet(): string {
        return `Hi ${this.to}`;
    }
}