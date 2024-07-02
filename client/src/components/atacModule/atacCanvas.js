import React, { createRef } from 'react';
import igv from 'igv';

var igvStyle = {
    border: '1px solid lightgray',
    backdropColor:'white',
    height:'38vh'
}
class ATACCanvas extends React.Component{

    constructor(props) {
        super(props)
        // Declare reference object for the dom node that will contain the igv.js component
        this.container = createRef(null);
    }

    componentDidMount() {
        // Create the igv.js component.
        const config = {
            reference: "hg38",
            locus: "myc",
            tracks: [
                {
                    name: "BigWig",
                    url: "http://localhost:5005/get_atac_tracks",
                    color: "rgb(0,100,0)",
                    type: "wig",
                    format: "bigwig"
                },
            ]
        }
        return igv.createBrowser(this.container.current, config);
    }

      render() {
        // Return the div that will contain igv.js
          return (
            <div ref={this.container}  style={igvStyle}></div>
          );
      }
}

export default ATACCanvas