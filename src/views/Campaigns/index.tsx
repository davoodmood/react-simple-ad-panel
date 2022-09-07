import React, { SyntheticEvent, useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux';
import { getCampaigns as getStoreCampaigns, setCampaign as setStoreCampaign } from '../../store/campaigns/campaignActions';
import LineChart from '../../components/LineChart';
import {
    Container,
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    FormHelperText,
    Skeleton,
    Grid,
    Typography,
    Divider,
    TextField,
    Button,
    InputAdornment
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InsightsIcon from '@mui/icons-material/Insights';


interface CampaignsProps {
    campaigns: Campaigns.Campaign[];
    getCampaigns: () => {};
    setCampaign: (name: string, currentCampaigns: Campaigns.Campaign[]) => {};
    loading?: boolean;
}

function Campaigns(props: CampaignsProps) {

    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;;

    const { campaigns, getCampaigns, setCampaign } = props;
    const [chartData, setChartData] = useState<Campaigns.ChartNode[]>([])
    const [chartId, setChartId] = useState<string>('')
    const [campaignName, setCampaignName] = useState<string>('')

    const handleChange = (event: SelectChangeEvent) => {
        setChartId(event.target.value as string);
        const selectedCampaign = campaigns.find((campaign: Campaigns.Campaign) => campaign.id === event.target.value)
        if (selectedCampaign) setChartData(selectedCampaign.installs);
    };

    const handleCampaignCreate = (event: SyntheticEvent) => {
        event.preventDefault();
        if (campaignName.length === 0) return
        setCampaign(campaignName, campaigns)
        setCampaignName('');
    };
    const handleCampaignNameInput = (event: SyntheticEvent) => {
        setCampaignName((event.target as HTMLInputElement).value as string);
    };

    useEffect(() => {
        let isCampaignApiSubscribed = true;
        if (isCampaignApiSubscribed && campaigns.length === 0) getCampaigns();
        return () => {
            isCampaignApiSubscribed = false;
        }
    }, [])

    return (
        <main className='col-1'>
            <Container>
                <Box>
                    <Typography sx={{ fontFamily: 'lato', fontSize: '1.5rem' }}>Create a new Campaign:</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { my: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleCampaignCreate}
                    >
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    id="create-campaign"
                                    label="Create Campaign"
                                    variant="outlined"
                                    fullWidth
                                    value={campaignName}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Name: </InputAdornment>,
                                        endAdornment:
                                            <InputAdornment position="start">
                                                <Button size='small' disabled={campaignName.length === 0} variant="contained" onClick={handleCampaignCreate}>Create</Button>
                                            </InputAdornment>,
                                    }}
                                    onChange={handleCampaignNameInput}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
                <Divider sx={{ mt: 7, mb: 3 }}></Divider>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Box sx={{ height: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '3px' }}>
                                Installs
                            </Box>
                        </Grid>
                        <Grid item xs={10}>
                            <FormControl color='primary' variant="outlined" fullWidth>
                                <InputLabel id="select-label">Campaigns</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="select"
                                    value={chartId}
                                    label="Campaigns"
                                    onChange={handleChange}
                                >
                                    {campaigns && campaigns.map((campaign) => {
                                        return (
                                            <MenuItem key={campaign.id} value={campaign.id}>{campaign.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                                <FormHelperText>Select one of your campaigns</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>

                </Box>
                {
                    chartData.length > 0 ?
                        <LineChart title="Installs" yUnit={''} data={chartData} />
                        :
                        <div style={{ position: 'relative' }} >
                            <div className='skeletonMessage' style={{ position: 'absolute', borderColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <div>
                                    <InsightsIcon fontSize="large" />
                                    <p>
                                        {
                                            chartId ?
                                                'Still gathering your install counts'
                                                :
                                                'Select a campaign from dropdown list'
                                        }

                                    </p>
                                </div>
                            </div>
                            <Skeleton variant="rectangular" width='100%' height={320} sx={{ borderRadius: '0.5rem', mt: '1rem' }} />
                        </div>

                }
            </Container>
        </main >
    )
}

const mapStateToProps = (state: any) => ({
    campaigns: state.campaignReducer.myCampaigns,
    loading: state.campaignReducer.loading
});

function mapDispatchToProps(dispatch: any) {
    return {
        getCampaigns: () => {
            return dispatch(getStoreCampaigns())
        },
        setCampaign: (name: string, currentCampaigns: Campaigns.Campaign[]) => {
            return dispatch(setStoreCampaign(name, currentCampaigns))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);