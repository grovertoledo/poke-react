import React from 'react';
// import { GetData } from './GetData';

const url ="https://pokeapi.co/api/v2/pokemon/?limit=1118";
const infoUrl ="https://pokeapi.co/api/v2/pokemon/";
const descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/";
const spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function capitalize(i) {
    if (typeof i === "string") {
        const capitalized = i.charAt(0).toUpperCase() + i.slice(1);
        return capitalized;
    } else {
        const capitalized = [];
        i.forEach(element => {
            const capitalizedElement = element.charAt(0).toUpperCase() + element.slice(1);
            capitalized.push(capitalizedElement);
        });
        return capitalized;
    };
}

const DataContext = React.createContext();

function DataProvider(props) {
    // const pokeList = GetData();
    const [pokemons, setPokemons] = React.useState([]);

    const [searchValue, setSearchValue] = React.useState("bulbasaur");

    const[searchText, setSearchText] = React.useState("")

    const [openModal, setOpenModal] = React.useState(true);
    
    const [info, setInfo] = React.useState({
        name: "",
        number: 1,
        img: "",
        types: [],
        description: "",
        evolutionChain: "https://pokeapi.co/api/v2/evolution-chain/1/",
    });

    const [evos, setEvos] = React.useState(
        [{
            species_name: "",
            min_level: 1,
            trigger_name: null,
            item: null
        }, {
            species_name: "ivysaur",
            min_level: 16,
            trigger_name: "level-up",
            item: null
        }, {
            species_name: "venusaur",
            min_level: 36,
            trigger_name: "level-up",
            item: null
        }]
    );

    const [evoSprites, setEvoSprites] = React.useState(
        [
            "",
            "",
            ""
        ]
    )

    React.useEffect(() => {
        setTimeout(() => {
            setOpenModal(false);
        }, 1500);
    }, []);
    
    React.useEffect(() => {
        const fetchPokemons = async () => {
          const response = await fetch(url);
          const data = await response.json();
          setPokemons(data.results);
        };    
    
        fetchPokemons();
    }, []);

    function getImageURL (string) {
        const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
        const extension = ".png";

        if (string.length === 1) {
            return `${url}00${string}${extension}`; 
        } else if (string.length ===2) {
            return `${url}0${string}${extension}`;
        } else {
            return `${url}${string}${extension}`;
        }
    }
    
    React.useEffect(() => {
        const fetchInfo = async () => {
            try {
                const response = await fetch(`${infoUrl}${searchValue}`);
                const data = await response.json();
                const typeArray = data.types;
                const typeElements = typeArray.map((element) => element.type.name);

                const descriptionResponse = await fetch(`${descriptionUrl}${searchValue}`);
                const descriptionData = await descriptionResponse.json();

                const imageURL = getImageURL(String(data.id));
                
                setInfo({
                    name: data.name,
                    number: data.id,
                    img: imageURL,
                    types: typeElements,
                    description: `${descriptionData.genera[3].genus.toUpperCase()} ${capitalize(descriptionData.flavor_text_entries[0].flavor_text.toLowerCase())} ${capitalize(descriptionData.flavor_text_entries[2].flavor_text.toLowerCase())}`,
                    evolutionChain: descriptionData.evolution_chain.url,
                });
                setSearchText("Look up for a pokémon from 894 available!")
            } catch {
                setSearchText("You did not select any pokémon!")
            }
        };
        fetchInfo();
    }, [searchValue]);

    React.useEffect(() => {
        const fetchEvo = async () => {

            const response = await fetch (info.evolutionChain);
            const data = await response.json();
            let evoChain = []
            let evoData = data.chain;

            do {
                const evoDetails = evoData.evolution_details[0];
                const evosNumber = evoData.evolves_to.length;

                evoChain.push({
                    species_name: evoData.species.name,
                    min_level: !evoDetails ? 1 : evoDetails.min_level,
                    trigger_name: !evoDetails ? null : evoDetails.trigger_name,
                    item: !evoDetails ? null : evoDetails.item
                });
                
                if(evosNumber > 1) {
                    for (let i = 1; i < evosNumber; i ++) {
                        evoChain.push ({
                            species_name: evoData.evolves_to[i].species.name,
                            min_level: !evoDetails ? 1 : evoDetails.min_level,
                            trigger_name: !evoDetails ? null : evoDetails.trigger_name,
                            item: !evoDetails ? null : evoDetails.item
                        })
                    };
                    if (evoData.evolves_to[1].evolves_to[0]) {
                        const secondEvolution = evoData.evolves_to[1].evolves_to[0];
                        evoChain.push({
                            species_name: secondEvolution.species.name,
                            min_level: !evoDetails ? 1 : evoDetails.min_level,
                            trigger_name: !evoDetails ? null : evoDetails.trigger_name,
                            item: !evoDetails ? null : evoDetails.item
                        })
                    }
                };
                
                evoData = evoData.evolves_to[0];
            } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
            
            setEvos(evoChain);
        };
        fetchEvo();
    }, [info.evolutionChain, pokemons]);
    
    React.useEffect(() => {
        let UrlSprites = [];

        const getSprites = () =>{
            evos.forEach(evo => {
                const spriteIndex = (pokemons.indexOf(pokemons.find(element => element.name === evo.species_name)));
                const evoSpriteURL = `${spriteUrl}${spriteIndex+1}.png`;
                UrlSprites.push(evoSpriteURL);
            });
            setEvoSprites(UrlSprites);
        };
        getSprites();
    }, [evos, pokemons]);
    
    const providerValue = {
        pokemons,
        setPokemons,
        searchValue,
        setSearchValue,
        info,
        setInfo,
        evos,
        evoSprites,
        capitalize,
        openModal,
        searchText
    };

    return (
        <DataContext.Provider value={providerValue}>
            {props.children}
        </DataContext.Provider>
    )
}

<DataContext.Consumer></DataContext.Consumer>

export { DataContext, DataProvider };