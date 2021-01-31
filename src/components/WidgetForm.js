import {useEffect, useContext, useState} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import {Params} from "../assets/context";
import {cardStyle, itemsForm, form} from "../assets/jss/styles";
import {Button, TextField} from "@material-ui/core";
import Item from "./grid/Item";
import Container from "./grid/Container";
import InputFields from "./InputFields";

const styles = {
    ...cardStyle,
    itemsForm,
    form
};
const useStyles = makeStyles(styles);
export default function WidgetForms(props){
    const params = useContext(Params);
    const classes = useStyles();
    const [inputList, setInputList] = useState([...props.pairs]);
    const [id] = useState(props.id);
    const [name, setName] = useState(props.name);
    const [magicNumber, setMagicNumber] = useState(parseInt(props.magicNumber));
    useEffect(() => {
        params.detailWidgetIndex.setName(name);
        params.detailWidgetIndex.setMagicNumber(magicNumber);
        params.detailWidgetIndex.setId(id);
    },[id, name, magicNumber]);
    const handleUpdateName = value => {
        setName(value);
        params.detailWidgetIndex.setName(value);
    };
    const handleUpdateMagicNumber = value => {
        setMagicNumber(value);
        params.detailWidgetIndex.setMagicNumber(value);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { key: "", value: "" }]);
    };
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        let list = [...inputList];
        if(list[index]){
            list[index][name] = value;
        }else{
            list.push({key: "", value: ""});
            list[inputList.length][name] = value;
        }
        setInputList(list);
        params.detailWidgetIndex.setPairs(list);
        params.detailWidgetIndex.setIndex(index);
    };
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    return (
        <>
            <Container  justify="center" className={classes.root}>
                <form className={classes.form} noValidate autoComplete="off">
                    <Item key={"itemMain"} className={classes.container + " " + classes.itemsForm}>
                        <TextField
                            id="name"
                            name="name"
                            label="Enter Name"
                            variant="standard"
                            value={name}
                            onChange={e => handleUpdateName(e.target.value)}
                        />
                        <TextField
                            id="magicNumber"
                            name="magicNumber"
                            type="number"
                            label="Enter Magic Number"
                            variant="standard"
                            value={magicNumber}
                            onChange={e => handleUpdateMagicNumber(e.target.value)}
                            inputProps={{ min: "0", step: "1", precision: "0" }}
                        />
                    </Item>
                    <br />
                    <InputFields key={inputList} inputList={[...inputList]} handleInputChange={handleInputChange} handleRemoveClick={handleRemoveClick}/>
                    <Button onClick={handleAddClick} className={classes.button}>Add</Button>
                </form>
            </Container>
        </>
    );
}
WidgetForms.propTypes = {
    inputList: PropTypes.object,
    id: PropTypes.number,
    name: PropTypes.string,
    magicNumber: PropTypes.number,
}