import React from 'react';

import { Button, Dialog, DialogContent, Grid, Typography } from '@material-ui/core';

import useStyles from './styles'

const DialogDetails = () => {
  const classes = useStyles();
  return (
    <>
      <Dialog fullWidth maxWidth='md' open={true} className={classes.dialogContainer} scroll='body'>
        <DialogContent className={classes.dialogContent}>
          <Grid container>
            <Grid item md={12}>
              <img width='100%' alt='imagetest' src="https://files.lafm.com.co/assets/public/styles/i_a_750x375/public/2023-02/dino_0.jpg.webp?H1c3bS5ZRQ1okhFRcS.2ZdrKRD8wyL3b&itok=BCuNlxWJ" />
            </Grid>
            <Grid item md={12}>
              <div className={classes.infoContainer}>
                <Grid container spacing={1}>
                  <Grid item md={4}>
                    <Typography varaint='subtitle2' className={classes.info}>
                      Fotógrafo: <Typography variant='caption' className={classes.description}>
                        Leidy Marcela Álvarez Mejía
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography varaint='subtitle2' className={classes.info}>
                      Perfil del Fotógrafo: <Typography variant='caption' className={classes.description}>
                        Leidy Marcela Álvarez Mejía
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography varaint='subtitle2' className={classes.info}>
                      Dimensiones: <Typography variant='caption' className={classes.description}>
                        20-04-2001
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography varaint='subtitle2' className={classes.info}>
                      URL: <Typography variant='caption' className={classes.description}>
                        Leidy Marcela Álvarez Mejía
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              <div className={classes.button} >
                <Button variant='contained' color='primary'>Cerrar</Button>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

    </>
  )
}

export default DialogDetails