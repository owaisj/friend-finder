class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    Pok&eacute; Partner Finder |
                    <a onClick={this.props.goHome}> Landing</a> |
                    <a onClick={this.props.useSurvey}> Survey</a>
                </nav>
            </div>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem sint modi iusto rem earum cumque nesciunt laborum quae reprehenderit animi? In quisquam saepe mollitia impedit vitae placeat laudantium vero delectus?
            </p>
        )
    }
}

class Survey extends React.Component {
    render() {
        return (
            <div className="col s6">
                <form method="POST">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" />
                <label htmlFor="type">Type: </label>
                <input type="text" id="type" />
                </form>
                <button type="submit" id="submit">
                    Find your partner
                </button>
            </div>
        )
    }
}

class Body extends React.Component {  
    render () {
        const page = this.props.page;
        if (page) return <Home />
        return <Survey />
    }
}

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isHome: true
        }
        this.goHome = this.goHome.bind(this);
        this.useSurvey = this.useSurvey.bind(this);
    }
    goHome () {
        this.setState({
            isHome: true
        })
    }
    useSurvey () {
        this.setState({
            isHome: false
        })
    }
    render () {
        let isHome = this.state.isHome;
        return (
            <div className="row">
                <Header 
                    goHome={this.goHome}
                    useSurvey={this.useSurvey}
                />
                <Body page={isHome}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));