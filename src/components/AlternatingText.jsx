import React from "react";
import ReactRotatingText from 'react-rotating-text';

export default function AlternatingText(props) {
    return <ReactRotatingText typingInterval={60} deletingInterval={30} pause={500} emptyPause={500} items={props.alternatingStrings} />;
}