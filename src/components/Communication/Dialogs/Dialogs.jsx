import React, {Component} from 'react';
import css from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";

class Dialogs extends Component {

    render() {
        const listNames = this.props.names.map(name => <Dialog name={name.name} id={name.id} />);
        return (
            <div className={css.dialogs}>
                {listNames}
            </div>
        );

    }
};

export default Dialogs;
