import {ButtonGroup} from "@blueprintjs/core";
import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import styles from "../menubar/menubar.css";
import ATAC from "../atacModule/atacContainer";
import MultiDisplay from "../multiDisplayModule/multiDisplay";

const ExtensionController = (props) => {

    console.log(JSON.stringify(props.config, null, 2))
    const [ATACTrack, setATACTrack] = useState(false);
    const [multiDisplayAvailable, setMultiDisplayAvailable] = useState(false);

    useEffect(() => {
        if (props.config.atac_track !== 'None'){
            // setATACTrack(true)
            setATACTrack(false)
        }
        if (props.config.displayNames.engine === 'Muon Adaptor'){
            setMultiDisplayAvailable(false)
        }
    }, []);

    return (
        <div>
            <ButtonGroup className={styles.menubarButton}>
                {ATACTrack ? <ATAC /> : null}
                {multiDisplayAvailable ? <MultiDisplay /> : null}
            </ButtonGroup>
        </div>
    )
}

const mapStateToProps = (state) => ({
    config: state.config,
});

export default connect(mapStateToProps)(ExtensionController);