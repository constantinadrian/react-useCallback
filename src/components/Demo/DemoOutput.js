import React from "react";

const DemoOutput = (props) => {

    console.log('DemoOutput RUNNNING');

    return (
        <p>{props.show ? 'This is new!' : ''}</p>
    );
};

// memo it tells React that for this component,
// which it gets as a argument,
// React should look at the props this component gets
// and check the new value for all those props
// and compare it to the previous value those props got.
// And only if the value of a prop changed,
// the component should be re-executed and re-evaluated.
export default React.memo(DemoOutput);