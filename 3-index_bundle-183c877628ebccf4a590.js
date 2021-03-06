(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],Array(19).concat([
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(22);

var _Section = __webpack_require__(23);

var _Section2 = _interopRequireDefault(_Section);

var _About = __webpack_require__(35);

var _About2 = _interopRequireDefault(_About);

var _Growth = __webpack_require__(37);

var _Growth2 = _interopRequireDefault(_Growth);

var _MDSpeaks = __webpack_require__(41);

var _MDSpeaks2 = _interopRequireDefault(_MDSpeaks);

var _Overview = __webpack_require__(43);

var _Overview2 = _interopRequireDefault(_Overview);

var _Products = __webpack_require__(45);

var _Products2 = _interopRequireDefault(_Products);

var _Org = __webpack_require__(47);

var _Org2 = _interopRequireDefault(_Org);

var _Client = __webpack_require__(49);

var _Client2 = _interopRequireDefault(_Client);

var _Footer = __webpack_require__(51);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

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
                { className: 'home-page-container' },
                _react2.default.createElement(_Section2.default, null),
                _react2.default.createElement(_About2.default, null),
                _react2.default.createElement(_Growth2.default, null),
                _react2.default.createElement(_MDSpeaks2.default, null),
                _react2.default.createElement(_Overview2.default, null),
                _react2.default.createElement(_Products2.default, null),
                _react2.default.createElement(_Org2.default, null),
                _react2.default.createElement(_Client2.default, null),
                _react2.default.createElement(_Footer2.default, null)
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


    return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _section1Bg = __webpack_require__(25);

var _section1Bg2 = _interopRequireDefault(_section1Bg);

var _about = __webpack_require__(26);

var _about2 = _interopRequireDefault(_about);

var _growth = __webpack_require__(27);

var _growth2 = _interopRequireDefault(_growth);

var _vision = __webpack_require__(28);

var _vision2 = _interopRequireDefault(_vision);

var _mission = __webpack_require__(29);

var _mission2 = _interopRequireDefault(_mission);

var _core = __webpack_require__(30);

var _core2 = _interopRequireDefault(_core);

var _product = __webpack_require__(31);

var _product2 = _interopRequireDefault(_product);

var _md = __webpack_require__(32);

var _md2 = _interopRequireDefault(_md);

var _org = __webpack_require__(33);

var _org2 = _interopRequireDefault(_org);

var _client = __webpack_require__(34);

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    section1_bg: _section1Bg2.default,
    about: _about2.default,
    growth: _growth2.default,
    vision: _vision2.default,
    mission: _mission2.default,
    core: _core2.default,
    product: _product2.default,
    md: _md2.default,
    org: _org2.default,
    client: _client2.default
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(24);

var _images = __webpack_require__(21);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section1 = function (_React$Component) {
    _inherits(Section1, _React$Component);

    function Section1(props) {
        _classCallCheck(this, Section1);

        var _this = _possibleConstructorReturn(this, (Section1.__proto__ || Object.getPrototypeOf(Section1)).call(this, props));

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
                { className: 'section1-container' },
                _react2.default.createElement(
                    'h1',
                    { className: 'heading' },
                    'Welcome to',
                    _react2.default.createElement('br', null),
                    'our World of Alloyage'
                )
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


    return Section1;
}(_react2.default.Component);

exports.default = Section1;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/section1-bg-623972fa75302eee5b7098e3db53cb95.jpg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/about-a5ca1a821928664cdd599dca655115a0.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/growth-b324b73059bc3ac5fcc6d444a4466c35.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/vision-9f223e2c379b5d4aa01531666fafeb23.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/mission-944bb9fc39c5b65fe2c5cbdb668522e9.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/core-04e7f4400e9c88b7df661e21fb2062b5.jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/product-2d3800487492ce84e0bebacb58d5064b.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/md-7b3566f7e33a1bff7492e9e88cbd888e.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/org-04cdef40cbda100db25ea4af78268a7a.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/assets/images/client-119b1ead455d715d0a0ca326fa6e4ff5.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(36);

var _images = __webpack_require__(21);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section2 = function (_React$Component) {
    _inherits(Section2, _React$Component);

    function Section2(props) {
        _classCallCheck(this, Section2);

        var _this = _possibleConstructorReturn(this, (Section2.__proto__ || Object.getPrototypeOf(Section2)).call(this, props));

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
                { className: 'section2-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'left-section' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'ABOUT US'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Astha Ferrotech Pvt Ltd is a professionally managed organization that has been recognized as a leading manufacturer of Low Carbon & Medium Carbon Ferro Alloys including Noble Alloys.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'right-section' },
                    _react2.default.createElement('img', { src: _images2.default.about })
                )
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


    return Section2;
}(_react2.default.Component);

exports.default = Section2;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(38);

var _Button = __webpack_require__(39);

var _Button2 = _interopRequireDefault(_Button);

var _images = __webpack_require__(21);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var content = [{
    label: 'History',
    content: 'The project was initiated on January 1, 2003 to set up a small-scale industry at Adityapur Industrial Area, Jamshedpur for manufacturing a wide range of Ferro alloys to cater to the needs of steel plants all over the country. Jamshedpur for manufacturing a wide range of Ferro alloys to cater to the needs of steel plants.'
}, {
    label: 'future plans',
    content: ''
}];

var Section3 = function (_React$Component) {
    _inherits(Section3, _React$Component);

    function Section3(props) {
        _classCallCheck(this, Section3);

        var _this = _possibleConstructorReturn(this, (Section3.__proto__ || Object.getPrototypeOf(Section3)).call(this, props));

        _this.state = {
            selected: 0
        };

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {};

        _this.shouldComponentUpdate = function (nextProps, nextState) {
            return true;
        };

        _this.componentDidUpdate = function (prevProps, prevState) {
            return true;
        };

        _this.componentWillUnmount = function () {};

        _this.selectOption = function (index) {
            _this.setState({
                selected: index
            });
        };

        _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'growth-container' },
                _react2.default.createElement('img', { src: _images2.default.growth, className: 'banner' }),
                _react2.default.createElement(
                    'h2',
                    null,
                    'GROWTH STORY'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    content[_this.state.selected].content
                )
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


    return Section3;
}(_react2.default.Component);

exports.default = Section3;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
    return _react2.default.createElement(
        'div',
        { className: (props.active ? 'active-' : '') + 'button' },
        props.children
    );
};

exports.default = Button;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(42);

var _images = __webpack_require__(21);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MDSpeaks = function (_React$Component) {
    _inherits(MDSpeaks, _React$Component);

    function MDSpeaks(props) {
        _classCallCheck(this, MDSpeaks);

        var _this = _possibleConstructorReturn(this, (MDSpeaks.__proto__ || Object.getPrototypeOf(MDSpeaks)).call(this, props));

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
                { className: 'md-speaks-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'img' },
                    _react2.default.createElement('img', { src: _images2.default.md, className: '' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'MD SPEAKS'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'designation' },
                        _react2.default.createElement(
                            'b',
                            null,
                            'Tarun Kanti Bhattacherjee',
                            _react2.default.createElement('br', null),
                            '(Managing Director)'
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'message' },
                        'Entrepreneurship can be felt like you are sailing a ship all by yourself; you are not entirely sure where you are going or how you are navigating to reach there and you are responsible for anything and everything from steering to making sure that the ship doesn\u2019t sink.',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        'The vision was to create employment and lead to make it a success in an environmentally sustainable way. To us, it is very important to gather the insight of every member of the organization. Astha Ferrotech Pvt. Ltd owes its resilience to three fundamental characteristics, which are part of its core philosophy: Dedication & Commitment; Quality & Performance driven approach and ability to provide the highest level of customer satisfaction.',
                        _react2.default.createElement('br', null),
                        _react2.default.createElement('br', null),
                        'When I say quality, it not only means product quality, it also means quality in our people and quality in our relationship that has delighted all our associates for years. Therefore, I look forward to many more further goals with the diversely talented team of our company. Thank you all, on behalf of Astha Ferrotech Pvt.Ltd,'
                    )
                )
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


    return MDSpeaks;
}(_react2.default.Component);

exports.default = MDSpeaks;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(44);

var _images = __webpack_require__(21);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overview = function (_React$Component) {
    _inherits(Overview, _React$Component);

    function Overview(props) {
        _classCallCheck(this, Overview);

        var _this = _possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).call(this, props));

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
                { className: 'overview-container' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Overview'
                ),
                _react2.default.createElement('hr', { size: '2' }),
                _react2.default.createElement(
                    'div',
                    { className: 'image-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'img' },
                        _react2.default.createElement('img', { src: _images2.default.vision }),
                        _react2.default.createElement(
                            'div',
                            { className: 'content' },
                            _react2.default.createElement(
                                'p',
                                { className: 'header' },
                                'Vision'
                            ),
                            _react2.default.createElement('div', { className: 'hr' }),
                            _react2.default.createElement(
                                'p',
                                { className: 'body' },
                                'Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. '
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'img' },
                        _react2.default.createElement('img', { src: _images2.default.mission }),
                        _react2.default.createElement(
                            'div',
                            { className: 'content' },
                            _react2.default.createElement(
                                'p',
                                { className: 'header' },
                                'Mision'
                            ),
                            _react2.default.createElement('div', { className: 'hr' }),
                            _react2.default.createElement(
                                'p',
                                { className: 'body' },
                                'Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. '
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'img' },
                        _react2.default.createElement('img', { src: _images2.default.core }),
                        _react2.default.createElement(
                            'div',
                            { className: 'content' },
                            _react2.default.createElement(
                                'p',
                                { className: 'header' },
                                'Core Values'
                            ),
                            _react2.default.createElement('div', { className: 'hr' }),
                            _react2.default.createElement(
                                'p',
                                { className: 'body' },
                                'Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. '
                            )
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

    /* This method determines whether the component should be updated or not.
    By default, it’ll return true. 
    If at some point, if you want to re-render the component on a condition, then shouldComponentUpdate() method would be the correct choice */

    /* We call this method after the re-rendering our component.
    After the updated component gets updated on the DOM, the componentDidUpdate() method executes. This method will receive arguments like prevProps and prevState */

    /* Before the removal of the component from the DOM, componentWillUnMount() will execute */

    /* render is called to paint the dom */


    return Overview;
}(_react2.default.Component);

exports.default = Overview;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(46);

var _images = __webpack_require__(21);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Products = function (_React$Component) {
    _inherits(Products, _React$Component);

    function Products(props) {
        _classCallCheck(this, Products);

        var _this = _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).call(this, props));

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
                { className: 'product-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'OUR Products'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'The company has been manufacturing ',
                        _react2.default.createElement(
                            'b',
                            null,
                            'low carbon ferro manganese, medium carbon ferro manganese, ferro titanium ferro molybdenum & ferro chrome.'
                        ),
                        ' We also manufacture ',
                        _react2.default.createElement(
                            'b',
                            null,
                            'aluminium cubes, shots & ingots.'
                        ),
                        ' We are also planning to add more products as per the demand in the market.'
                    )
                ),
                _react2.default.createElement('img', { src: _images2.default.product })
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


    return Products;
}(_react2.default.Component);

exports.default = Products;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(48);

var _images = __webpack_require__(21);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Org = function (_React$Component) {
    _inherits(Org, _React$Component);

    function Org(props) {
        _classCallCheck(this, Org);

        var _this = _possibleConstructorReturn(this, (Org.__proto__ || Object.getPrototypeOf(Org)).call(this, props));

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
                { className: 'org-container' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Organisational Structure'
                ),
                _react2.default.createElement('img', { src: _images2.default.org })
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


    return Org;
}(_react2.default.Component);

exports.default = Org;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(50);

var _images = __webpack_require__(21);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Client = function (_React$Component) {
    _inherits(Client, _React$Component);

    function Client(props) {
        _classCallCheck(this, Client);

        var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, props));

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
                { className: 'client-container' },
                _react2.default.createElement('img', { src: _images2.default.client }),
                _react2.default.createElement(
                    'div',
                    { className: 'right' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Clientele'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'During its 16-year journey, the company catered to an impressive clientele with likes of Tata Steel Ltd, Usha Martin Ltd (now taken over by Tata Steel Long Products Ltd), Jindal Steel & Power Ltd, SAIL\u2019s Bhilai Steel Plant, Bokaro Steel Plant, Alloy Steel Plant, Bhushan Power & Steel Ltd, Tata Steel BSL Ltd (Meramandli) and many more, all over India.'
                    )
                )
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


    return Client;
}(_react2.default.Component);

exports.default = Client;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

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
                { className: 'footer' },
                _react2.default.createElement(
                    'div',
                    { className: 'left' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Contact US'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'inline' },
                        'Address: '
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'inline' },
                        'Astha Ferrotech Pvt Ltd, ',
                        _react2.default.createElement('br', null),
                        'B-2, near industrial estate,',
                        _react2.default.createElement('br', null),
                        'Adityapur Industrial Area,',
                        _react2.default.createElement('br', null),
                        'Adityapur, Jamshedpur - 832109'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'PHONE NO.: 0657-2200141/2200731',
                        _react2.default.createElement('br', null),
                        'FAX: 06572200106',
                        _react2.default.createElement('br', null),
                        'OFFICE CELL: +91 9304021627'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'right' },
                    _react2.default.createElement(
                        'div',
                        { className: 'menu-left' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'home'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'our initiatives'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'gallery'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'conatct us'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'menu-right' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Careers'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Press'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Privacy Policy'
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'footer' },
                        '2020 Astha Ferrotech Pvt. Ltd.',
                        _react2.default.createElement('br', null),
                        'All Rights Reserved.'
                    )
                )
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


    return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
])]);