import { Grid, Card, CardHeader, CardContent, Typography } from "@material-ui/core"
import React from "react"

const Post = (props: any) => {
    if (props.post) return (
        <Grid item xs={12} sm={12} md={11} key={props.post.id}>
            <Card>
                <CardHeader
                    title={props.post.title}
                />
                <CardContent>
                    <Typography gutterBottom>
                        {props.post.content}
                    </Typography>
                    <Typography gutterBottom>
                        author: {props.post?.author?.name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
    return (<div></div>)

}

export default Post