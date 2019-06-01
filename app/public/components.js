class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <span className="left brand-logo">Pok&eacute; Partner Finder</span>
                    <ul className="right">
                        <li>
                            <a onClick={this.props.goHome}>Home</a>
                        </li>
                        <li>
                            <a onClick={this.props.useSurvey}>Survey</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

class Form extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const user = {
            name: data.get('name'),
            type: data.get('type')
        }
        console.log(user);
    }
    render () {
        return (
            <div className="col s6">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="type">Type: </label>
                    <input type="text" id="type" name="type"/>
                    
                    <button className="btn" type="submit" id="submit">
                        Find your partner
                    </button>
                </form>
            </div>
        )
    }   
}

class Display extends React.Component {
    render() {
        return (
            <div className="col s4">
                Partner Image from POST Request
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
            <div>
                <Form />
                <Display />
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