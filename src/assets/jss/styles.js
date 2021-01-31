const root = {
    width: "100%",
    display: "flex",
    justifyContent: "center"
};
const container = {
    border: "0",
    padding: "15px",
    height: "auto",
    overflow: "auto",
    borderRadius: "6px",
    background: "#ffffff",
    width: "100%",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    margin: "20px auto"

};
const screenHeight = {
    height: "100vh"
}
const scrollable = {
    height: "100vh",
    overflowY: "scroll"
};
const transition = {
    transition: ".3s cubic-bezier(.3, 0, 0, 1.3)"
};

const cardStyle = {
    card: {
        position: "relative",
        backgroundColor: "#fff",
        height: "auto",
        width: "320px",
        margin: " 5px auto",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
        overflow: "hidden",

        "&:hover": {
            boxShadow: "0px 30px 30px rgba(0,0,0,0.2)",
            width: "330px",
            ...transition,
            "&:before": {
                borderRadius: "0",
                marginTop: "-260px",
            },
            "& h2": {
                ...transition,
                marginTop: "70px",
                marginBottom: "70px",
                color: "#fff",
            },
            "& .ctaContainer": {
                ...transition,
                fontSize: "20px",
                fontWeight: "bold"
            },
        },
        "&:before": {
            content: "''",
            position: "absolute",
            height: "400px",
            width: "450px",
            backgroundColor: "#2196F3",
            borderRadius: "50%",
            marginLeft: "-75px",
            marginTop: "-300px",
            ...transition,
        }
    },
    h2: {
        textAlign: "center",
        marginTop: "130px",
        zIndex: "9999",
        fontSize: "26px",
        color: "#2196F3",
        width: "100%",
        fontFamily: "'Noto Sans', serif",
    },
    ctaContainer: {
        textAlign: "center",
        zIndex: "9999",
        width: "100%",
        fontFamily: "'Noto Sans', serif",
    },
    button: {
        width: "fit-content",
        color: "#fff",
        border: "2px solid #2196F3",
        backgroundColor: "#2196F3",
        padding: "10px 25px",
        borderRadius: "50px",
        fontSize: "1em",
        textDecoration: "none",
        fontWeight: "bold",
        "&:hover ": {
            backgroundColor: "#fff",
            color: "#2196F3",
        },
    }
};

const pairsDisplay = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
}
const single = {
    singleCard: {
        width: "100%",
        textAlign: "center",
    },
    singleH2: {
        fontSize: "4em"
    },
    singleCtaContainer: {
        fontSize: "2em"
    }
}
const form = {
    backgroundColor: "#ffffff"
};
const itemsForm = {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px"
}

export {
    root,
    container,
    transition,
    pairsDisplay,
    cardStyle,
    single,
    scrollable,
    itemsForm,
    form,
    screenHeight
}
