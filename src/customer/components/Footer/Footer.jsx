import { Button, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white mt-10'>
            <Grid
                className='bg-black text-white mt-10'
                container
                spacing={4}
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{ bgcolor: "black", color: "white", py: 3, px: 4 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Job</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Solutions</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Insight</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Support</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Documentaion</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Api Status</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Claim</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>
                    </div>
                </Grid>


            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
                <Typography variant="body2" color="white">
                    © 2025 My Company, All rights reserved.
                </Typography>
            </Grid>
        </div>
    )
}

export default Footer