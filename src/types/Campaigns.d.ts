declare module Campaigns {
    export interface Campaign {
        id: string;
        name?: string;
        installs: ChartNode[];
    }

    export interface ChartNode {
        day?: string;
        value?: number;
    }
}