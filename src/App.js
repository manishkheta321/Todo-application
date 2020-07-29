import React from 'react';
import './App.css';
import { Row,Col,Container,Button } from 'reactstrap';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      input:"",
      todo:[],
      progress:[],
      done:[],
      selectedOption:"0"
    };
    this.changeinput=this.changeinput.bind(this);
    this.formSubmit=this.formSubmit.bind(this);
    this.onValueChange=this.onValueChange.bind(this);
  }
  onValueChange(event){
    this.setState({
      selectedOption:event.target.value
    });
  }
  
  formSubmit(event){
    event.preventDefault();
    if(!this.state.input){alert("empty task") }
    else{

    var op=this.state.selectedOption;
    if(op==="0")
    {
      var x= this.state.todo.concat(this.state.input);
      this.setState({ todo :x});
    }
    else if(op==="1")
    {
      var x= this.state.progress.concat(this.state.input);
      this.setState({ progress :x});
    }
    else{

      var x= this.state.done.concat(this.state.input);
      this.setState({ done :x});
    }

  }
  }
  
  changeinput(event)
  {
    this.setState({
        input: event.target.value
    });
  }

  render(){
    const lists0=this.state.todo.map(i=><li>{i}</li>);
    
    const lists1=this.state.progress.map(i=><li>{i}</li>);
    const lists2=this.state.done.map(i=><li>{i}</li>);
    

    return(
      <Container>
        <div className="body1">
      <div className="mainContainer">
        <h1 className="heading">TODO APPLICATION</h1>
       
       
      <form  onSubmit={this.formSubmit} class="demoForm" id="demoForm">
        <fieldset className="myfield">
          <legend className="legends">Add a New Task</legend>

          <p><input autoFocus type="text" value={this.input} onChange={this.changeinput} /></p>
          <p>
          <label><input type="radio"  value="0" checked={this.state.selectedOption==="0"} onChange={this.onValueChange}  /> Todo </label><br/>
          <label><input type="radio"  value="1" checked={this.state.selectedOption==="1"} onChange={this.onValueChange}  /> In Progress </label><br/>
          <label><input type="radio"  value="2" checked={this.state.selectedOption==="2"} onChange={this.onValueChange}  /> Done </label></p>
          <button className="buttons" type="submit">Submit</button>
        </fieldset>
      </form>
     
     
        
          <Row class="rows">
             <Col  sm="3" className="column off">
                  <p className="titles"><u>TODO </u></p> 
                  <ol>{lists0}</ol>
             </Col>
             <Col sm="3" className="column"> 
                  <p className="titles"><u>IN PROGRESS</u></p> 
                  <ol>{lists1}</ol>
              </Col>
              <Col sm="3" className="column"> 
                  <p className="titles"><u>DONE </u></p> 
                  <ol>{lists2}</ol>
              </Col>
          </Row>
       

        </div>
      </div>
      </Container>
    );
  }
  
}
export default App;
