// import React from 'react'
// import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'
// import { withStyles } from '@material-ui/core/styles';
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { CardMedia } from '@material-ui/core';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import { makeStyles } from '@material-ui/core/styles';

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//     minWidth: 400,
//     maxWidth: 345,
//     minHeight: 100,
//     objectFit: "cover",
//     padding: 24,
//     margin: 20
//   },

//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },

//   media: {
//     height: 300,
//   },

//   gridList: {
//     width: 1900,
//     height: 700,
//     spacing: 20,
//     borderRadius: 50
//   },

//   title: {
//     fontSize: 25
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
  
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

// export default function CustomizedDialogs(props) {

//   const classes = styles

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Card className={classes.root} variant="outlined">
//           <CardContent>
//         <Typography
//           className={classes.title}
//           color="black"
//           gutterBottom
//         >
//         {this.props.plant.name}
//         </Typography>
//         <CardMedia
//         className={classes.media}
//         image={this.props.plant.image}
//         />
//         <br/>
//         <Typography variant="body2" component="p">
//         {this.props.plant.description}
//         </Typography>
//         <br/>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         More
//       </Button>
//       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           {props.plant.name}
//         </DialogTitle>
//         <DialogContent dividers>
//           <Typography gutterBottom>
//            {props.plant.category}
//           </Typography>
//           <Typography gutterBottom>
//            Lighting - {props.plant.light}
//           </Typography>
//           <Typography gutterBottom>
//             Watering - {props.plant.water}
//           </Typography>
//           <Typography gutterBottom>
//             Soil - {props.plant.soil}
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//         <Button autoFocus onClick={handleClose} color="primary">
//             Close
//           </Button>
//           <Button autoFocus onClick={ () => (props.addToCollection(props.plant))} color="primary">
//             <Link to='/user'>Add to collection!</Link>
//           </Button>
//         </DialogActions>
//       </Dialog>
//         </CardContent>
//         <CardActions>
//         </CardActions>
//         </Card>
//         </div>
//   );
// }





