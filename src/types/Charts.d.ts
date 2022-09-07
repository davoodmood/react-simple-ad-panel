declare module Charts {
    export interface Chart {
        installs: ChartNode[];
        revenue: ChartNode[];
    }

    export interface ChartNode {
        day: string;
        value: number;
    }
}