import {useState} from "react";
import PropTypes from "prop-types";
import Item from "./grid/Item";
import {Button, TextField} from "@material-ui/core";
import {cardStyle, itemsForm} from "../assets/jss/styles";
import {makeStyles} from "@material-ui/core/styles";


const styles = {
    ...cardStyle,
    itemsForm,
};
const useStyles = makeStyles(styles);
export default function InputFields(props){
    const classes = useStyles();
    const [inputList] = useState(props.inputList);
    let listArray = [];
    const totalFields = inputList.length < 5  ? 5 : inputList.length ;

    const handleInputChange = (e, index) => {
        props.handleInputChange(e, index)
    };
    const handleRemoveClick = index => {
        props.handleRemoveClick(index)
    };

    for(let count = 0; count < totalFields; count++){
        listArray[count] =
            (
                <Item key={"Item"+count} className={classes.container + " " + classes.itemsForm}>
                    <TextField
                        id={"key" + count}
                        key={"key" + count}
                        name="key"
                        label="Enter Key"
                        variant="outlined"
                        value={inputList[count] ? inputList[count]?.key : ""}
                        onChange={e => handleInputChange(e, count)}
                    />
                    <TextField
                        id={"value" + count}
                        key={"value" + count}
                        name="value"
                        label="Enter Value"
                        variant="outlined"
                        value={inputList[count] ? inputList[count]?.value : ""}
                        onChange={e => handleInputChange(e, count)}
                    />
                    <div>
                        <Button onClick={() => handleRemoveClick(count)} className={classes.button}>Remove</Button>
                    </div>
                </Item>
            );
    }
    return listArray;
}
InputFields.propTypes = {
    InputFields: PropTypes.object
}