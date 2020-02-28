import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setResultCode, setUserData} from "../../redux/auth_reducer";
import * as axios from "axios";

class HeaderContainer extends Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((res) => {
                let {id, email, login} = res.data.data;
                this.props.setUserData(id, email, login);
                this.props.setResultCode(res.data.resultCode);
            });
    }

    render() {
        return <Header {...this.props} resultCode={this.props.resultCode}/>
    }
}

const mapStateToProps = (state) => {
    return {
        resultCode: state.auth.resultCode,
    }
};

export default connect(mapStateToProps, {setUserData, setResultCode})(HeaderContainer);
