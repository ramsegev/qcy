import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardActionArea, CardContent, Typography} from "@material-ui/core";
import {useMagicNumber} from "../assets/helperHooks";
import {cardStyle, pairsDisplay, single} from "../assets/jss/styles";

const styles = {
    ...cardStyle,
    ...single,
    pairsDisplay
};

const useStyles = makeStyles(styles);

export default function WidgetList(props) {
    const classes = useStyles();
    const {  name, magicNumber, type, children} = props;
    const listClasses = {
        card: classes.card,
        h2: classes.h2,
        ctaContainer: classes.ctaContainer
    }
    const single = {
        card: classes.singleCard,
        h2: classes.singleH2,
        ctaContainer: classes.singleCtaContainer
    }
    const list = type === "list" ? {...listClasses} : {...single};
    return (
        <>
        <Card className={list.card}>
            <CardActionArea >
                <CardContent>
                    <Typography className={list.h2} gutterBottom variant="h2" component="h2">
                        {name}
                    </Typography>
                    <Typography className={list.ctaContainer} variant="caption" color="textSecondary" component="p">
                        {useMagicNumber(parseInt(magicNumber))}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {children}
        </Card>
        </>
    );
}

WidgetList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    magicNumber: PropTypes.number,
    pairs: PropTypes.array,
    className: PropTypes.string,
    children: PropTypes.node
};