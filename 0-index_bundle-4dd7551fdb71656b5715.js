(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(74);

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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);