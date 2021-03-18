import React,{useEffect,useContext} from 'react';
import {MyContext} from './../../GlobalContext/context';
import {storage} from './../../firebase';


import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import Badge from '@material-ui/core/Badge';
import {ProdcutContainer} from './prodcutContainer'

const drawerWidth = 240;



const CartNumberDesigning = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));
  

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function ProductList() {
  const context = useContext(MyContext);

    const [data, setdata] = React.useState([]);
    useEffect(() => {
        (async()=>{
                let api=await fetch("/.netlify/functions/fetchProdcuts");

                 let _data=await api.json();
                await setdata(_data.message);
                    console.log("Data : ", await _data.message[0].ref.id);

        
        })()
    }, [])


  const classes = useStyles();
  const CartNumberDesign=CartNumberDesigning()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
   


  return (

    <div className={classes.root}>
       
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundColor:"#060b26"}}

        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title} >
            Dukan.pk
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >

            <div className={CartNumberDesign.root}>
      <Badge badgeContent={context[0].length} color="error">
      <ShoppingCartIcon />
        
      </Badge>
      </div>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
        
        <div style={{display:"flex",flexWrap:"wrap"}}>
             {
              
              data && data.map((prodcutDetails)=>{
                // var storage    = firebase.storage();
                var imgdetails="";
                var storageRef = storage.ref();
                storageRef.child(`images/${prodcutDetails.ts}`).getDownloadURL().then(function(url){
                  this.imgdetails=url;
                }).catch(function(error) {
                      
                  });                


                     console.log("Specification : ", prodcutDetails.data.ProdcutSpecification);
                return <div>  {<ProdcutContainer name={prodcutDetails.data.ProductName} prize={prodcutDetails.data.ProdcutPrize} 
                ProdcutSpec={prodcutDetails.data.ProdcutSpecification} imageProduct={imgdetails} />}  </div>
                  
              })
              }
            
           
          
        </div>
        
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {context[0].map((text, index) => (
            <ListItem  style={{paddingBottom:"0px"}} button key={text}>
              <div style={{padding:"-5px"}}>             
                <h4>{text.prodcutName}</h4>
                <h6>{text.prize}</h6>
              </div>
 
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
























