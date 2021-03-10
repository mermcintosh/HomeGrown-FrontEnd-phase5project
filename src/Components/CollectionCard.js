import React from 'react'
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'
import EditForm from './EditForm'
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
import Avatar from '@material-ui/core/Avatar';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';




let CollectionsURL = "http://localhost:3000/collections/"

const styles = (theme) => ({

  buttons: {
    margin: theme.spacing(3, 0, 2),
    // background: 'linear-gradient(45deg, #79a67a 30%, #25853f 90%)',
    // '&:hover': {
    //   backgroundColor: 'linear-gradient(45deg, #25853f 30%, #79a67a 90%)',
    // },
    border: 0,
    borderRadius: "5%",
    boxShadow: '0 3px 5px 2px rgba(107, 125, 108)',
    color: '#25853f',
    height: 60,
    width: 150,
    padding: '0 30px',
    fontSize: 15,
    
    // align: "right",
  },

  buttonGroup: {
    justifyContent: "center"
  },

  card: {
    textAlign: "center",
    border: "grey solid 1px",
    padding: "1rem",
    width: "100%",
    height: "40rem",
    display: "inline-grid",
    margin: "1 rem 2 rem",
    boxShadow: "3px 10px #6f8f78",
    fontFamily: "Barlow Condensed",
    letterSpacing: "2px",
    backgroundColor: "white",
    margin: 20,
    marginTop: 70,
    borderRadius: "15%",
    maxWidth: "31%"
  },

  image: {
    justifySelf: "center",
    height: "12rem",
    width: "12 rem"
  },

  name: {
    fontSize: 45,
    marginBottom: 0,
    lineHeight: "45px"
  },

  nickname: {
    marginTop: 0,
    fontSize: 35,
    color: "#474a47",
    fontStyle: "italic"
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

class CollectionCard extends React.Component{

  state={
    showForm: false,
    open:false,
    alertOpen: false,
  }

  handleClickOpen = ()=> {
    this.setState({
      open:true
    })
  }

  handleClose = () => {
    this.setState({
      open:false
    })
  }

  handleAlertOpen = () => {
    this.setState({
      alertOpen:true
    })
  }

  handleAlertClose = () => {
    this.setState({
      alertOpen:false
    })
  }

  handleShowForm = () => {
    this.setState({showForm: !this.state.showForm})
  }
    render(){
      const {classes} = this.props
    return (
      <div className={classes.card}>
        <h3 className={classes.name}>{this.props.collection.plant.name}</h3>
        <h3 className={classes.nickname}>{this.props.collection.nickname}</h3>
        <img className={classes.image} src={this.props.collection.plant.image}/>
       
        <ButtonGroup className={classes.buttonGroup}aria-label="outlined primary button group">
        <Button className={classes.buttons} onClick={this.handleClickOpen}>More</Button>
        <Button className={classes.buttons} onClick={this.handleAlertOpen}>Delete</Button>
        {/* <Button className={classes.buttons} onClick={() => this.props.deleteCollection(this.props.collection)} >Delete</Button> */}

        {/* <button onClick={() => this.props.deleteCollection(this.props.collection)}>Remove from collection!</button> */} 
    </ButtonGroup>

    <Dialog
        onClose={this.handleAlertClose}
        open={this.state.alertOpen}
        TransitionComponent={this.Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Are you sure you want to delete this plant?"}</DialogTitle>
        <DialogActions>
          <Button onClick={this.handleAlertClose} color="primary">
            Wait! No! No I don't!
          </Button>
          <Button onClick={() => this.props.deleteCollection(this.props.collection)}color="primary">
            Yes, I killed it.
          </Button>
        </DialogActions>
      </Dialog>

    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          {this.props.collection.plant.name}
        </DialogTitle>
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          {this.props.collection.nickname}
        </DialogTitle>
        <CardMedia
        // component="img" src={props.collection.plant.image}
        className={classes.media}
        />
        <DialogContent dividers>
          <Typography gutterBottom>
           Type - {this.props.collection.plant.category}
          </Typography>
          <Typography gutterBottom>
           Lighting - {this.props.collection.plant.light}
          </Typography>
          <Typography gutterBottom>
            Watering - {this.props.collection.plant.watering}
          </Typography>
          <Typography gutterBottom>
            Soil - {this.props.collection.plant.soil}
          </Typography>
        </DialogContent>
        <DialogActions>
        {/* <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button> */}
          <Button className={classes.buttons} onClick={this.handleShowForm}> Nickname</Button>
        { this.state.showForm
            ?
          <EditForm 
            collection={this.props.collection} 
            currentUserData={this.props.currentUserData} 
            assignNickname={this.props.assignNickname}
            // open={this.state.open}
          />
            :
          null
        }
        </DialogActions>
      </Dialog>
      </div>
    )
  }}

  
  export default withStyles(styles)(CollectionCard);


//   <ButtonGroup color="primary" aria-label="outlined primary button group">
//   <Button>One</Button>
//   <Button>Two</Button>
//   <Button>Three</Button>
// </ButtonGroup>





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