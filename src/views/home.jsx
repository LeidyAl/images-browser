import React from "react";

import { Box, Grid, Typography, } from '@material-ui/core';

import CardResult from "../components/CardResult";

import DialogDetails from "../components/DialogDetails";

import useStyles from "./styles";


const HomePage = () => {
	const classes = useStyles()

	return (
		<div>
			<Typography variant='h5' color='primary' align="center">Buscador de Imágenes</Typography>
			<DialogDetails />
			<Box className={classes.container}>
				<Grid item container spacing={2} wrap>
					<Grid item xs={3}>
						<CardResult />
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default HomePage