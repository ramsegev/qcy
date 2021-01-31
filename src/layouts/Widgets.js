import {useContext, useState} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Container from "../components/grid/Container";
import Item from "../components/grid/Item";
import WidgetList from "../views/WidgetList";
import {cardStyle, container, root, scrollable, transition, screenHeight} from "../assets/jss/styles";
import {Params} from "../assets/context";
import {Button, CardActions} from "@material-ui/core";
import PairsDisplay from "../components/PairsDisplay";
import ActionButtons from "../components/ActionButtons";
import WidgetForms from "../components/WidgetForm";
import SweetAlert from "react-bootstrap-sweetalert";
import {useUpdateLocalStorage} from "../assets/helperHooks";

const styles = {
    root,
    container,
    scrollable,
    transition,
    screenHeight,
    ...cardStyle
};
document.body.style.overflow = "hidden";
const useStyles = makeStyles(styles);

export default function Widgets() {
    useUpdateLocalStorage();
    const classes = useStyles();
    const params = useContext(Params);
    const [widgetList, setWidgetList] = useState([...params.widgetList]);
    const [detailWidgetIndex, setDetailWidgetIndex] = useState(0);
    const [isNew, setIsNew] = useState(true);
    const [editModal, setEditModal] = useState(widgetList.length <= 0);
    const handleDetailsClick = () => {
        setDetailWidgetIndex(params.detailWidgetIndex.index)
    };
    const handleDeleteClick = () => {
        let list = [];
        setWidgetList(() => {
            const index = params.detailWidgetIndex.index;
            list = [...widgetList];
            list.splice(index, 1);
            if(index === detailWidgetIndex){
                setDetailWidgetIndex(0);
            }
            setWidgetList(list);
        });
        localStorage.setItem("widgetList", JSON.stringify(list));
    };
    const handleEditClick = () => {
        setIsNew(false)
        setDetailWidgetIndex(params.detailWidgetIndex.index);
        setEditModal(true)
    };
    const handleOpenShowModal = () => {
        setIsNew(true)
        setEditModal(true);
    };
    const handleSaveWidget = () => {
        const arrIndex = [...widgetList];
        let index = arrIndex.findIndex(prop => prop.id === params.detailWidgetIndex.id);
        if(index === undefined) {
            index = arrIndex.length;
            arrIndex[params.detailWidgetIndex.id] = index;
        }
        const newItem = {
            id: params.detailWidgetIndex.id,
            name: params.detailWidgetIndex.name,
            magicNumber: parseInt(params.detailWidgetIndex.magicNumber),
            pairs: [...params.detailWidgetIndex.pairs]
        }
        if(arrIndex[index]){
            arrIndex[index] = newItem;
        } else {
            arrIndex.push(newItem);
            index = arrIndex.length-1;
        }
        setWidgetList(arrIndex);
        setEditModal(false);
        localStorage.setItem("widgetList", JSON.stringify(arrIndex));
        setDetailWidgetIndex(index);
    };
    const buttonsFuncs = {
        handleDetailsClick: handleDetailsClick,
        handleDeleteClick: handleDeleteClick,
        handleEditClick: handleEditClick
    };
    const allWidgets = widgetList.map((prop, key) => {
        return (<WidgetList type="list" {...prop} key={prop.id+ "-" + key}  pairsAmount={5} index={key}>
            <PairsDisplay pairs={widgetList[key].pairs} amount={5}/>
            <CardActions >
                <ActionButtons index={key} {...buttonsFuncs}/>
            </CardActions>
        </WidgetList>);
    });
    return (
        <>
            <SweetAlert
                show={editModal}
                title=""
                showConfirm={true}
                showCancel={true}
                confirmBtnCssClass={classes.button}
                cancelBtnCssClass={classes.button}
                onConfirm={handleSaveWidget}
                onCancel={() => setEditModal(false)}
            >
                <WidgetForms
                    id={isNew ? widgetList.length : widgetList[detailWidgetIndex].id}
                    magicNumber={isNew? 0 : widgetList[detailWidgetIndex].magicNumber}
                    name={isNew ? "" : widgetList[detailWidgetIndex].name}
                    pairs={isNew ? [] : widgetList[detailWidgetIndex].pairs}
                />
            </SweetAlert>
            <Container justify="center" className={classes.root}>
                <Item key={widgetList} className={classes.container + " " + classes.screenHeight} xs={12} md={4} lg={4} >
                    <div className={classes.scrollable}>{allWidgets}</div>
                    <Button  onClick={handleOpenShowModal} className={classes.button}>
                        +
                    </Button>

                </Item>
                <Item  className={classes.container} xs={12} md={8} lg={8} >
                    <WidgetList className={classes.transition} type="single" {...widgetList[detailWidgetIndex]} key={detailWidgetIndex} pairsAmount={-1} index={detailWidgetIndex}  >
                        <PairsDisplay pairs={widgetList[detailWidgetIndex]
                            ? widgetList[detailWidgetIndex].pairs
                            : []} amount={-1}/>
                    </WidgetList>
                </Item>
            </Container>
        </>
    );
}
Widgets.propTypes = {
    widgetList: PropTypes.object,
    detailWidgetIndex: PropTypes.number,
    editModal: PropTypes.object,
}