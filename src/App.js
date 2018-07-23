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




class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;