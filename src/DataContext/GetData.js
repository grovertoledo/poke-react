import React from 'react';

function GetData () {
    const listAPI = "https://pokeapi.co/api/v2/pokemon/?limit=1118";
    const [fetchedData, setFetchedData] = React.useState([]);

    React.useEffect(() => {
        const getData = async () => {
            const response = await fetch(listAPI).then(res => res.json());
            // const data = await response.json();
            setFetchedData(response);
        };
        getData();

    }, []);

    // console.log((fetchedData.results)[0])

    return fetchedData;
};

export { GetData };