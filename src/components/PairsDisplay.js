import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {pairsDisplay} from "../assets/jss/styles";
import PropTypes from "prop-types";
import Widgets from "../layouts/Widgets";

const styles = {
    pairsDisplay
};
const useStyles = makeStyles(styles);
export default function PairsDisplay(props){
    const {pairs, amount} = props;
    const classes = useStyles();
    return (
        <div>
            <div className={classes.pairsDisplay}>
                <h3>Key</h3>
                <h3>Value</h3>
            </div>
            {
                pairs
                ? pairs.map((prop, key) => {
                    if(key < amount || amount === -1 ) {
                        return (
                            <div key={prop.key + "-" + key} className={classes.pairsDisplay}>
                                <h4>{prop.key}: </h4>
                                <p>{prop.value}</p>
                            </div>
                        );
                    }
                })
                : ""
            }
        </div>
    );
}
Widgets.propTypes = {
    pairs: PropTypes.object,
    amount: PropTypes.number,
}