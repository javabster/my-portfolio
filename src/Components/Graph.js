import React, {Component} from 'react';

class Graph extends Component {

constructor(props) {
  super(props);
  this.state={grades: [
                {name: 'dog', value: 10}]};
}

componentDidMount() {
  var graphData = {grades: [
                {name: 'Listening', value: 84}, 
                {name: 'Speaking', value:94}, 
                {name: 'Reading', value: 78}, 
                {name: 'Business', value:99}]};
  
  const sortedData = {grades: graphData.grades.sort((a,b) => {
    return a.value - b.value
  })};

  console.log(graphData);
  console.log(sortedData);
  this.setState(sortedData);

  
}


render() {
  return(
    <div style={{display: 'flex',
                 height:((this.state.grades.length)*70 + 20), width:550, 
                 backgroundColor: 'transparent',
                 justifyContent: 'center',
                 // alignItems: 'center'
               }}>
      <div style={{height: '100%', 
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center'}}>{this.state.grades.map((grade, n) => {
        return(
            <div key={n} style={{color: 'black', 
                         textAlign: 'center',
                         height:50,
                         marginTop: 20,
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center',
                       }}><div>{grade.name}</div></div>
          )})}</div>
      <div style={{height: '100%', 
                   display: 'flex',
                   flexDirection: 'column',
                   alignItems: 'center',
                   marginLeft: 10
                 }}>{this.state.grades.map((grade, v) => {
        return(
            <div key={v} style={{color: 'black', 
                         textAlign: 'center',
                         height:50,
                         width: 50, marginTop: 20,
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center',
                       }}><div>{grade.value}</div></div>
          )})}</div>
      <div style={{height:'100%', width: 400, marginLeft: 5}}>{this.state.grades.map((grade, g) => {
        return (
          <div key={g} style={{backgroundColor: '#4b0082', 
                               height:50, width:grade.value + '%', 
                               opacity: grade.value*0.01 - 0.2,
                               // margin: 10,
                               marginTop: 20,
                               borderRadius: '8px'}}></div>
      )})}</div>
    </div>
    )
}


}

export default Graph;