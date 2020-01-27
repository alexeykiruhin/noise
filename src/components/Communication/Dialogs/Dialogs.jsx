import React, {Component} from 'react';
import css from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";

//Test data
const names = ['Alex', 'Dima', 'Jordan', 'Beavis', 'Butthead'];
const listNames = names.map(name => <Dialog name={name} id={names.indexOf(name)} />);

class Dialogs extends Component {
    render() {
        return (
            <div className={css.dialogs}>
                {listNames}
            </div>
        );

    }
};

export default Dialogs;
