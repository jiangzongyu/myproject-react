import React, { Component } from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
// import 'element-theme-default';

class Title extends Component {
    handleClick (e) {
        console.log(this)
    }
    render () {
        return (
            <h1 onClick={this.handleClick.bind(this)}>Hello World</h1>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <div>
                <h2>This is Header</h2>
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main</h2>
            </div>
        )
    }
}

class Footer extends Component {
    render () {
        return (
            <div>
                <h2>This is footer</h2>
            </div>
        )
    }
}

class LikeButton extends Component {
    constructor () {
        super ()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })

        this.setState((prevState) => {
            return { count: 0 }
        })

        this.setState((prevState) => {
            return { count: prevState + 1}
        })

        this.setState((prevState) => {
            return { count: prevState + 3}
        })

    }

    render () {
        const likedText = this.props.likedText || '取消'
        const unlikedText = this.props.unlikedText || '点赞'
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? likedText : unlikedText}
            </button>
        )
    }
}

class LikeButtonO extends Component {
    constructor () {
        super ()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })

        if(this.props.onClick) {
            this.props.onClick()
        }
    }

    render () {
        const wordings = this.props.wordings || {
                likedText: '取消',
                unlikedText: '点赞'
            }
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? wordings.likedText : wordings.unlikedText}
            </button>
        )
    }
}

class LikeButtonT extends Component {
    constructor () {
        super ()
        this.state = {
            likedText: '已赞',
            unlikedText: '赞'
        }
    }

    handleClickOnLikeButton () {
        this.setState({
            likedText: '取消',
            unlikedText: '点赞'
        })
    }

    render () {
        return (
            <div>
                <LikeButton
                    likedText={this.state.likedText}
                    unlikedText={this.state.unlikedText}
                />
                <div>
                    <button onClick={this.handleClickOnLikeButton.bind(this)}>
                        修改 wordings
                    </button>
                </div>
            </div>
        )
    }
}

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
}
}

function Avatar(props) {
    return(
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name} />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
        )
}

function Comments(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date:new Date()
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello,World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggle: true}
        //this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

function WarningBanner(props) {
    if(!props.warn) {
        return null
    }
    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showWarning: true}
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick.bind(this)}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

const numbers = [1,2,3,4,5]
function NumberList(props) {
    const numbers = props.newNumbers
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    )
    return (
        <ul>{listItems}</ul>
    )
}

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('A name was submit: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: 'Please write an essay about your favorite DOM element.'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('A essay was submit: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: 'coconut'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}/>
                </label>
            </form>
        )
    }
}

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: ''
        }
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const temperature = this.state.temperature
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input type="text" value={temperature} onChange={this.handleChange.bind(this)}/>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: ''
        }
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const temperature = this.state.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={this.handleChange.bind(this)} />
            </fieldset>
        )
    }
}

class TemperatureInputT extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature ini {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32)*5/9
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) +32
}

function tryConvert(temperature ,convert) {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

class CalculatorT extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature

        return (
            <div>
                <TemperatureInputT
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInputT
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        )
    }
}


class App extends Component {
  render() {
    return (
      <div id="content">
          <Title />
          <Header />
          <Main />
          <Footer />
          <LikeButton likedText="已赞" unlikedText="赞"/>
          <LikeButtonO
              wordings={{likedText:'已赞', unlikedText: '赞'}}
              onClick={() => console.log('Click on like button!')}
          />
          <LikeButtonT />
          <Welcome name="World" />
          <Welcome name="morning" />
          <Welcome name="girl" />
          <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author} />
          <Comments
              date={comment.date}
              text={comment.text}
              author={comment.author} />
          <Clock/>
          <Toggle/>
          <Page/>
          <NumberList newNumbers={numbers} />
          <NameForm/>
          <EssayForm/>
          <FlavorForm/>
          <Reservation/>
          <Calculator/>
          <CalculatorT/>
      </div>
    );
  }
}

export default App;