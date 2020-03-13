(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Heading = __webpack_require__(81);

var _Heading2 = _interopRequireDefault(_Heading);

var _Content = __webpack_require__(83);

var _Content2 = _interopRequireDefault(_Content);

__webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact(props) {
        _classCallCheck(this, Contact);

        var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

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


    return Contact;
}(_react2.default.Component);

exports.default = Contact;

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

var Heading = function Heading(props) {
    return _react2.default.createElement(
        'div',
        { className: 'heading-container' },
        _react2.default.createElement(
            'h1',
            null,
            'Contact Us'
        )
    );
};

exports.default = Heading;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(84);

var _googleMapReact = __webpack_require__(85);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnyReactComponent = function AnyReactComponent(_ref) {
    var text = _ref.text;
    return _react2.default.createElement(
        'div',
        null,
        text
    );
};

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content(props) {
        _classCallCheck(this, Content);

        var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {}
        // let uluru = {
        //     lat: -25.344, 
        //     lng: 131.036
        // };
        // // The map, centered at Uluru
        // let map = new google.maps.Map( document.getElementById('map'), {zoom: 4, center: uluru} );
        // // The marker, positioned at Uluru
        // let marker = new google.maps.Marker({position: uluru, map: map});


        /* This method determines whether the component should be updated or not.
        By default, it’ll return true. 
        If at some point, if you want to re-render the component on a condition, then shouldComponentUpdate() method would be the correct choice */

        ;

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
                { className: 'content-container max-width-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'flex' },
                    _react2.default.createElement(
                        'div',
                        { style: { height: '500px', width: '50%' } },
                        _react2.default.createElement(
                            _googleMapReact2.default,
                            {
                                bootstrapURLKeys: { key: 'AIzaSyD385Il76hgVlOJHxnqHT5J8-YyUkmGR_g' },
                                defaultCenter: _this.props.center,
                                defaultZoom: _this.props.zoom
                            },
                            _react2.default.createElement(AnyReactComponent, {
                                lat: 59.955413,
                                lng: 30.337844,
                                text: 'My Marker'
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'address' },
                        _react2.default.createElement(
                            'h5',
                            null,
                            'ASTHA FERROTECH PVT LTD,'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'B-2, NEAR INDUSTRIAL ESTATE, ADITYAPUR INDUSTRIAL AREA, ADITYAPUR-832109.'
                        )
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('div', { className: 'hr' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'div',
                    { className: 'flex lower-contact' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h5',
                            null,
                            'FAX'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'h5',
                            { className: 'black' },
                            '0657-2200106'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h5',
                            null,
                            'PHONE NO.'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'h5',
                            { className: 'black' },
                            '0657-2200141',
                            _react2.default.createElement('br', null),
                            '0657-2200731'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h5',
                            null,
                            'OFFICE CELL'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'h5',
                            { className: 'black' },
                            '+91 93040 21 627'
                        )
                    )
                )
            );
        };

        return _this;
    }

    /* This method is called just prior to component mounting on the DOM (or when the render method is called). Then our component gets mounted. */

    /* This method is called after the component is mounted on the DOM. Like componentWillMount(), it is called only once in a lifecycle.
    Before its execution, the render method is called. We can make API calls and update the state with the API response */

    /* We call this method after the re-rendering our component.
    After the updated component gets updated on the DOM, the componentDidUpdate() method executes. This method will receive arguments like prevProps and prevState */

    /* Before the removal of the component from the DOM, componentWillUnMount() will execute */

    /* render is called to paint the dom */


    return Content;
}(_react2.default.Component);

Content.defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
};
exports.default = Content;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);