import {useContext} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {cardStyle} from "../assets/jss/styles";
import {Params} from "../assets/context";

const styles = {
    ...cardStyle
};
const useStyles = makeStyles(styles);

export default function ActionButtons(props) {
    const params = useContext(Params);
    const classes = useStyles();
    const { index } = props;
    const handleDetailsClick = () => {
        params.detailWidgetIndex.setIndex(index);
        props.handleDetailsClick();
    };
    const handleDeleteClick = () => {
        params.detailWidgetIndex.setIndex(index);
        props.handleDeleteClick();
    };
    const handleEditClick = () => {
        params.detailWidgetIndex.setIndex(index);
        props.handleEditClick();
    };
    return (
       <>
           <Button onClick={handleDetailsClick}  className={classes.button} size="small" color="primary">
               Details
           </Button>
           <Button onClick={handleDeleteClick} className={classes.button} size="small" color="primary">
               Delete
           </Button>
           <Button onClick={handleEditClick} className={classes.button} size="small" color="primary">
               Edit
           </Button>
       </>
    );
};

ActionButtons.propTypes = {
    handleDetailsClick: PropTypes.func,
    handleDeleteClick: PropTypes.func,
    handleEditClick: PropTypes.func,
};