import {Button, Dialog} from "@blueprintjs/core";
import React from "react";
import MultiDisplayCanvas from "./multiDisplayCanvas";

const MultiDisplayStyle = {
    width:'80vw',
    height: '900px',
    background:'white'
};


const MultiDisplayContainer = (props) => {
    return (
        <div>
            <Button text={props.multiDisplayState ? 'Hide Multi Display' : 'Show Multi Display'} onClick={() => {props.showMultiDisplay('open')}}/>
            <Dialog isOpen={props.multiDisplayState} onClose={ () => {props.showMultiDisplay('close')}} title="Multi Mapping View" icon="info-sign" style={MultiDisplayStyle} lazy>
                <MultiDisplayCanvas />
            </Dialog>
        </div>
    )
}

class MultiDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multiDisplayState: false
        };
    }

    closeCanvas = ()  => {
        let canvasEle = document.getElementsByTagName('canvas');
        console.log(canvasEle);
        console.log('out closes')
        const canvasArray = Array.from(canvasEle);
          canvasArray.forEach(canvas => {
            console.log(canvas)
            if (canvas.parentNode && canvas.id !== 'main-canvas') {
              canvas.parentNode.removeChild(canvas);
            }
          });
    }
    showMultiDisplay = (prop) => {
        this.setState(prev => ({
            multiDisplayState: !prev.multiDisplayState
        }));
        if(prop === 'close'){
            this.closeCanvas();
        }
    }

    render() {
        return (
            <MultiDisplayContainer showMultiDisplay={this.showMultiDisplay} multiDisplayState={this.state.multiDisplayState}/>
        )
    }
}

export default MultiDisplay