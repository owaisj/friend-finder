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

                    <div className="p-1 d-flex flex-column">
                        
                        <div className="d-flex justify-content-between m-1">
                            <label htmlFor="pairOne" className="m-1">
                                Are you introverted or extroverted?
                            </label>
                            <select name="pairOne">
                                <option value="I">Introverted</option>
                                <option value="E">Extroverted</option>
                            </select>
                        </div>
                        
                        <div className="d-flex justify-content-between m-1">
                        <label htmlFor="pairTwo" className="m-1">
                            Do you pay attention to information from your senses (Sensing) or to patterns and possibilities (Intuition)?
                        </label>
                        <select name="pairTwo">
                            <option value="S">Sensing</option>
                            <option value="N">Intuition</option>
                        </select>
                        </div>

                        <div className="d-flex justify-content-between m-1">
                            <label htmlFor="pairThree" className="m-1">
                                Are you a thinker or a feeler?
                            </label>
                            <select name="pairThree">
                                <option value="T">Thinker</option>
                                <option value="F">Feeling</option>
                            </select>
                        </div>

                        <div className="d-flex justify-content-between m-1">
                        <label htmlFor="pairFour" className="m-1">
                            Are you flexible and adaptable (Perceiving) or structured and decided (Judging)?
                        </label>
                        <select name="pairFour">
                            <option value="P">Perceiving</option>
                            <option value="J">Judging</option>
                        </select>
                        </div>

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
    componentDidUpdate(prevProps) {
        let pokemon = this.props.poke;
        if (pokemon !== prevProps.poke) {
            pokemon = pokemon.toLowerCase();
            this.props.getUrl(pokemon);
        }
    }
    render() {
        if (this.props.image != '') return (
            <div className="col d-flex flex-column align-items-center">
                <button type="button" className="btn btn-success m-1 mb-4" data-toggle="modal" data-target="#resultsModal">
                    View Results
                </button>

                <div className="modal fade" id="resultsModal" tabIndex="-1" role="dialog" aria-labelledby="resultsModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="resultsModalLabel">Your Pok&eacute;mon Partner is {this.props.poke}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={this.props.image} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        )
        if (this.props.poke != '') return (
            //Loading placeholder
            <div className="col mb-3">
                Your partner is {this.props.poke}
            </div>
        )
        return (
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
            partner: '',
            url: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchImage = this.fetchImage.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const type = data.get('pairOne') + data.get('pairTwo') + data.get('pairThree') + data.get('pairFour')
        const user = {
            name: data.get('name'),
            type: type
        }
        event.target.reset();
        if (user.name === '') return alert('Please enter your name!');
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
    fetchImage (input) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${input}/`)	
        .then(response => response.json()).then(pokemon => {	
            console.log(pokemon);	
            this.setState({
                url: pokemon.sprites.front_default
            })
        });
    }
    render() {
        return (
            <div>
                <Form onFormSubmit={this.handleSubmit}/>
                <Display poke={this.state.partner}
                    image={this.state.url}
                    getUrl ={this.fetchImage}
                />
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
            <div className="container border bg-light shadow-lg my-2">
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