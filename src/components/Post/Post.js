import React from 'react';
import {makeStyles} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
  '@global': {
    body: {
      background: '#4f4d49'
    }
  },
  card: {
    marginTop: '10rem'
  },
  link: {
    textDecoration: 'none'
  }
});

const Post = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Card className={classes.card} maxWidth="sm">
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            title
          </Typography>
          <Typography className={classes.body} variant="body2" component="p">
            body
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            author
          </Typography>
          <Typography color="textSecondary">
            date
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to="/" className={classes.link}>
            <Button
              size="medium"
              variant="outlined"
              color="secondary"
            >
              Back
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Post;