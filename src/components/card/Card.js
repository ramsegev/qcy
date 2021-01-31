import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
const styles = {
    cardClasses: {
        margin: "0 -15px",
        width: "calc(100% + 30px)"
    }
};
const useStyles = makeStyles(styles);

export default function Card(props) {
    const classes = useStyles();
    const {
        children,
        ...rest
    } = props;
    return (
        <div className={classes.cardClasses} {...rest}>
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node
};
