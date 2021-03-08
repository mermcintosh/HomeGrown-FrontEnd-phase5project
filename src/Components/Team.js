// old directory card code 





//   import React from 'react'
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
// // import GridList from '@material-ui/core/GridList';



// const styles = ({
//   root: {
//     minWidth: 400,
//     maxWidth: 345,
//     minHeight: 100,
//     objectFit: "cover",
//     padding: 24,
//     margin: 20
//     //   display: 'flex',
//     //   flexWrap: 'wrap',
//     //   justifyContent: 'space-around',
//     //   overflow: 'hidden',
//     //   // backgroundColor: theme.palette.background.paper,
//     //   fontFamily: "Barlow Condensed"
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

//   // root: {
//   //   minWidth: 200
//   // },
//   // bullet: {
//   //   display: "inline-block",
//   //   margin: "0 2px",
//   //   transform: "scale(0.8)"
//   // },
//   title: {
//     fontSize: 25
//   },
//   // pos: {
//   //   marginBottom: 12
//   // }
// });


// class DirectoryCard extends React.Component{
//     render(){
//       const {classes} = this.props
//     return (
//         <Card className={classes.root} variant="outlined">
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
//         <Button size="small">Learn More</Button>
//         <h4>{this.props.plant.category}</h4>
//         <h4>{this.props.plant.light}</h4>
//         <h4>{this.props.plant.watering}</h4>
//         <h4>{this.props.plant.soil}</h4>
//         <button onClick={() => (this.props.addToCollection(this.props.plant))}><Link to="/user">Add me to your collection!</Link></button>
//         </CardContent>
//         <CardActions>
//         </CardActions>
//         </Card>
//     )
//   }}

  
//   export default withStyles(styles)(DirectoryCard);


  


  
  


  


// <Button size="small">Learn More</Button>
// <h4>{this.props.plant.category}</h4>
// <h4>{this.props.plant.light}</h4>
// <h4>{this.props.plant.watering}</h4>
// <h4>{this.props.plant.soil}</h4>
// <button onClick={() => (this.props.addToCollection(this.props.plant))}><Link to="/user">Add me to your collection!</Link></button>
  



//userpage code in between the return ()

//   <div>
      
//       {this.props.currentUser ?
//         <div>
//         <h1>Hello, {this.props.currentUser.username}</h1>
//         <button><Link to="/directory">Add a new plant to my collection!</Link></button>
//         {this.props.userCollection.map(collection => 
//           <CollectionCard 
//             collection={collection} 
//             key={collection.id} 
//             deleteCollection={this.deleteCollection}
//             currentUserData={this.state.currentUserData}
//             assignNickname={this.props.assignNickname}
//             deleteUserPlant={this.props.deleteUserPlant}
//           />
//         )}
//         </div>
//         :
//         <h1>Please login to see your Plant Collection!</h1>
//       }
//       </div>