import React from 'react';
	const testinfo = {
	     display:"block",
		 left: "10%"

    	}
	const missionOn = {
	     display: "block"
    	}
	const missionOff = {
	     display: "none"
    	}
    const dialoguebox = {
	     position: 'relative',
         fontSize: '100%',
         color: 'yellow',
         backgroundColor: '#00A1A1',
		 width: "80%",
		 height: 200,
		 left: "10%"
    	}

	const dialogueboxOff = {
	     display: 'none',
	     position: 'relative',
         fontSize: '200%',
         color: 'green',
         backgroundColor: '#00A1A1',
		 width: "80%",
		 height: 100,
		 left: "10%"

    	}
	const myStyle = {
	     position: 'relative',
         fontSize: 80,
		 borderRadius: 100,
		 boxShadow: '5px 5px #999',
         color: 'yellow',
         backgroundColor: 'silver',
		 width: "30%",
		 height: 100,
		 left: "25%"
      }
	const myStyle1 = {
		width: "10%",
		position: 'relative',
		float: 'right'
    	}
    const myStyle2 = {
		width: "10%",
		position: 'relative',
		float: 'left'
    	}
	const myStyle3 = {
		position: 'relative',
		corner: '100px',
		left:"25%",
		fontSize:"30"
    	}

class Picture extends React.Component {
   render() {     
      return (
         <div>
		 <img style={myStyle2} src='img/zhangxiaofan_child.jpg' />
		 <img style={myStyle1} src='img/linjingyu_child.gif' />
         </div>
      );
   }
}		
		
class Dialogue extends React.Component {
   render() {
   var numbers = [1, 2, 3, 4, 5];
   var lines = [
   "林惊羽：说好了抓住就认输的，你服不服？",
   "张小凡理也不理.",
   "林惊羽脸色通红，手上用力，大声道：“服不服？”",
   "张小凡气管被他扼住，呼吸逐渐困难，慢慢的脸也开始涨红，但他小小年纪，性子竟是极犟，硬是一声不吭。",
   "眼看着一场大祸便无端生出，忽听这草庙深处一声佛号，有人道：“阿弥佗佛，快快住手。”",
   "一只干瘦手掌，横空而出，伸出二指，在林惊羽双手上弹了一弹。林惊羽如遭电击，全身大震，双手自然而然地松开了。",
   "众小孩顺着他眼光看去，只见在这庙中，正站着一个年老和尚，脸上皱纹横生，一身破旧袈裟，全身上下脏兮兮的。只有手中持着一串碧玉念珠，竟是晶莹剔透，耀人眼目，发出淡淡青光。奇怪的是，在十几颗大小一致，光洁剔透的青玉念珠中，偏偏还夹杂着一颗非玉非石、颜色深紫、暗淡无光的圆珠。 ",
   "任务1完成。"
   ];
   
   switch(this.props.line){
     case 3:
			return(<div style={this.props.onoff==0?dialoguebox:dialogueboxOff} onClick = {this.props.updateStateProp1}>
			   <p>{lines[this.props.line]}</p>
			   <div style={testinfo}><p>{this.props.onoff}</p>
			   <p>this propsline is {this.props.line}</p></div>

			   </div>
			);
			break;
	case 5:
			return(<div style={this.props.onoff==0?dialoguebox:dialogueboxOff} onClick = {this.props.updateStateProp2}>
			   <p>{lines[this.props.line]}</p>
			   <div style={testinfo}><p>{this.props.onoff}</p>
			   <p>this propsline is {this.props.line}</p></div>

			   </div>
			);
			break;
			
			
	default: 
	        return(<div style={this.props.onoff==0?dialoguebox:dialogueboxOff} onClick = {this.props.updateStateProp}>
			   <p>{lines[this.props.line]}</p>
			   <div style={testinfo}><p>onoff is {this.props.onoff}</p>
			   <p>this propsline is {this.props.line}</p></div>

			   </div>
			);
			}
}

}

class Holdbreath extends React.Component {
   render() {  
   switch(this.props.clicks){
   	case 10:
		return(
		<div style={this.props.onoff==1?dialoguebox:dialogueboxOff} >
            <button style={myStyle} onClick = {this.props.updateStateProp1}>{this.props.clicks *10}%</button>
            <p style={myStyle3}>Click this button to hold your breath to 100%</p>
		</div>
			);
			break;

	default:
			return(
			<div style={this.props.onoff==1?dialoguebox:dialogueboxOff} >
            <button style={myStyle} onClick = {this.props.updateStateProp}>{this.props.clicks *10}%</button>
            <p style={myStyle3}>Click this button to hold your breath to 100%</p>
         </div>
		 );
}
}
}

class Mission1 extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
	     onoff: 0,
         data1: 0,
		 dialogue: 0

      }
	  this.updateState = this.updateState.bind(this);
	  this.updateStateDialogue = this.updateStateDialogue.bind(this);
	  this.updateStateOnoff = this.updateStateOnoff.bind(this);
	  this.updateStateOnoff2 = this.updateStateOnoff2.bind(this);
	  this.updateStateOnoff3 = this.updateStateOnoff3.bind(this);
   }
   updateState(){
	this.setState({ data1: this.state.data1 + 1 })
   }
   updateStateDialogue(){
	this.setState({ dialogue: this.state.dialogue + 1 })
   }
   updateStateOnoff(){
   	this.setState({ dialogue: this.state.dialogue + 1 })
	this.setState({onoff: this.state.onoff + 1 })
   }
   updateStateOnoff2(){
	this.setState({onoff: 0})
   }
   updateStateOnoff3(){
    this.setState({ dialogue: this.state.dialogue + 1 })
	this.setState({onoff: 2})
   }
   render() {
      return (
         <div>
		 <Picture />
		 <Dialogue line={this.state.dialogue} onoff={this.state.onoff} mission={this.props.mission} updateStateProp = {this.updateStateDialogue} updateStateProp1 = {this.updateStateOnoff} updateStateProp2 = {this.props.updateStateProp}> </Dialogue>
		 <Holdbreath clicks={this.state.data1} onoff={this.state.onoff} updateStateProp = {this.updateState} updateStateProp1 = {this.updateStateOnoff2} ></Holdbreath>
         </div>
      );
   }
}

class Mission2 extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
	     onoff: 0,
         data1: 0,
		 dialogue: 0

      }
	  this.updateState = this.updateState.bind(this);
	  this.updateStateDialogue = this.updateStateDialogue.bind(this);
	  this.updateStateOnoff = this.updateStateOnoff.bind(this);
	  this.updateStateOnoff2 = this.updateStateOnoff2.bind(this);
	  this.updateStateOnoff3 = this.updateStateOnoff3.bind(this);
   }
   updateState(){
	this.setState({ data1: this.state.data1 + 1 })
   }
   updateStateDialogue(){
	this.setState({ dialogue: this.state.dialogue + 1 })
   }
   updateStateOnoff(){
   	this.setState({ dialogue: this.state.dialogue + 1 })
	this.setState({onoff: this.state.onoff + 1 })
   }
   updateStateOnoff2(){
	this.setState({onoff: 0})
   }
   updateStateOnoff3(){
    this.setState({ dialogue: this.state.dialogue + 1 })
	this.setState({onoff: 2})
   }
   render() {
      return (
         <div>
		 <Picture />
		 <Dialogue line={this.state.dialogue} onoff={this.state.onoff} mission={this.props.mission} updateStateProp = {this.updateStateDialogue} updateStateProp1 = {this.updateStateOnoff} updateStateProp2 = {this.props.updateStateProp}> </Dialogue>
		 <Holdbreath clicks={this.state.data1} onoff={this.state.onoff} updateStateProp = {this.updateState} updateStateProp1 = {this.updateStateOnoff2} ></Holdbreath>
         </div>
      );
   }
}

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
	     mission: 1
      }
	this.updateState = this.updateState.bind(this);
	this.updateState1 = this.updateState1.bind(this);

   }
   updateState(){
	  this.setState({ mission: this.state.mission + 1 })
	}
   updateState1(){
	  this.setState({ mission: this.state.mission - 1 })
	}
   render() {
      return (
         <div>
		    <p style={this.state.mission==1?missionOn:missionOff} ><Mission1 mission={this.state.mission} updateStateProp={this.updateState}></Mission1>
		    </p>
			<p  style={this.state.mission==2?missionOn:missionOff}><Mission2 mission={this.state.mission} updateStateProp={this.updateState}></Mission2>
		    </p>
            <div> 
			<button onClick={this.updateState1}>Go to prev Mission</button>
			<button onClick={this.updateState}>Go to next Mission</button>
			</div>
			<div> mission:{this.state.mission}</div>
		 </div>
      );
   }
}

export default App; 