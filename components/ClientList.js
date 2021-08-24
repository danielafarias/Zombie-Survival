import * as React from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FaceIcon from "@material-ui/icons/Face";

export default function Clients(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <List component="nav">
        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText>{props.name}</ListItemText>
          <ListItemText>{props.lastname}</ListItemText>
        </ListItem>
        <Divider />
      </List>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="form-dialog-title">{props.name}</DialogTitle>
        <DialogContent dividers>
          <Typography> Name: </Typography>
          <Typography gutterBottom>
            {props.name + " " + props.lastname}
          </Typography>
          <br />
          <Typography> Email: </Typography>
          <Typography gutterBottom>{props.email}</Typography>
          <br />
          <Typography> Number: </Typography>
          <Typography gutterBottom>{props.number}</Typography>
          <br />
          <Typography> Zip Code: </Typography>
          <Typography gutterBottom>{props.zip}</Typography>
          <br />
          <Typography> Address1: </Typography>
          <Typography gutterBottom>{props.address1}</Typography>
          <br />
          <Typography>Address2: </Typography>
          <Typography gutterBottom>{props.address2}</Typography>
          <br />
          <Typography> CPF: </Typography>
          <Typography gutterBottom>{props.CPF}</Typography>
          <br />
          <Typography> Birthday: </Typography>
          <Typography gutterBottom>{props.birthday}</Typography>
          <br />
          <Typography> Income: </Typography>
          <Typography gutterBottom>{props.income}</Typography>
        </DialogContent>
        <DialogActions>
          <IconButton autoFocus onClick={handleClose} color="primary">
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
