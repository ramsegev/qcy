import { createContext } from "react";
const Params = createContext({
    detailWidgetIndex: {
        index: -1,
        id: -1,
        magicNumber: 0,
        name: "",
        pairs: [{key: "", value: ""}],
        setIndex: function(index) {
            this.index = index
        },
        setId: function(id) {
            this.id = parseInt(id);
        },
        setPairs: function(pairs) {
            this.pairs = pairs
        },
        setMagicNumber: function(magicNumber) {
            this.magicNumber = parseInt(magicNumber);
        },
        setName: function(name) {
            this.name = name
        }
    },
    widgetList: typeof localStorage.getItem("widgetList") === "string" ? JSON.parse(localStorage.getItem("widgetList")) : []
});

export{
    Params
}