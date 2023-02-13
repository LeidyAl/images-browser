import React from 'react';

import { Card, CardActionArea, CardContent, Typography, } from '@material-ui/core';

import useStyles from './styles'

const CardResult = ({ onClick, image, author }) => {
	const classes = useStyles()
	return (
		<>
			<Card className={classes.cardContainer}>
				<CardActionArea onClick={onClick}>
					<CardContent className={classes.cardContent}>
						<img alt='imagetest' src={image} />
						<div className={classes.info}>
							<Typography variant='subtitle2' align='center'>
								Creador: {author}
							</Typography>
						</div>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	)
}

export default CardResult