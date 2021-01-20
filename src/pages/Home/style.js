import {makeStyles } from '@material-ui/styles';

const centeredStyleObj ={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2em',
        ...centeredStyleObj
    },
    title: {
        fontSize:'4rem'
    },
    titleGridContainer: {
        ...centeredStyleObj
    },
    textFieldSearch: {
        width: '90%',
        margin: '.5rem'
    },
    searchButton: {
        marginLeft: '.5rem'
    },
    buttonsContainer: {
        marginLeft: '.5rem'
    },
    movieIcon: {
        fontSize: '4rem'
    }
});

/*
Medicus reintegro medicusreintegros@teco.com.ar



*/