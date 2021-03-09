

  
//from line 164 onClick={this.handleShowForm}





  import React from 'react'
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'
import EditForm from './EditForm'
import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

let CollectionsURL = "http://localhost:3000/collections/"

// const styles = (them) => ({

// })

class CollectionCard extends React.Component{

  state={
    showForm: false
  }

  //  deleteCollection = () =>{
  //    let plant = this.props.collection.plant
  //     fetch(CollectionsURL + this.props.collection.plant.id, {
  //       method: "DELETE",
  //     })
  //     .then(res => res.json())
  //     .then((userPlant) => {
  //       this.props.deleteUserPlant(plant)
  //     })
  //   }

  handleShowForm = () => {
    this.setState({showForm: !this.state.showForm})
    // console.log(this.state.showForm)
  }
    render(){
    return (
      <div className="card">
        <h3>{this.props.collection.plant.name}</h3>
        <h3>{this.props.collection.nickname}</h3>
        {/* {console.log(this.props.collection)} */}
        {/* wont show up on screen (the nickname above) */}
        {/* <h3>{this.props.collection.plant.category}</h3>
        <h3>{this.props.collection.plant.description}</h3>
        
        {/* <img src = {this.props.collection.plant_id.image}/>
        <h3>{this.props.collection.category}</h3>
        <h3>{this.props.collection.light}</h3>
        <h3>{this.props.collection.watering}</h3>
        <h3>{this.props.collection.soil}</h3> */}
        <button onClick={() => this.props.deleteCollection(this.props.collection)}>Remove from collection!</button>
        {/* <button onClick={() => this.props.deleteCollection(this.props.collection)}>Remove from collection!</button> */}

        <button onClick={this.handleShowForm}> Give my plant a nickname! </button>
        { this.state.showForm
            ?
          <EditForm 
            collection={this.props.collection} 
            currentUserData={this.props.currentUserData} 
            assignNickname={this.props.assignNickname}
          />
            :
          null
        }

      </div>
    )
  }}

  
  export default CollectionCard;



  // import React from 'react'
// import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'
// import EditForm from './EditForm'
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
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';



// let CollectionsURL = "http://localhost:3000/collections/"

// const styles = (theme) => ({
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
//     fontSize: 50
//   },

//   pos: {
//     marginBottom: 12,
//   },

// })

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


// export default function CollectionCard(props){

//   const classes = styles

//   const [open, setOpen] = React.useState(false);
//   // const[showForm,setShowForm]=React.useState(false)

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   // state={
//   //   showForm: false
//   // }

// //   const handleShowForm = () => {
// //     props.setShowForm(
// //         // size: props.coffee.size,
// //         // roast: props.coffee.roast,
// //         // cream: props.coffee.cream,
// //         // sugar: props.coffee.sugar
// //         showForm=!state.showForm
// //     )
// // }

//   // handleShowForm = () => {
//   //   setState({showForm: !state.showForm})
//   // }
   
//     return (
//       <div>
//       <GridListTile >
          
//         <Typography
//           className={classes.title}
//           color="black"
//           gutterBottom
//         >
//         {props.collection.plant.name}
//         </Typography>
//         <Typography
//           className={classes.nickname}
//           color="black"
//           gutterBottom
//         >
//         {props.collection.plant.nickname}
//         </Typography>
//         <CardMedia
//         component="img" src={props.collection.plant.image}
//         className={classes.media}
//         />
//         <br/>
//         <Typography variant="body2" component="p">
//         {props.collection.plant.description}
//         </Typography>
//         <br/>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         More
//       </Button>
//       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           {props.collection.plant.name}
//         </DialogTitle>
//         <Typography className={classes.pos} color="textSecondary">
//           {props.collection.plant.nickname}
//         </Typography>
//         <CardMedia
//         component="img" src={props.collection.plant.image}
//         className={classes.media}
//         />
//         <DialogContent dividers>
//           <Typography gutterBottom>
//            Type - {props.collection.plant.category}
//           </Typography>
//           <Typography gutterBottom>
//            Lighting - {props.collection.plant.light}
//           </Typography>
//           <Typography gutterBottom>
//             Watering - {props.collection.plant.watering}
//           </Typography>
//           <Typography gutterBottom>
//             Soil - {props.collection.plant.soil}
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//         {/* <Button autoFocus onClick={handleClose} color="primary">
//             Close
//           </Button> */}
//         <Button onClick={() => props.deleteCollection(props.collection)}>Remove from collection!</Button>
//         <Button autoFocus > Give my plant a nickname! </Button>
//           <EditForm 
//             collection={props.collection} 
//             currentUserData={props.currentUserData} 
//             assignNickname={props.assignNickname}
//           />
//         </DialogActions>
//       </Dialog>
        
//         </GridListTile>
//         </div>
//     )
//   }