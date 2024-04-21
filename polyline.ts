type Point = {
    x: number,
    y: number
}
const getSegmentLength = (a: Point, b: Point): number => Math.sqrt(((b.x - a.x) ** 2) + ((b.y - a.y) ** 2));
class PolyLine {
    way: Array<Point>;

    constructor() {
        this.way = [];
    }

    nextPoint(): Point {
        if (this.way.length === 0) this.makeWay();
        return this.way.shift() as Point;
    }

    getAllPoints(): Array<Point> {
        if (this.way.length === 0) this.makeWay();
        let temp: Array<Point> = JSON.parse(JSON.stringify(this.way))
        this.way = [];
        this.makeWay();
        return temp;
    }

    makeWay(): void {
        let first: Point = this.getCoord();
        this.way.push(first);
        let count: number = randint(1, 6);
        let lastcoord: Point = { x: first.x, y: first.y };
        for (let i = 0; i < count; i++) {
            let nextcoord: Point = this.getCoord();
            while (this.objectEqual(nextcoord, lastcoord) || this.objectEqual(nextcoord, first)) {
                nextcoord = this.getCoord();
            }
            this.way.push(nextcoord);
            lastcoord = { x: nextcoord.x, y: nextcoord.y };
        }
        this.way.push({ x: first.x, y: first.y });
    }

    getCoord(): Point {
        return { x: randint(-10, 10), y: randint(-10, 10) };
    }

    objectEqual(a: Point, b: Point): boolean {
        return a.x === b.x && a.y === b.y;
    }
}
let polyLine = new PolyLine();

