
let StartFunc = async ({ inData }) => {
    let LocalData = inData[0];
    console.log("local data: ",LocalData);
    jFLocalToInputOrderId({ inValue: LocalData.pk })
};


let jFLocalToInputOrderId = ({inValue}) => {
    let jVarLocalHtmlId = 'OrderId';
   let jVarLocalOrderId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalOrderId === null === false) {
    jVarLocalOrderId.innerHTML = inValue;
   };
};


export { StartFunc }