import React from 'react'
import { Card, cardmedia } from '@mui/material'
import { Button } from 'bootstrap'


const Cards = () => {
    return Cards = (
        <div>

            <Card sx={{ maxwidth: 300 }}>
                <cardmedia
                    component={'img'}
                    heght="140"
                    image=''
                    alt="test image"
                />
                <Cardcontent>
                    <Typography gutterbottom varient="h5" component="div">
                        Web Design</Typography>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam, dignissimos, non vitae. Reprehenderit, fugiat beatae? Officiis.
                    </Typography>

                </Cardcontent>
                <CardAction>
                    <Button size="small" color="primary" > Share </Button>
                </CardAction>


            </Card>


        </div>



    )
}

