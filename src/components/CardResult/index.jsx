import React from 'react';

import { Card, CardActionArea, CardContent, Typography, } from '@material-ui/core';

import useStyles from './styles'

const CardResult = () => {
	const classes = useStyles()
	return (
		<>
			<Card className={classes.cardContainer}>
				<CardActionArea>
					<CardContent className={classes.cardContent}>
						<img alt='imagetest' src="https://files.lafm.com.co/assets/public/styles/i_a_750x375/public/2023-02/dino_0.jpg.webp?H1c3bS5ZRQ1okhFRcS.2ZdrKRD8wyL3b&itok=BCuNlxWJ" />

						<div className={classes.info}>
							<Typography variant='subtitle2' align='center'>
								Autor
							</Typography>
						</div>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	)
}

export default CardResult