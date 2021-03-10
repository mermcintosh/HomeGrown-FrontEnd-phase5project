import React from 'react'; 
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
 copyright: {
    backgroundColor: "#688f69",
    padding: 40,
 },

words: {
  fontSize: 20,
  color: "white"
}

})

class Copyright extends React.Component{

  render(){
  const {classes} = this.props

    return (
      <div className={classes.copyright}>
      <Typography variant="body2" color="textSecondary" align="center" className={classes.words}>
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Homegrown LLC
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </div>
    );
  }}
  export default withStyles(styles)(Copyright)
