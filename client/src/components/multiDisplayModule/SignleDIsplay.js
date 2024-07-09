import React from "react";
import * as globals from "../../globals";

class SingleDisplay extends React.Component {
  /*
    Layout - this react component contains all the layout style and logic for the application once it has loaded.

    The layout is based on CSS grid: the left and right sidebars have fixed widths, the graph in the middle takes the
    remaining space.

    Note, the renderGraph child is a function rather than a fully-instantiated element because the middle pane of the
    app is dynamically-sized. It must have access to the containing viewport in order to know how large the graph
    should be.
  */

  render() {
    const { children } = this.props;
    const renderGraph = children;
    return (
      <div
        style={{
          display: "block",
          columnGap: "0px",
          justifyItems: "stretch",
          alignItems: "stretch",
          height: "inherit",
          position: "relative",
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            zIndex: 0,
            gridArea: "top / graph-start / bottom / graph-end",
            position: "relative",
            height: "inherit",
          }}
          ref={(ref) => {
            this.viewportRef = ref;
          }}
        >
          {this.viewportRef ? renderGraph(this.viewportRef) : null}
        </div>
      </div>
    );
  }
}

export default SingleDisplay;
