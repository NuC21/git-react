import React, {Component} from 'react';


class Species extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            hamsters: [
                {
                    id: 0,
                    name: "Russian Campbell",
                    image: "/assets/images/cambham.png",
                    featured: false,
                    description: "This hamster is only about 4 inches long and can be found in the the most variety of colours."
                },
                {
                    id: 1,
                    name: "Russian Winter White",
                    image: "/assets/images/winterwhite.png",
                    featured: false,
                    description: "Smaller than the Campbell, at about 3 and a half inches long. Comes in only five colors: Normal, sapphire, normal pearl, sapphire pearl and mottled."
                },
                {
                    id: 2,
                    name: "Roborovski",
                    image: "/assets/images/hameats.png",
                    featured: true,
                    description: "The smallest of the hamsters & the FASTEST! Therefore, not recommended as a pet for young children. Colors are only brownish/whitish."
                },
                {
                    id: 3,
                    name: "Chinese",
                    image: "/assets/images/babychinese.png",
                    featured: false,
                    description: "Very uncommon & for a dwarf, large at 5 inches, these Rat-like hamsters have a much longer tail. They come in only 2 colors."
                }
            
            ], 
        };
    }

    render() {
        const species = this.state.hamsters.map(hamster => {  
            return (
            
                <div key={hamster.id} className="col">
                    <img src={hamster.image} alt={hamster.name} />
                    <h2>{hamster.name}</h2>
                    <p>{hamster.description}</p>
                </div>
            );
        });

        return (
           <div className="container">

                <div className="row row-content">
                    <div className="col-12">
                    <h1>Species of Dwarf Hamsters</h1>
                    </div>
                </div>
                <div className="row">
                    {species}
                </div>
            </div>
        );
    }
}

export default Species;