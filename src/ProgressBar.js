import React from "react";

const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    width: '800px',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#00695c',
    borderRadius: 'inherit'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  const infoStyles = {
    padding: 10
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed/10} s`}</span>
      </div>
        <div style={infoStyles}> With Guru extension turned off, the progress bar should be completed in 10 second</div>
        <div style={infoStyles}> With Guru extension enabled, noticed the progress bar is freezed after 3 seconds</div>
    </div>
  );
};

export default ProgressBar;