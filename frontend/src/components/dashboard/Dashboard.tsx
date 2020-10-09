import { Grid } from "@material-ui/core"
import React from "react"
import Line from "../graph/Line";
import PostList from "../post/PostList"

const Dashboard = () => {

    return (
        <div>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="space-evenly"
            >
                <Grid item xs={12} sm={12} md={8}>
                    <PostList />
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <Line />
                </Grid>

            </Grid>

        </div>
    )
}

export default Dashboard