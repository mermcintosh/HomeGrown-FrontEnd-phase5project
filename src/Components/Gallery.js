import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    fontFamily: "Barlow Condensed"
  },
  joy:{
    fontSize: 100,
    color: '#688f69',
  },
  gridList: {
    width: 1900,
    height: 1000,
    spacing: 100,
    borderRadius: 50
  },
});



class Gallery extends React.Component{
    render(){
        const {classes} = this.props;
    return (
        <div className={classes.root}>
            <h1 className={classes.joy}>HomeGrown on Instagram</h1>
        <GridList cellHeight={400} className={classes.gridList} cols={4} spacing={50}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }}
  
  export default withStyles(styles)(Gallery);
