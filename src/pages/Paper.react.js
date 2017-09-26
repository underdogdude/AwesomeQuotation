import React from 'react';

class Paper extends React.Component {
    
    render() {
        return (
            <div className="container">
            <div className="paper">
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
                <div className="row">
                    <table className="col-md-12 table table-bordered">
                        <thead className="thead-default">
                            <tr>
                                <th>รายละเอียด</th>
                                <th>หน่วย</th>
                                <th>ราคาต่อหน่วย</th>
                                <th>จำนวนเงิน (บาท)</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr><td>2</td><td>2</td><td>3</td><td>4</td></tr>
                            <tr><td>2</td><td>2</td><td>3</td><td>4</td></tr>
                            <tr><td>2</td><td>2</td><td>3</td><td>4</td></tr>
                            <tr><td colSpan="4"></td></tr>
                        </tbody>
                        <tbody> 
                            <tr><td colSpan="3" rowSpan="3"></td><td>รวมเป็นเงิน</td></tr>
                            <tr><td>ภาษีมูลค่าเพิ่ม</td></tr>
                            <tr><td className="thead-default">จำนวนเงินทั้งสิ้น</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <textarea>e</textarea>
                        <textarea>e</textarea>
                    </div>
                    <div className="col-md-6">
                        <textarea>e</textarea>
                        <textarea>e</textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h3>เสนอราคาโดย</h3>
                        <hr></hr>
                        <h4>()</h4>
                    </div>
                    <div className="col-md-6 text-center">
                        <h3>อนุมัติโดย</h3>
                        <hr></hr>
                        <h4>()</h4>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Paper;