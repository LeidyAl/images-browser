import React, { useState } from 'react';

import { Button, Dialog, DialogContent, Grid, Typography } from '@material-ui/core';

import useStyles from './styles'

const DialogDetails = ({ children, image, alt, author, createdAt, scale, description, url }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)


  return (
    <>
      {children({ handleOpen })}
      <Dialog fullWidth maxWidth='md' open={open} className={classes.dialogContainer} scroll='body' onClose={handleClose}>
        <DialogContent className={classes.dialogContent}>
          <Grid container>
            <Grid item md={12} >
              <img width='100%' alt={alt} src={image} />
            </Grid>
            <Grid item md={12}>
              <div className={classes.infoContainer}>
                <Grid container spacing={1}>
                  <Grid item md={4}>
                    <Typography varaint='subtitle2' className={classes.info}>
                      Creador: <Typography variant='caption' className={classes.description}>
                        {author}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography varaint='subtitle2' className={classes.info}>
                      Fecha de Creación: <Typography variant='caption' className={classes.description}>
                        {createdAt}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography varaint='subtitle2' className={classes.info}>
                      Descripción: <Typography variant='caption' className={classes.description}>
                        {description}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography varaint='subtitle2' className={classes.info}>
                      Dimensiones: <Typography variant='caption' className={classes.description}>
                        {scale}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography varaint='subtitle2' className={classes.info}>
                      URL: <Typography variant='caption' className={classes.description}>
                        <a href={url} >
                          Visitar URL
                        </a>
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.button} >
                <Button variant='contained' color='primary' onClick={handleClose}>Cerrar</Button>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

    </>
  )
}

export default DialogDetails