export class Cylinder {
    private static getPerimeter(radius: number): number {
        return 2 * Math.PI * radius;
    }

    private static getBaseArea(radius: number): number {
        return Math.PI * radius * radius;
    }

    public static getVolume(radius: number, height: number): number {
        let baseArea: number = Math.PI * radius * radius;
        let perimeter: number = 2 * Math.PI * radius;
        return perimeter * height + 2 * baseArea;
    }
}
