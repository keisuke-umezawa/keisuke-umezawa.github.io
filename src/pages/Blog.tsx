import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
    withStyles,
    Theme,
    WithStyles,
    createStyles
} from "@material-ui/core/styles";

import PageTitleWrapper from "../shared/styles/PageTitleWrapper";
import contents from "./BlogContents.json";

const styleSettings = (theme: Theme) =>
    createStyles({
        container: {
            maxWidth: "1200px",
            margin: "5vh auto"
        },
        cardGrid: {
            padding: "0 16px"
        },
        card: {
            height: "300px",
            marginBottom: "30px"
        }
    });

class Blog extends Component<WithStyles<typeof styleSettings>, {}> {
    constructor(props: WithStyles<typeof styleSettings>) {
        super(props);
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <title>Blog</title>
                <PageTitleWrapper>Blog</PageTitleWrapper>
                <Grid container className={classes.container}>
                    {contents.map((item, key) => (
                        <Grid
                            item
                            key={key}
                            xs={12}
                            sm={6}
                            md={4}
                            className={classes.cardGrid}
                        >
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styleSettings)(Blog);
