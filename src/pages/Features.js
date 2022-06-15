import React from 'react';


const Features = () => {
    return (
        <div className="features">
            <h1 className="title">Features</h1>
            <div className="row-features">
                <div className="img">
                    <img src="image/Group-688@2x-2.png" alt="..."/>
                </div>
                <div className="text">
                   <h2 className="text-center">Dashboard</h2>
                   <p>
                     The dashboard is a visual representation of the Bohikor App.<br />
                     It contains information imputed by the user on the app, such <br />
                     as the Bohikor Score, monthly spending, as well as reports, and Income.
                    </p>
                    <button className="btn btn-primary" type="button">Download</button>
                    
                </div>
            </div>
        </div>
        
               
        
  );
};
export default Features;