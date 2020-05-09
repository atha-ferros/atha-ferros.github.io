(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Heading = __webpack_require__(88);

var _Heading2 = _interopRequireDefault(_Heading);

var _Content = __webpack_require__(90);

var _Content2 = _interopRequireDefault(_Content);

__webpack_require__(92);

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

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(89);

var _images = __webpack_require__(6);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading(props) {
    return _react2.default.createElement(
        'div',
        { className: 'heading-container' },
        _react2.default.createElement('img', { src: _images2.default.Gallery }),
        _react2.default.createElement(
            'h1',
            null,
            'Gallery'
        )
    );
};

exports.default = Heading;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(91);

var _images = __webpack_require__(6);

var _images2 = _interopRequireDefault(_images);

var _Carousel = __webpack_require__(53);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _reactFeather = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideContent = [{
    heading: 'PROMISING. OVERWHELMING.',
    description: 'Imagined to suit all, onyx mall is a one-stop choice when it comes to space, functionality & purpose.',
    img: _images2.default.Gallery1
},
// {
//     heading: 'MAGNIFICIENT ENTRANCE',
//     description: 'Eqipped with automatic sensor gates, air-conditioned (HVAC), Hi-end interiors, escalators, automatic lifts.',
//     img: Images.Gallery2
// },
{
    heading: 'ANCHOR SHOWROOMS, SMALL & MEDIUM RETAIL SPACES',
    description: 'An option to customize your space accompanied by an exclusive designer lobby.',
    img: _images2.default.Gallery3
}, {
    heading: 'SPACES TO REDEFINE YOUR ENTERPRISE',
    description: 'With optimum floor-to-ceiling height, your brand gets maximum visibility.',
    img: _images2.default.Gallery4
}, {
    heading: 'WELL-PLANNED FOOD COURT',
    description: 'There’s an integrated dining area with a well designed shop periphery and a children’s arcade for their entertainment.',
    img: _images2.default.Gallery5
}, {
    heading: 'WELL-PLANNED FOOD COURT',
    description: 'There’s an integrated dining area with a well designed shop periphery and a children’s arcade for their entertainment.',
    img: _images2.default.Gallery6
}, {
    heading: 'WELL-PLANNED FOOD COURT',
    description: 'There’s an integrated dining area with a well designed shop periphery and a children’s arcade for their entertainment.',
    img: _images2.default.Gallery7
}, {
    heading: 'WELL-PLANNED FOOD COURT',
    description: 'There’s an integrated dining area with a well designed shop periphery and a children’s arcade for their entertainment.',
    img: _images2.default.Gallery8
}];

var Slide = function Slide() {
    return SlideContent.map(function (item) {
        return _react2.default.createElement(
            'div',
            { className: 'slide-container' },
            ' ',
            _react2.default.createElement('img', { src: item.img }),
            ' '
        );
    });
};

var Content = function Content(props) {
    return _react2.default.createElement(
        'div',
        { className: 'content-container max-width-container' },
        _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                'span',
                { className: 'red' },
                '\u201CA team that works together, stays together.\u201D'
            ),
            ' We work together, across',
            _react2.default.createElement('br', null),
            ' boundaries to meet the needs of our customers and to help the company win. In',
            _react2.default.createElement('br', null),
            ' Reid Garrett Hoffman\u2019s words, \u201CNo matter how brilliant your mind or strategy is, if',
            _react2.default.createElement('br', null),
            ' you are playing a solo game, you\u2019ll always lose out to a team.\u201D'
        ),
        _react2.default.createElement(_Carousel2.default, {
            slides: Slide(),
            loop: true, prev_button: _react2.default.createElement(_reactFeather.ArrowLeft, { color: '#837E6C' }),
            next_button: _react2.default.createElement(_reactFeather.ArrowRight, { color: '#837E6C' }),
            customClassName: 'gallery',
            dotsClassName: 'gallery-dot'
        })
    );
};

exports.default = Content;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);