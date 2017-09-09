import React, { Component } from 'react';
import Children from './Children'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            children: []
        }

        this.addChild       = this.addChild.bind(this)
        this.changeChild    = this.changeChild.bind(this)
        this.deleteChild    = this.deleteChild.bind(this)
    }

    addChild(e){
        e.preventDefault()
        this.setState({
            children: this.state.children.concat("")
        })
        console.log(this.state.children)
    }

    changeChild(e, index){
        var self = this
        var temp = e.target.value
        self.setState( state => {
            state.children[index] = temp
            return { children: state.children }
        })
    }

    deleteChild(index){
        var self = this
        self.setState( state => {
            state.children.splice(index,1)
            return { children: state.children }
        })
    }

    render() {
        return (
        <div className="App">
            <form>
                <fieldset>
                    <label>Full Name:</label> <input name="fullname" type="text" /><br />
                    <label>Spouse Name:</label> <input name="spouse" type="text" /><br />
                </fieldset>
                <fieldset>
                    <legend>Children</legend>
                    
                    <Children 
                        children={ this.state.children } 
                        deleteChild={this.deleteChild} 
                        changeChild={this.changeChild}
                        />

                    <button type="submit" onClick={ this.addChild }>Add Child Name</button>
                </fieldset>
            </form>
        </div>
        );
    }
}

export default App;
