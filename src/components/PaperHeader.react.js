import React from 'react';

class PaperHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <img src = "https://staticaltmetric.s3.amazonaws.com/uploads/2015/10/dark-logo-for-site.png" alt = "logo" className="logo"/>
                    </div>
                    <div className="col-md-6 pull-right">
                        <textarea name="title" className="pull-right">ee</textarea>
                    </div>
                </div>
                <div className="row">   
                    <div className="col-md-8">
                        <textarea>e</textarea>
                        <textarea>e</textarea>
                        <textarea>e</textarea>
                    </div>
                    <div className="col-md-4">
                        <textarea>e</textarea>
                        <textarea>e</textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaperHeader ;