let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Accounts/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);
    
    return await response;
};

export { StartFunc };

