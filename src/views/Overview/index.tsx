import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getCharts as getStoreCharts } from '../../store/charts/chartActions';
import LineChart from '../../components/LineChart';
import InsightsIcon from '@mui/icons-material/Insights';
import {
    Container,
    Box,
    Skeleton
} from '@mui/material';


interface OverviewProps {
    charts: Charts.Chart;
    getCharts: () => {};
    loading?: boolean;
}

function Overview(props: OverviewProps) {

    const { charts, getCharts } = props;

    useEffect(() => {
        let isApiSubscribed = true;
        if (isApiSubscribed && !charts) getCharts();
        return () => {
            isApiSubscribed = false;
        }
    }, [])

    return (
        <main className="col-2">
            <Container>
                <Box>
                    <p>
                        Installs
                    </p>
                </Box>


                {charts ?
                    <LineChart title="Installs" yUnit={''} data={charts.installs} />
                    :
                    <div style={{ position: 'relative' }} >
                        <div className='skeletonMessage' style={{ position: 'absolute', borderColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <InsightsIcon fontSize="large" />
                        </div>
                        <Skeleton variant="rectangular" width='100%' height={350} sx={{ borderRadius: '0.5rem', mt: '1rem' }} />
                    </div>

                }
            </Container>
            <Container>
                <Box>
                    <p>
                        Revenue
                    </p>
                </Box>

                {
                    charts ?
                        <LineChart title="USD" yUnit={'$'} data={charts.revenue} />
                        :
                        <div style={{ position: 'relative' }} >
                            <div className='skeletonMessage' style={{ position: 'absolute', borderColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <InsightsIcon fontSize="large" />
                            </div>
                            <Skeleton variant="rectangular" width='100%' height={350} sx={{ borderRadius: '0.5rem', mt: '1rem' }} />
                        </div>

                }
            </Container>
        </main>
    )
}

const mapStateToProps = (state: any) => ({
    charts: state.chartsReducer.myCharts,
    loading: state.chartsReducer.loading
});

function mapDispatchToProps(dispatch: any) {
    return {
        getCharts: () => {
            return dispatch(getStoreCharts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);