import React from "react";
import Embedding from "../embedding";
import Legend from "../continuousLegend";
import AlterGraph from "../graph/AlterGraph";
import SingleDisplay from "./SignleDIsplay";
import EmbeddingAlter from "../embedding/inexAlter";

class MultiDisplayCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{
                display:"flex",
                flexDirection:"row"
            }}>
                <div
                    style={{
                        height:"860px",
                        width:"50%"
                    }}
                >
                    <SingleDisplay>
                        {(viewportRef) => (
                          <>
                            <Embedding />
                            <Legend viewportRef={viewportRef} />
                            <AlterGraph key={1} viewportRef={viewportRef} currentDisplayWindow={0}/>
                          </>
                        )}
                    </SingleDisplay>
                </div>
                <div style={{
                    height:"860px",
                    width:"2px",
                    backgroundColor:'#000'
                }} />
                <div style={{
                    height:"860px",
                    width:"50%"
                }}>
                    <SingleDisplay>
                        {(viewportRef) => (
                          <>
                            <EmbeddingAlter />
                            <Legend viewportRef={viewportRef} />
                            <AlterGraph key={2} viewportRef={viewportRef} currentDisplayWindow={1}/>
                          </>
                        )}
                    </SingleDisplay>
                </div>
            </div>
        )
    }

}

export default MultiDisplayCanvas