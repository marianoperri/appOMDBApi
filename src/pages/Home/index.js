import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './style';
import {MovieIcon} from '../../icons';


export default ({history}) => {
 
    const [searchText, setSearchText]= useState('');
    const classes= styles();

    const handleSearchTexChange = event =>{
        setSearchText(event.target.value);
        
    };
    const handleCleanTextClick = event =>{
        setSearchText('');
    };
    const handleSearchTextClick = event =>{
        history.push(`/results?movieName=${searchText}`);
    };
        
    return(
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenido</Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}/>
                    </Grid>
                </Grid>
                <TextField 
                    value={searchText}
                    className={classes.textFieldSearch}
                    placeholder="buscar"
                    onChange={handleSearchTexChange}
                />
                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick} >Buscar</Button>
                </Grid>
            </Card>
        </Container>
    );
}
