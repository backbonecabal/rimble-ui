function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from '../Portal';
import Box from '../Box';
var StyledOverlay = /*#__PURE__*/styled(Box).withConfig({
  displayName: "Modal__StyledOverlay",
  componentId: "sc-5jx9xy-0"
})(["&{position:fixed;top:0;bottom:0;left:0;right:0;z-index:9999;height:100vh;width:100vw;display:flex;flex-flow:column;place-items:center;place-content:center;}"]);
StyledOverlay.defaultProps = {
  bg: 'blacks.10',
  color: 'text',
  fontSize: '2',
  fontFamily: 'sansSerif',
  p: 3
};

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));

    _this.closeModal = function (e) {
      e.preventDefault();

      _this.setState(function (state, props) {
        return {
          isOpen: false
        };
      });
    };

    _this.openModal = function (e) {
      e.preventDefault();

      _this.setState(function (state, props) {
        return {
          isOpen: true
        };
      });
    };

    _this.state = {
      isOpen: _this.props.isOpen || false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      return React.createElement(Portal, null, React.createElement(StyledOverlay, null, this.props.children));
    }
  }]);

  return Modal;
}(Component);

Modal.defaultProps = {
  isOpen: false
};
Modal.propTypes = {
  /**
   * Shows the content of the Modal when true
   */
  isOpen: PropTypes.bool
};
Modal.displayName = 'Modal';
export { StyledOverlay as ModalBackdrop };
export default Modal;