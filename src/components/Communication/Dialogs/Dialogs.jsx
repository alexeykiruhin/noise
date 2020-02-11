import React from 'react';
import css from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

    const listNames = props.names.map(name => <Dialog name={name.name} id={name.id}/>);
    return (
        <div className={css.dialogs}>
            {listNames}
        </div>
    );

};

export default Dialogs;
