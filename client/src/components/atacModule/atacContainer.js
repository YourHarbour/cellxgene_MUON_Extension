import React from "react";
import {Button, Dialog} from "@blueprintjs/core";
import ATACCanvas from "./atacCanvas";
import './ATAC.css'

const ATACStyle = {
    width:'80vw',
    height: '40vh',
    background:'white'
};
const AtacContainer = (props) => {
    return (
        <div>
            <Button text={props.ATACState ? 'Hide ATAC Track' : 'Show ATAC Track'} onClick={props.showATAC}/>
            <Dialog isOpen={props.ATACState} onClose={props.showATAC} title="ATAC Track" icon="info-sign" style={ATACStyle} lazy>
                <ATACCanvas />
            </Dialog>
        </div>
    )
}

class ATAC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ATACState: false
        };
    }

    showATAC = () => {
        this.setState(prev => ({
            ATACState: !prev.ATACState
        }))
    }

    render() {
        return (
            <AtacContainer showATAC={this.showATAC} ATACState={this.state.ATACState}/>
        )
    }
}

export default ATAC