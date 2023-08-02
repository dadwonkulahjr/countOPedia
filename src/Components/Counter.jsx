import React from "react";
import attact from "../images/attack.png";
import defence from "../images/defend.png";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        this.state = {
          count: 0, 
          gameStatus:"",
          lastPlay:""
        };
    }
    handleAttack = () =>{
      this.setState((previousState)=>{
        let newCount = previousState.count + Math.round(Math.random() * 10);
        return{
            count: newCount,
            lastPlay:"Attack",
            gameStatus: newCount>10 ? "You won!!!" : previousState.gameStatus
        };
      });
    //   this.setState({count: this.state.count + 100});
    //   this.setState({count: this.state.count + 10});
    }

    handleDefence = ()=>{
        // alert('Defence clicked');
       this.setState((previousState) =>{
        let newCount = previousState.count - Math.round(Math.random() * 10);
            return{
                count: newCount,
                lastPlay:"Defence",
                gameStatus: newCount < -10 ? "You Lost!!!" : previousState.gameStatus
            };
       });
    }

    handleRandomPlay =() =>{
      let playMode = Math.round(Math.random());
      if(playMode===0)
      {
        this.handleAttack();
      }
      else{
        this.handleDefence();
      }
    }

    handleReset =() =>{
        this.setState(()=>{
            return{
                count:0,
                lastPlay:"",
                gameStatus: ""
            };
        });
      }
    render()
    {
        return (
            <div className="row text-white text-center">
                <h1>Game Score: {this.state.count}</h1>
                <p>You win at +10 points and lose at -10 points!</p>
                <p>Last play: {this.state.lastPlay}</p>
                <h3>Game status: {this.state.gameStatus}</h3>
                <div className="col-6 col-md-3 offset-md-3">
                    <img src={attact} alt=""
                    style={
                        {
                            width:"100%",
                            cursor:"pointer",
                            border:"1px solid green"
                        }
                    }
                    className="p-4 rounded"
                    onClick={this.handleAttack}></img>
                </div>
                <div className="col-6 col-md-3">
                    <img src={defence} alt=""
                    style={
                        {
                            width:"100%",
                            cursor:"pointer",
                            border:"1px solid red"
                        }
                    }
                    className="p-4 rounded"
                    onClick={this.handleDefence}></img>
                </div>
                <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-secondary w-100 mt-2"
                    onClick={this.handleRandomPlay}>
                        Random Play
                    </button>
                    <br/>
                    <button className="btn btn-warning w-100 mt-2"
                    onClick={this.handleReset}>
                        Reset
                    </button>
                </div>
                {/* <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button> */}
                {/* <button onClick={this.handleDefence} style={{width:"200px"}}>-1</button> */}
            </div>
        ); 
    };
}


export default Counter;