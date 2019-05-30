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
    width: '20rem',
    margin: '2rem',
    display: 'inline-block',
  },
  title: {
    textAlign: 'center'
  },
  body: {
    fontSize: 14,
    marginTop: '1rem'
  },
  pos: {
    marginTop: '1rem'
  },
  link: {
    textDecoration: 'none'
  }
});

const Posts = (props) => {
  const classes = useStyles();

  const posts = props.posts.map(post => {
    return (
      <Card key={post.id} className={classes.card} maxWidth="sm">
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography className={classes.body} variant="body2" component="p">
            {post.body}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {post.author}
          </Typography>
          <Typography color="textSecondary">
            {post.date}
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink className={classes.link}>
            <Button
              size="medium"
              variant="contained"
              color="primary"
            >
              View
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    )
  });

  return (
    <Container maxWidth="lg">
      {posts}
    </Container>
  );
};

export default Posts;