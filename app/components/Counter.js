/**
 * Created by carl.hand on 31/03/2017.
 */
import React from 'react';

var Counter = React.createClass({
   
    render: function() {
        return (
            <div>
                <div className="counter">
                    <button className="counter-action decrement"> - </button>
                    <div className="counter-score"> 31 </div>
                    <button className="counter-action increment"> + </button>
                </div>
            </div>
        );
    }
    
});

export default Counter;