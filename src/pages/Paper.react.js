import React from 'react';
import PaperHeader from '../components/PaperHeader.react';
import PaperTable from '../components/PaperTable.react';
import PaperFooter from '../components/PaperFooter.react';

class Paper extends React.Component {
    
    render() {
        return (
            <div className="container paper">
                <PaperHeader />
                <PaperTable />
                <PaperFooter />
            </div>
        )
    }
}

export default Paper;