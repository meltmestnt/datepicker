import React from 'react'
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
function StyledMuiDialog({children, open, close, ...rest}) {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={close}
      />,
      <FlatButton label="Submit" primary={true} onTouchTap={close} />
    ];
    return (
      <Dialog
        actions={actions}
        actionsContainerStyle={{ border: "none" }}
        modal={false}
        open={open}
        onRequestClose={close}
        autoScrollBodyContent={true}
        bodyStyle={{ padding: "0px" }}
        contentStyle={{ width: "310px" }}
        {...rest}
      >
        {children}
      </Dialog>
    );
}

export default StyledMuiDialog
