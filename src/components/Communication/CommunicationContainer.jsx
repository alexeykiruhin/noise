import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/communictaion_reducer";
import Communication from "./Communication";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        names: state.communication.names,
        messages: state.communication.messages,
        newMessageText: state.communication.newMessageText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            let action = updateNewMessageActionCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        }
    }
};

const CommunicationContainer = connect(mapStateToProps, mapDispatchToProps)(Communication);

export default CommunicationContainer;
