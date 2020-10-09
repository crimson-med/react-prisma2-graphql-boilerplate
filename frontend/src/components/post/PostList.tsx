import { gql, useQuery } from "@apollo/client";
import { Grid } from "@material-ui/core"
import React from "react"
import Post from "./Post";

const ALL_POSTS = gql`
query {
    feed {
      id
      title
      content
      published
      author {
        id
        name
        email
      }
    }
  }
`;

const PostList = () => {
    const { loading, error, data } = useQuery(ALL_POSTS);

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error! {error.message}</p>);
    if (data) return (
        <div>
            <h1>Post List</h1>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="space-evenly"
            >
                {data.feed.map((elem: any) => (
                    <Post post={elem} />
                ))}
            </Grid>
        </div>
    )
    return (<div></div>)

}

export default PostList