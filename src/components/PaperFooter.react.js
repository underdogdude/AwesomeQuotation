import React from 'react';

class PaperFooter extends React.Component {
    
    render() {
        return (
            <div className="row" style={{marginTop: 2 + 'em'}}>
                <div className="col-md-6 text-center">
                    <h3>เสนอราคาโดย</h3>
                    <hr></hr>
                    <h4>(________________)</h4>
                </div>
                <div className="col-md-6 text-center">
                    <h3>อนุมัติโดย</h3>
                    <hr></hr>
                    <h4>(________________)</h4>
                </div>
            </div>
        );
    }
}


export default PaperFooter;