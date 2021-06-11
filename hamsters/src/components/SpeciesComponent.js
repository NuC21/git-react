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
                    description: "This hamster is only about 4 inches long and can be found in different colours."
                },
                {
                    id: 1,
                    name: "Russian Winter White",
                    image: "/assets/images/winterwhite.png",
                    featured: false,
                    description: "This hamster is a little smaller than the Campbell, being about 3 and a half inches long. It only comes in five colors currently - Normal, sapphire, normal pearl, sapphire pearl and mottled."
                },
                {
                    id: 2,
                    name: "Roborovski",
                    image: "/assets/images/hameats.png",
                    featured: true,
                    description: "This is the smallest of the hamsters and is also the fastest. Therefore, it is not recommended as a pet for young children. It comes in only a few brownish/white colors."
                },
                {
                    id: 3,
                    name: "Chinese",
                    image: "/assets/images/babychinese.png",
                    featured: false,
                    description: "Relatively uncommon and large at 5 inches to be called a Dwarf, these Rat-like hamsters have a much longer tail than the other pet hamsters. They come in only 2 colors."
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
                    <h3>Species of Dwarf Hamsters</h3>
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