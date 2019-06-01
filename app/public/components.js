class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    Pok&eacute; Partner Finder | <a href="/">Landing</a> | <a href="/survey">Survey</a>
                </nav>
            </div>
        )
    }
}

class Page extends React.Component {
    render() {
        return (
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem sint modi iusto rem earum cumque nesciunt laborum quae reprehenderit animi? In quisquam saepe mollitia impedit vitae placeat laudantium vero delectus?
            </p>
        )
    }
}

class App extends React.Component{
    render () {
        return (
            <div>
                <Header />
                <Page />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));