import React, { Component } from 'react';

class PaperTable extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default PaperTable;