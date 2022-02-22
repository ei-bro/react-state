// import React, { Component } from "react";
// import CounterDisplayer from "./CounterDisplayer";
// import EvenCounterDisplayer from "./EvenCounterDisplayer";
// class Mycounter extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0,
//             even: 1548984,
//         };
//     }

//     allClicksCounter = () => {
//         this.setState((state) => {
//             return { count: state.count + 1 };
//         });
//     };

//     render() {
//         return (
//             <div className=container>
//                 <button onClick={this.allClicksCounter}>Click here</button>
//                 <CounterDisplayer value={this.state.count} />
//                 <EvenCounterDisplayer value={this.state.even} />
//             </div>
//         );
//     }
// }

// export default Mycounter;

// // ****************  QUESTION 2    ****************

import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
class Mycounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    allClicksCounter = () => {
        this.setState((state) => {
            return { count: state.count + 1 };
        });
    };

    render() {
        return (
            <div className="container">
                <button onClick={this.allClicksCounter}>Click here</button>
                <CounterDisplayer value={this.state.count} />
                <EvenCounterDisplayer even={this.state.count} />
            </div>
        );
    }
}

export default Mycounter;
