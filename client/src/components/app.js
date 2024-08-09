import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";

import Container from "./framework/container";
import Layout from "./framework/layout";
import LeftSideBar from "./leftSidebar";
import RightSideBar from "./rightSidebar";
import Legend from "./continuousLegend";
import Graph from "./graph/graph";
import MenuBar from "./menubar";
import Autosave from "./autosave";
import Embedding from "./embedding";

import actions from "../actions";
import MultiLayout from "./framework/multiLayout";
import AlterGraph from "./graph/AlterGraph";
import EmbeddingAlter from "./embedding/inexAlter";

@connect((state) => ({
  loading: state.controls.loading,
  error: state.controls.error,
  graphRenderCounter: state.controls.graphRenderCounter,
  config: state.config
}))
class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    /* listen for url changes, fire one when we start the app up */
    window.addEventListener("popstate", this._onURLChanged);
    this._onURLChanged();

    dispatch(actions.doInitialDataLoad(window.location.search));
    this.forceUpdate();
  }

  _onURLChanged() {
    const { dispatch } = this.props;

    dispatch({ type: "url changed", url: document.location.href });
  }

  render() {
    const { loading, error, graphRenderCounter, config } = this.props;
    // console.log(config)
    return (
      <Container>
        <Helmet title="CELL&times;GENE | Annotate" />
        {loading ? (
          <div
            style={{
              position: "fixed",
              fontWeight: 500,
              top: window.innerHeight / 2,
              left: window.innerWidth / 2 - 50,
            }}
          >
            loading cellxgene
          </div>
        ) : null}
        {error ? (
          <div
            style={{
              position: "fixed",
              fontWeight: 500,
              top: window.innerHeight / 2,
              left: window.innerWidth / 2 - 50,
            }}
          >
            error loading cellxgene
          </div>
        ) : null}
        {loading || error ? null : (
            config.displayNames.engine === "Muon Adaptor" ? <MultiLayout>
              <LeftSideBar />
              {(viewportRef) => (
              <>
                <MenuBar />
                <Embedding />
                <Autosave />
                <Legend viewportRef={viewportRef} />
                <Graph key={graphRenderCounter} viewportRef={viewportRef} />
              </>
            )}
              {(viewportRef1) => (
                <>
                  <EmbeddingAlter />
                  <Legend viewportRef={viewportRef1} />
                  <AlterGraph key={1} viewportRef={viewportRef1} currentDisplayWindow={1}/>
                </>
              )}
              <RightSideBar />
            </MultiLayout> :
          <Layout>
            <LeftSideBar />
            {(viewportRef) => (
              <>
                <MenuBar />
                <Embedding />
                <Autosave />
                <Legend viewportRef={viewportRef} />
                <Graph key={graphRenderCounter} viewportRef={viewportRef} />
              </>
            )}
            <RightSideBar />
          </Layout>
        )}
      </Container>
    );
  }
}

export default App;
