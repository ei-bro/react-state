// import React, { Component } from "react";
// import Counterdisplayer from "./CounterDisplayer";
// class Mycounter extends Component {
//     state = {
//         cout: 0,
//     };

//     allClicksCounter = () => {
//         this.setState((state) => {
//             return { cout: state.cout + 1 };
//         });
//     };

//     render() {
//         return (
//             <div className="container">
//                 <button onClick={this.allClicksCounter}>click here</button>
//                 <Counterdisplayer value={this.state.cout} />
//             </div>
//         );
//     }
// }

// export default Mycounter;

//  // ***************************   Question 2    ***********************************************

import React, { Component } from "react";
import Counterdisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
class Mycounter extends Component {
    state = {
        count: 0,
        even: 0,
    };

    allClicksCounter = () => {
        this.setState((state) => {
            return { count: state.count + 1 };
        });
    };

    evenClicksCounter = () => {
        if (this.state.count % 2 !== 0) {
            this.setState((state) => {
                return { even: state.even + 2 };
            });
        }
    };
    yegaraFunction = () => {
        this.allClicksCounter();
        this.evenClicksCounter();
    };

    render() {
        return (
            <div className="container">
                <button onClick={this.yegaraFunction}>click here</button>
                <Counterdisplayer value={this.state.count} />
                <EvenCounterDisplayer value={this.state.even} />
            </div>
        );
    }
}

export default Mycounter;
