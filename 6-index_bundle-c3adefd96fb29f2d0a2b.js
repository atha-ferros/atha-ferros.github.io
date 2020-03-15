(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Heading = __webpack_require__(79);

var _Heading2 = _interopRequireDefault(_Heading);

var _Content = __webpack_require__(81);

var _Content2 = _interopRequireDefault(_Content);

__webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_React$Component) {
    _inherits(Gallery, _React$Component);

    function Gallery(props) {
        _classCallCheck(this, Gallery);

        var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {};

        _this.shouldComponentUpdate = function (nextProps, nextState) {
            return true;
        };

        _this.componentDidUpdate = function (prevProps, prevState) {
            return true;
        };

        _this.componentWillUnmount = function () {};

        _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'initiative-container' },
                _react2.default.createElement(_Heading2.default, null),
                _react2.default.createElement(_Content2.default, null)
            );
        };

        return _this;
    }

    /* This method is called just prior to component mounting on the DOM (or when the render method is called). Then our component gets mounted. */

    /* This method is called after the component is mounted on the DOM. Like componentWillMount(), it is called only once in a lifecycle.
    Before its execution, the render method is called. We can make API calls and update the state with the API response */

    /* This method determines whether the component should be updated or not.
    By default, it’ll return true. 
    If at some point, if you want to re-render the component on a condition, then shouldComponentUpdate() method would be the correct choice */

    /* We call this method after the re-rendering our component.
    After the updated component gets updated on the DOM, the componentDidUpdate() method executes. This method will receive arguments like prevProps and prevState */

    /* Before the removal of the component from the DOM, componentWillUnMount() will execute */

    /* render is called to paint the dom */


    return Gallery;
}(_react2.default.Component);

exports.default = Gallery;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading(props) {
    return _react2.default.createElement(
        'div',
        { className: 'heading-container' },
        _react2.default.createElement(
            'h1',
            null,
            'Gallery'
        )
    );
};

exports.default = Heading;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(props) {
    return _react2.default.createElement(
        'div',
        { className: 'content-container max-width-container' },
        'Ferro Alloys are primarily used in steel making as a deoxidant and alloying agent. The mammoth hike in Steel metallurgy has perhaps been the greatest factor in contributing towards the rapid strides our civilization has taken in the last century. It has now been widely accepted by the Steel Industries and the Government of India that Ferro Alloys do and would continue to play a key and definitive role in scaling up steel production to 300 mtpa by 2030 and therefore, in the development of the country on a broader front.',
        _react2.default.createElement(
            'h5',
            null,
            'WE ARE CARBON NEUTRAL AND FUTURE POSITIVE'
        ),
        'So we decided to ditch the power-intensive, electric-arc furnace, in favour of the ',
        _react2.default.createElement(
            'b',
            null,
            'aluminothermic process of reduction that has negligible carbon footprint. Because we care about a sustainable and eco-friendly future.'
        ),
        ' Besides, this has helped us combat problems of inefficient generation and distribution of power, thereby reducing our cost of production, and helping us retain our competitive advantage over time.'
    );
};

exports.default = Content;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);