import React from 'react';

export default function Alert(props) {


  const Captalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (

    <div style={{height: '40px'}}>
      {props.alert &&
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{Captalize(props.alert.type)}</strong>{props.alert.msg}
      </div>}
    </div>
  )
}
