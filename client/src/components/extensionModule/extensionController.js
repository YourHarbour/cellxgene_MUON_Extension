import {ButtonGroup} from "@blueprintjs/core";
import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import styles from "../menubar/menubar.css";
import ATAC from "../atacModule/atacContainer";

const ExtensionController = (props) => {

    console.log(JSON.stringify(props.config, null, 2))
    const [ATACTrack, setATACTrack] = useState(false);

    useEffect(() => {
        if (props.config.atac_track !== 'None'){
            setATACTrack(true)
        }
    }, []);

    return (
        <div>
            <ButtonGroup className={styles.menubarButton}>
                {ATACTrack ? <ATAC /> : null}
            </ButtonGroup>
        </div>
    )
}

const mapStateToProps = (state) => ({
    config: state.config,
});

export default connect(mapStateToProps)(ExtensionController);