import { StartFunc as StartFuncButtonClickFunc } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    let jVarLocalSalesRef = document.getElementById("CustomerNumber");

    if (jVarLocalSalesRef === null === false) {
        jVarLocalSalesRef.addEventListener("keypress", (event) => {
            if (event.keyCode === 13) {
                StartFuncButtonClickFunc();
            }
        });
    };
};

export { StartFunc };