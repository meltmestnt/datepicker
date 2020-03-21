import React from 'react'
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
function StyledMuiDialog({children, open, close, tab, applyDate, ...rest}) {
    const save = () => {
      applyDate()
      close();
    }
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={close}
      />,
      <FlatButton label="Submit" primary={true} onTouchTap={save} />
    ];
    return (
      <Dialog
        actions={tab === 'year' ? null : actions}
        actionsContainerStyle={{ border: "none" }}
        modal={false}
        open={open}
        onRequestClose={close}
        bodyClassName={tab === 'year' ? 'custom-date-picker' : null}
        bodyStyle={{
          padding: "0px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxHeight: "434px"
        }}
        contentStyle={{
          width: "310px",
          minHeight: "434px",
          height: "434px",
          maxHeight: "434px"
        }}
        {...rest}
      >
        {children}
      </Dialog>
    );
}

export default StyledMuiDialog
