
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material';
import React, { Fragment, memo } from 'react'
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

interface LogoProps {
    showXs: 'none' | 'flex';
    showMd: 'none' | 'flex';
    name: string;
}

function Logo({ showXs, showMd, name }: LogoProps) {
    return (
        <Fragment>
            <TrackChangesIcon sx={{ display: { xs: showXs, md: showMd }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 2,
                    flexGrow: showXs === 'flex' ? 1 : 0,
                    display: { xs: showXs, md: showMd },
                    fontFamily: 'lato',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    pointerEvents: 'none',
                    justifySelf: 'center'
                }}
            >
                {name}
            </Typography>
        </Fragment>
    )
}

export default memo(Logo)