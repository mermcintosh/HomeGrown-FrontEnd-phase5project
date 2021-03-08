import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontSize: 50,
    fontFamily: "Barlow Condensed"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    
  },

  nav: {
    background: 'linear-gradient(45deg, #79a67a 30%, #25853f 90%)',
    padding: 15,
    marginBottom: 20
  },

  type: {
    fontSize: 25
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  select: {
    fontSize: 25,
  }
  
})

class Search extends React.Component{
    render(){
      const {classes} = this.props
    return (
      <div className={classes.root}>
         <AppBar position="static" className={classes.nav}>
           <Toolbar>

           <Typography className={classes.title} variant="h6" noWrap>
            Find your next plant here!
          </Typography>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search plants"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              type="text"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {this.props.changeSearch(e.target.value)}}
            />
        </div>
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
      <label>
        <strong className={classes.type}>Plant Type:</strong>
        &nbsp;&nbsp;&nbsp;
        <select className={classes.select} onChange={(e) => this.props.updateFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Flowering">Flowering</option>
          <option value="Foliage">Foliage</option>
          <option value="Succulent/Cacti">Succulent/Cacti</option>
        </select>
      </label>
      </Toolbar>
      </AppBar>
      </div>
    )
  }}
  
  export default withStyles(styles)(Search);