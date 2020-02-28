import * as axios from "axios";

let Ajax = (url, callback) => {
    return (axios
        .get(`${url}`)
        .then((res) => {
            let out = {};
            for (let i = 2; i < arguments.length; i++) {
                out.push(res.arguments[i]);
            }
            callback(out);
            // this.props.setResultCode(res.data.resultCode);
        }));
};



export default Ajax;
