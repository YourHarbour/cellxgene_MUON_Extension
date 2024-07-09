import React, { useEffect, useRef} from 'react';
import igv from 'igv';

var igvStyle = {
    border: '1px solid lightgray',
    backdropColor:'white',
    height:'38vh'
}

const ATACCanvas = () => {

    console.log(igv)
    const container = useRef(null)
    const config = {
            reference: "hg38",
            locus: "myc",
            tracks: [
                {
                    name: "BigWig",
                    url: "http://localhost:5005/get_atac_tracks_apple",
                    color: "rgb(0,100,0)",
                    type: "wig",
                    format: "bigwig"
                },
            ]
        }
    useEffect(() => {
        // const igv = window.igv
        igv.createBrowser(container.current, config);
    }, []);

    return (
        <div ref={container} style={igvStyle}></div>
    )
}

// class ATACCanvas extends React.Component {
//
//
//     constructor(props) {
//         super(props)
//         // Declare reference object for the dom node that will contain the igv.js component
//         this.container = createRef(null);
//         this.igv = window.igv
//     }
//
//     componentDidMount() {
//         // Create the igv.js component.
//         const config = {
//             reference: "hg38",
//             locus: "myc",
//             tracks: [
//                 {
//                     name: "BigWig",
//                     url: "http://localhost:5005/get_atac_tracks",
//                     color: "rgb(0,100,0)",
//                     type: "wig",
//                     format: "bigwig"
//                 },
//             ]
//         }
//
//         this.igv.createBrowser(this.container.current, config);
//     }
//
//     render() {
//         // Return the div that will contain igv.js
//         return (
//             <div ref={this.container}  style={igvStyle}></div>
//         );
//     }
// }

export default ATACCanvas