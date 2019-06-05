var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//App Header
var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "jumbotron d-flex flex-column align-items-center bg-danger my-3" },
                React.createElement(
                    "h1",
                    { className: "text-white" },
                    "Pok\xE9 Partner Finder"
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "a",
                        { onClick: this.props.goHome, className: "btn btn-light m-1 text-danger" },
                        "Home"
                    ),
                    React.createElement(
                        "a",
                        { onClick: this.props.useSurvey, className: "btn btn-light m-1 text-danger" },
                        "Survey"
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

//Survey Form


var Form = function (_React$Component2) {
    _inherits(Form, _React$Component2);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "col d-flex flex-column" },
                React.createElement(
                    "form",
                    { onSubmit: this.props.onFormSubmit },
                    React.createElement(
                        "div",
                        { className: "p-1" },
                        React.createElement(
                            "label",
                            { htmlFor: "name", className: "m-1" },
                            "Name: "
                        ),
                        React.createElement("input", { type: "text", id: "name", name: "name" })
                    ),
                    React.createElement(
                        "div",
                        { className: "p-1" },
                        React.createElement(
                            "label",
                            { htmlFor: "type", className: "m-1" },
                            "Type: "
                        ),
                        React.createElement("input", { type: "text", id: "type", name: "type" })
                    ),
                    React.createElement(
                        "div",
                        { className: "p-1" },
                        React.createElement(
                            "button",
                            { className: "btn btn-danger text-white m-1", type: "submit", id: "submit" },
                            "Find your partner"
                        )
                    )
                )
            );
        }
    }]);

    return Form;
}(React.Component);
//Survey Results


var Display = function (_React$Component3) {
    _inherits(Display, _React$Component3);

    function Display() {
        _classCallCheck(this, Display);

        return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
    }

    _createClass(Display, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            var pokemon = this.props.poke;
            if (pokemon !== prevProps.poke) {
                pokemon = pokemon.toLowerCase();
                this.props.getUrl(pokemon);
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.image != '') return React.createElement(
                "div",
                { className: "col d-flex flex-column align-items-center" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-primary m-1", "data-toggle": "modal", "data-target": "#resultsModal" },
                    "View Results"
                ),
                React.createElement(
                    "div",
                    { className: "modal fade", id: "resultsModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "resultsModalLabel", "aria-hidden": "true" },
                    React.createElement(
                        "div",
                        { className: "modal-dialog", role: "document" },
                        React.createElement(
                            "div",
                            { className: "modal-content" },
                            React.createElement(
                                "div",
                                { className: "modal-header" },
                                React.createElement(
                                    "h5",
                                    { className: "modal-title", id: "resultsModalLabel" },
                                    "Your Pok\xE9mon Partner is ",
                                    this.props.poke
                                ),
                                React.createElement(
                                    "button",
                                    { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                                    React.createElement(
                                        "span",
                                        { "aria-hidden": "true" },
                                        "\xD7"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "modal-body" },
                                React.createElement("img", { src: this.props.image })
                            ),
                            React.createElement(
                                "div",
                                { className: "modal-footer" },
                                React.createElement(
                                    "button",
                                    { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" },
                                    "Close"
                                )
                            )
                        )
                    )
                )
            );
            if (this.props.poke != '') return (
                //Loading placeholder
                React.createElement(
                    "div",
                    { className: "col mb-3" },
                    "Your partner is ",
                    this.props.poke
                )
            );
            return React.createElement("div", { className: "col" });
        }
    }]);

    return Display;
}(React.Component);

//Home Page


var Home = function (_React$Component4) {
    _inherits(Home, _React$Component4);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "m-2 p-2" },
                React.createElement(
                    "p",
                    null,
                    "Welcome to the Pok\xE9mon Friend Finder. Click on survey and enter your name and MBTI to find a partner."
                )
            );
        }
    }]);

    return Home;
}(React.Component);

//Survey Page


var Survey = function (_React$Component5) {
    _inherits(Survey, _React$Component5);

    function Survey() {
        _classCallCheck(this, Survey);

        var _this5 = _possibleConstructorReturn(this, (Survey.__proto__ || Object.getPrototypeOf(Survey)).call(this));

        _this5.state = {
            partner: '',
            url: ''
        };
        _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
        _this5.fetchImage = _this5.fetchImage.bind(_this5);
        return _this5;
    }

    _createClass(Survey, [{
        key: "handleSubmit",
        value: function handleSubmit(event) {
            var _this6 = this;

            event.preventDefault();
            var data = new FormData(event.target);
            var user = {
                name: data.get('name'),
                type: data.get('type').trim().toUpperCase()
            };
            event.target.reset();
            if (user.name === '' || user.type === '') return alert('Please try again!');
            console.log(user);
            fetch('api/partners', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                return response.json();
            }).then(function (match) {
                _this6.setState({
                    partner: match.name
                });
            });
        }
    }, {
        key: "fetchImage",
        value: function fetchImage(input) {
            var _this7 = this;

            fetch("https://pokeapi.co/api/v2/pokemon/" + input + "/").then(function (response) {
                return response.json();
            }).then(function (pokemon) {
                console.log(pokemon);
                _this7.setState({
                    url: pokemon.sprites.front_default
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Form, { onFormSubmit: this.handleSubmit }),
                React.createElement(Display, { poke: this.state.partner,
                    image: this.state.url,
                    getUrl: this.fetchImage
                })
            );
        }
    }]);

    return Survey;
}(React.Component);

//Page Body (Can be Home or Survey)


var Body = function (_React$Component6) {
    _inherits(Body, _React$Component6);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: "render",
        value: function render() {
            var page = this.props.page;
            var comp = React.createElement(Home, null);
            page ? comp = React.createElement(Home, null) : comp = React.createElement(Survey, null);
            return React.createElement(
                "div",
                { className: "d-flex flex-column align-items-center" },
                comp
            );
        }
    }]);

    return Body;
}(React.Component);

var App = function (_React$Component7) {
    _inherits(App, _React$Component7);

    function App(props) {
        _classCallCheck(this, App);

        var _this9 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this9.state = {
            isHome: true
        };
        _this9.goHome = _this9.goHome.bind(_this9);
        _this9.useSurvey = _this9.useSurvey.bind(_this9);
        return _this9;
    }

    _createClass(App, [{
        key: "goHome",
        value: function goHome() {
            this.setState({
                isHome: true
            });
        }
    }, {
        key: "useSurvey",
        value: function useSurvey() {
            this.setState({
                isHome: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            var isHome = this.state.isHome;
            return React.createElement(
                "div",
                { className: "container border bg-light shadow-lg my-2" },
                React.createElement(Header, {
                    goHome: this.goHome,
                    useSurvey: this.useSurvey
                }),
                React.createElement(Body, { page: isHome })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));