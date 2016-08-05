const  App= React.createClass({
    getInitialState(){
      return{
          isEditor:true,
          counts:[]
      }
    },
    toggle(){
      this.setState({isEditor:!this.state.isEditor})
    },
    render(){
        const isEditor=this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor?"预览":"编辑"}</button>
            <div>
                <Left></Left>
                <Right></Right>
            </div>
            <div>
                <Preview></Preview>
            </div>
        </div>
    }
});

const Left = React.createClass({
    render(){
        return <div></div>
    }
});

const Right = React.createClass({
    render(){
        return <div></div>
    }
});

const Preview = React.createClass({
    render(){
        return <div></div>
    }
});

ReactDOM.render(<App/>,document.getElementById('content'))