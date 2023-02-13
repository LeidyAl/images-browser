import React, { useEffect, useState } from "react";

import { Box, Grid, TextField, Typography, Button } from '@material-ui/core';

import CardResult from "../components/CardResult";
import DialogDetails from "../components/DialogDetails";

import axios from "axios";
import config from "../API/config";

import useStyles from "./styles";


const HomePage = () => {
	const classes = useStyles();

	const [images, setImages] = useState([]);
	const [value, setValue] = useState('');

	const allImages = async () => {
		return await axios
			.get(`${config.API_URL}/photos/?client_id=${config.API_KEY}&per_page=20`)
			.then((data) => {
				setImages(data.data)
			}).catch((error) => {
				console.error(error)
			})
	}

	const filterImage = async () => {
		return await axios
			.get(`${config.API_URL}/search/photos/?client_id=${config.API_KEY}&query=${value}&per_page=20`)
			.then((data) => {
				setImages(data.data.results)
			}).catch((error) => {
				console.error(error)
			})
	}


	useEffect(() => {
		allImages()
	}, [])


	return (
		<Box className={classes.container}>
			<Typography variant='h5' color='primary' align="center">Buscador de Imágenes</Typography>
			<Grid item container spacing={2} wrap='wrap' >
				<Grid item xs={10}>
					<TextField variant='outlined' fullWidth label='Buscar Imágenes' size="small" onChange={({ target }) => setValue(target.value)} />
				</Grid>
				<Grid item container justifyContent="center" xs={2}>
					<Button variant="contained" color='primary' onClick={value !== '' ? filterImage : allImages}>Buscar</Button>
				</Grid>
				{images.map((item) => {
					return (
						<Grid item xs={12} sm={6} md={2}>
							<DialogDetails image={item?.urls?.regular} alt={item?.alt_description}
								author={item?.user?.name}
								scale={`${item?.width}px - ${item?.height}px`}
								description={item?.description ?? 'No disponible'}
								createdAt={item?.created_at}
								url={item?.urls?.full}
							>
								{(({ handleOpen }) => {
									return (
										<CardResult onClick={handleOpen} image={item?.urls?.thumb} author={item?.user?.username} />
									)
								})}
							</DialogDetails>
						</Grid>
					)
				})}
			</Grid>
		</Box>
	)
}

export default HomePage