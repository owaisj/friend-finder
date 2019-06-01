//App Header
class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron d-flex flex-column align-items-center bg-danger my-3">
                <h1 className="text-white">Pok&eacute; Partner Finder</h1>
                <div className="row">
                    <a onClick={this.props.goHome} className="btn btn-light m-1 text-danger">Home</a>
                    <a onClick={this.props.useSurvey} className="btn btn-light m-1 text-danger">Survey</a> 
                </div>
            </div>
        )
    }
}

//Survey Form
class Form extends React.Component {
    render () {
        return (
            <div className="col d-flex flex-column">
                <form onSubmit={this.props.onFormSubmit}>
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
//Survey Results
class Display extends React.Component {
    render() {
        if (this.props.poke != '') return (
            <div className="col mb-3">
                Your partner is {this.props.poke}
            </div>
        )
        return (
            //TODO: Modal
            <div className="col"></div>
        )
    }
}

//Home Page
class Home extends React.Component {
    render() {
        return (
            <div className="m-2 p-2">
                <p>
                    Welcome to the Pok&eacute;mon Friend Finder. Click on survey and enter your name and MBTI to find a partner.
                </p>
            </div>
        )
    }
}

//Survey Page
class Survey extends React.Component {
    constructor() {
        super();
        this.state = {
            partner: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const user = {
            name: data.get('name'),
            type: data.get('type')
        }
        if (user.name === '' || user.type === '') return alert('Please try again!');
        console.log(user);
        fetch('api/partners', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(match => {
            this.setState({
                partner: match.name
            })
        });
    }
    render() {
        return (
            <div>
                <Form onFormSubmit={this.handleSubmit}/>
                <Display poke={this.state.partner}/>
            </div>
        )
    }
}

//Page Body (Can be Home or Survey)
class Body extends React.Component {  
    render () {
        const page = this.props.page;
        let comp = <Home />
        page ? comp = <Home /> : comp = <Survey />
        return (
            <div className="d-flex flex-column align-items-center">{comp}</div>
        )
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
            <div className="container border my-2">
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