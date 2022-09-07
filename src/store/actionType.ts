export default interface ActionType {
    type: string;
    payload: {
        myCharts?: Charts.Chart | null;
        myCampaigns?: Campaigns.Campaign[];
        error?: any;
    };
}