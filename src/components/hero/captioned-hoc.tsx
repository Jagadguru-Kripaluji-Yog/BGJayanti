/* eslint-disable  */
/// @ts-nocheck
import React, { Component } from "react";
import PropTypes from "prop-types";

export default function CaptionedHoc(WrappedComponent: any) {
  return class extends Component {
    static propTypes = {
      screens: PropTypes.array.isRequired,
    };

    renderScreens() {
      return this.props.screens.map((screen, index) => (
        <div
          key={`${this.props.name}-screen-${index}`}
          data-src={screen.media}
          style={{
            backgroundColor: screen.backgroundColor,
          }}
        >
          <div data-type="caption" style={screen.captionStyles}>
            <p style={screen.captionTextStyles}>{screen.caption}</p>
          </div>
        </div>
      ));
    }

    render() {
      return (
        <WrappedComponent {...this.props}>
          {this.renderScreens()}
        </WrappedComponent>
      );
    }
  };
}
