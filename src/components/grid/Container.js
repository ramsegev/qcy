import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
    grid: {
        margin: "0 -15px",
        width: "calc(100% + 30px)"
    }
};

const useStyles = makeStyles(styles);

export default function Container(props) {
    const classes = useStyles();
    const { children, className, ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid + " " + className}>
            {children}
        </Grid>
    );
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};