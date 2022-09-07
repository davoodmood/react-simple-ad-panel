import React, { memo } from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid
} from 'recharts';
import CustomTooltip from './components/Tooltip';
import './styles.css';

interface LineChartProps {
    data: Charts.ChartNode[] | Campaigns.ChartNode[],
    yUnit: string;
    xUnit?: string;
    title: string;
}

function LineChart({ data, yUnit, title }: LineChartProps) {
    return (
        <React.Fragment>
            {/* <div>{JSON.stringify(data)}</div> */}
            <ResponsiveContainer width='100%' height={350}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id='gradient' x1={0} y1={0} x2={0} y2={1}>
                            <stop offset='0%' stopColor='#2451B7' stopOpacity={0.4} />
                            <stop offset='75%' stopColor='#2451B7' stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <Area
                        dataKey='value'
                        stroke='#2451B7'
                        fill='url(#gradient)'
                    />
                    <XAxis
                        dataKey='day'
                        axisLine={false}
                        tickLine={false}
                        tick={false}
                        tickFormatter={number => {
                            return `${number}`
                        }}
                    />
                    <YAxis
                        padding={{ top: 45, bottom: 0 }}
                        dataKey='value'
                        axisLine={false}
                        tickLine={false}
                        tickCount={6}
                        tickFormatter={number => {
                            return `${yUnit}${number}`
                        }}
                    />
                    <Tooltip wrapperStyle={{ outline: 'none' }} content={<CustomTooltip unit={yUnit} title={title} />} />
                    <CartesianGrid opacity={0.1} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}

export default memo(LineChart);