import React from "react";

class userInput extends React.Component {
  constructor(props) {
    // fires before component is mounted
    super(props);
    this.state = {
        inputStyle : {
                    border: '2px solid red'
                },
    };
  }

  render() {
    return (
      <input
        type="text"
        style={this.state.inputStyle}
        onChange={this.props.changed}
        value={this.props.currentName}
      />
    );
  }
}

// const userInput = (props) => {
//     const inputStyle = {
//         border: '2px solid red'
//     };

//     return <input
//         type="text"
//         style={inputStyle}
//         onChange={props.changed}
//         value={props.currentName} />;
// };

export default userInput;
