class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pok&eacute; Partner Finder</h1>
                <a onClick={this.props.goHome} className="btn btn-light m-1 text-danger">Home</a>
                <a onClick={this.props.useSurvey} className="btn btn-light m-1 text-danger">Survey</a>         
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
            <div className="col d-flex flex-column">
                <form onSubmit={this.handleSubmit}>
                    <div className="p-1">
                        <label htmlFor="name" className="m-1">Name: </label>
                        <input type="text" id="name" name="name"/>
                    </div>

                    <div className="p-1">
                        <label htmlFor="type" className="m-1">Type: </label>
                        <input type="text" id="type" name="type"/>
                    </div>
                    
                    <div className="p-1">
                        <button className="btn btn-danger text-white m-1" type="submit" id="submit">
                            Find your partner
                        </button>
                    </div>
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
            <div className="container">
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