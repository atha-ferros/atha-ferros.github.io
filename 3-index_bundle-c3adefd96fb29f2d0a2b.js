(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],Array(39).concat([
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

var _Section = __webpack_require__(53);

var _Section2 = _interopRequireDefault(_Section);

var _About = __webpack_require__(55);

var _About2 = _interopRequireDefault(_About);

var _Growth = __webpack_require__(57);

var _Growth2 = _interopRequireDefault(_Growth);

var _MDSpeaks = __webpack_require__(60);

var _MDSpeaks2 = _interopRequireDefault(_MDSpeaks);

var _Overview = __webpack_require__(62);

var _Overview2 = _interopRequireDefault(_Overview);

var _Products = __webpack_require__(66);

var _Products2 = _interopRequireDefault(_Products);

var _Org = __webpack_require__(68);

var _Org2 = _interopRequireDefault(_Org);

var _Client = __webpack_require__(70);

var _Client2 = _interopRequireDefault(_Client);

var _Footer = __webpack_require__(10);

var _Footer2 = _interopRequireDefault(_Footer);

var _Management = __webpack_require__(72);

var _Management2 = _interopRequireDefault(_Management);

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
                _react2.default.createElement(_Management2.default, null),
                _react2.default.createElement(_MDSpeaks2.default, null),
                _react2.default.createElement(_Overview2.default, null),
                _react2.default.createElement(_Products2.default, null),
                _react2.default.createElement(_Client2.default, null),
                _react2.default.createElement(_Org2.default, null)
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
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
    return _react2.default.createElement(
        'div',
        { className: (props.active ? 'active-' : '') + 'button', id: props.id },
        props.children
    );
};

exports.default = Button;

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(54);

var _images = __webpack_require__(6);

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
                    { className: 'heading max-width-container' },
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(56);

var _images = __webpack_require__(6);

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
                { className: 'about-container' },
                _react2.default.createElement('img', { src: _images2.default.about, className: 'top mobile' }),
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
                _react2.default.createElement('img', { src: _images2.default.about, className: 'right not-mobile' }),
                _react2.default.createElement('div', { className: 'right-section' })
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(58);

var _Button = __webpack_require__(44);

var _Button2 = _interopRequireDefault(_Button);

var _images = __webpack_require__(6);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var content = [{
    label: 'History',
    content: 'Astha Ferrotech Pvt Ltd is a professionally managed organization that has raised itself to a higher pedestal with its quality products and has been recognized as a leading manufacturer of Ferro Alloys. Inspired by a few officers in Tata Steel, the project had been initiated on the 1st of January, 2003 to set up a small-scale industry at Adityapur Industrial Area, Jamshedpur for manufacturing a wide range of Ferro Alloys through Alumino-Thermit route to cater the needs of steel plants in general. The constitution of Astha Ferrotech was partnership, which has been functioning as a Private Limited Company since 1st April, 2005 under the leadership of the Managing Director, Mr. Tarun K Bhattacherjee. The well organized team of technically qualified and experienced personnel as well as a competent batch of non-technical enthusiasts are sweating every day to keep the graph moving towards the peak.'
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
                    'div',
                    { className: 'max-width-container' },
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(61);

var _images = __webpack_require__(6);

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
                { className: 'md-speaks-container max-width-container' },
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(63);

var _images = __webpack_require__(6);

var _images2 = _interopRequireDefault(_images);

var _Carousel = __webpack_require__(64);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _reactFeather = __webpack_require__(109);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SLIDE_INFO = [{
    img: 'vision',
    label: 'Vision',
    description: 'Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. '
}, {
    img: 'mission',
    label: 'Mission',
    description: 'Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. '
}, {
    img: 'core',
    label: 'Core Values',
    description: 'Astha Ferrotech Pvt Ltd aspires to be a leading manufacturer of Ferro Alloys in India. We endeavour to deliver quality products which will help the company to withstand the test of competition. Good quality Ferro Alloys leads to making the Best Steel for a better future infrastructure. '
}];

var Slide = function Slide(props) {
    return _react2.default.createElement(
        'div',
        { className: 'img' },
        _react2.default.createElement('img', { src: _images2.default[props.img] }),
        _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
                'p',
                { className: 'header' },
                props.label
            ),
            _react2.default.createElement('div', { className: 'hr' }),
            _react2.default.createElement(
                'p',
                { className: 'body' },
                props.description
            )
        )
    );
};

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
            var slides = SLIDE_INFO.map(function (slide) {
                return _react2.default.createElement(Slide, slide);
            });
            console.log(slides);
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
                    { className: ' not-mobile image-container' },
                    slides,
                    ' '
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mobile' },
                    ' ',
                    _react2.default.createElement(_Carousel2.default, { slides: slides, prev_button: _react2.default.createElement(_reactFeather.ArrowLeft, { color: '#212121' }), next_button: _react2.default.createElement(_reactFeather.ArrowRight, { color: '#212121' }), loop: true }),
                    ' '
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.state = {
            slideIndex: 1
        };

        _this.componentWillMount = function () {};

        _this.componentDidMount = function () {
            _this.slides = document.getElementsByClassName("mySlides");
            _this.dots = document.getElementsByClassName("dot");
            _this.showSlides();
        };

        _this.shouldComponentUpdate = function (nextProps, nextState) {
            _this.slides = document.getElementsByClassName("mySlides");
            _this.dots = document.getElementsByClassName("dot");
            return true;
        };

        _this.componentDidUpdate = function (prevProps, prevState) {
            _this.slides = document.getElementsByClassName("mySlides");
            _this.dots = document.getElementsByClassName("dot");
            return true;
        };

        _this.componentWillUnmount = function () {};

        _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'carousel-container' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'slideshow-container' },
                    _this.props.slides.map(function (slide, index) {
                        return _react2.default.createElement(
                            'div',
                            { 'class': 'mySlides fade' },
                            slide
                        );
                    }),
                    _react2.default.createElement(
                        'a',
                        { 'class': 'prev', onClick: function onClick() {
                                return _this.plusSlides(-1);
                            } },
                        _this.props.prev_button ? _this.props.prev_button : '&#10094;'
                    ),
                    _react2.default.createElement(
                        'a',
                        { 'class': 'next', onClick: function onClick() {
                                return _this.plusSlides(1);
                            } },
                        _this.props.next_button ? _this.props.next_button : '&#10095;'
                    )
                ),
                _react2.default.createElement('br', null),
                _this.props.dots && _react2.default.createElement(
                    'div',
                    { style: 'text-align:center' },
                    _this.props.slide.map(function (slide, index) {
                        return _react2.default.createElement('span', { 'class': 'dot', onClick: function onClick() {
                                return _this.currentSlide(index);
                            } });
                    })
                )
            );
        };

        _this.slides = [];
        _this.dots = [];
        return _this;
    }

    _createClass(Carousel, [{
        key: 'plusSlides',
        value: function plusSlides(n) {
            if ((this.state.slideIndex === 0 || this.state.slideIndex === this.slides.length) && this.props.loop) {
                console.log("1");
                this.setState({
                    slideIndex: this.state.slideIndex === 0 && n < 0 ? this.slides.length - 1 : 1
                }, this.showSlides());
            } else if (this.state.slideIndex > 0 && this.state.slideIndex < this.slides.length) {
                console.log("2");
                this.setState({
                    slideIndex: this.state.slideIndex + n
                }, this.showSlides());
            }
            console.log("3");
        }
    }, {
        key: 'currentSlide',
        value: function currentSlide(n) {
            showSlides(slideIndex = n);
        }
    }, {
        key: 'showSlides',
        value: function showSlides(n) {
            try {
                var _slideIndex = this.state.slideIndex;
                for (var i = 0; i < this.slides.length; i++) {
                    this.slides[i].style.display = "none";
                }
                for (var _i = 0; _i < this.dots.length; _i++) {
                    this.dots[_i].className = this.dots[_i].className.replace(" active", "");
                }
                this.slides[_slideIndex - 1].style.display = "block";
                // this.dots[slideIndex-1].className += " active";
            } catch (e) {
                console.log(e);
            }
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

    }]);

    return Carousel;
}(_react2.default.Component);

exports.default = Carousel;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(67);

var _images = __webpack_require__(6);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(69);

var _images = __webpack_require__(6);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(71);

var _images = __webpack_require__(6);

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
                _react2.default.createElement('img', { src: _images2.default.client, className: 'not-mobile' }),
                _react2.default.createElement('img', { src: _images2.default.logos_mobile, className: 'mobile' }),
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(73);

var _Button = __webpack_require__(44);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DIRECTOR = {
    MANAGING_DIRECTOR: "1",
    BOARD_OF_DIRECTOR: "2"
};

var Management = function (_React$Component) {
    _inherits(Management, _React$Component);

    function Management(props) {
        _classCallCheck(this, Management);

        var _this = _possibleConstructorReturn(this, (Management.__proto__ || Object.getPrototypeOf(Management)).call(this, props));

        _this.state = {
            selectedButton: DIRECTOR.MANAGING_DIRECTOR
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

        _this.getContent = function () {
            switch (_this.state.selectedButton) {
                case DIRECTOR.MANAGING_DIRECTOR:
                    return _react2.default.createElement(
                        'div',
                        { className: 'single-div' },
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'p',
                                null,
                                'Mr. Tarun Kanti Bhattacherjee, Managing Director:'
                            ),
                            ' With 42 years in the field of Manufacturing & Marketing of industrial products, Mr. Bhattacherjee was involved in import trading business with vast organizational management experience of more than four decades. At Astha Ferrotech Pvt Ltd, he is the key person to look after all the technical fields like Production, Marketing, Quality Control & Purchase of Raw Materials in addition to the overall management of the company. An awardee of the prestigious President\u2019s  Scout Parchment Award received from the then President of India, Late V.V. Giri as well as the President\u2019s Rover\u2019s Parchment Award received from the then President of India, Late Fakiruddin Ali Ahmed, his entrepreneurial, practical and calculative risk-taking instincts should be duly credited to his adventurous upbringing.'
                        )
                    );
                case DIRECTOR.BOARD_OF_DIRECTOR:
                    return _react2.default.createElement(
                        'div',
                        { className: 'double-div' },
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'p',
                                null,
                                'Mr. Tarun Kumar Adak, Director:'
                            ),
                            '  With over 45 years in the field of personnel, hotel management, food marketing and involvement in trading business, Mr. Adak at Astha Ferrotech Pvt Ltd has been handling personnel, labour welfare, procurement of selected raw materials, liasioning with suppliers, general administration and logistics. An active member of the Lion\u2019s Club, he\u2019s into various philanthropic activities.'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'p',
                                null,
                                'Mr. Satish Kumar Chaudhary, Director:'
                            ),
                            ' With 60 years of Work Experience, out of which 30 years as an entrepreneur in manufacturing various industrial chemicals and allied products, Mr. Chaudhary at Astha Ferrotech Pvt Ltd has been exclusively looking after Finance & Accounts, including Banking. In addition to that, he is also looking after the company matters in connection with R.O.C, Factory Inspector, Provident Fund, E.S.I. and Pollution Control.'
                        )
                    );
            }
        };

        _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'management-container ' },
                _react2.default.createElement(
                    'div',
                    { className: 'body max-width-container' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Our Management'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'button-container', onClick: function onClick(e) {
                                console.log(e.target.id);
                                _this.setState({
                                    selectedButton: e.target.id
                                });
                            } },
                        _react2.default.createElement(
                            _Button2.default,
                            { id: DIRECTOR.MANAGING_DIRECTOR, active: _this.state.selectedButton === DIRECTOR.MANAGING_DIRECTOR },
                            'Managing Director'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { id: DIRECTOR.BOARD_OF_DIRECTOR, active: _this.state.selectedButton === DIRECTOR.BOARD_OF_DIRECTOR },
                            'Board Of Directors'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _this.getContent()
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


    return Management;
}(_react2.default.Component);

exports.default = Management;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
])]);