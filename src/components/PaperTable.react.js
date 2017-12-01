import React, { Component } from 'react';

class PaperTable extends Component {
    render() {
        return (
            <div>
                <div className="row" style={{marginTop: 2 + 'em'}}>
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
                            <tr><td>ออกแบบเว็บไซต์</td><td>ออกแบบและพัฒนาเว็บไซต์ให้ทันกับยุคสมัย</td><td>3</td><td>4</td></tr>
                            <tr><td>ต่ออายุโดเมน</td><td>ต่ออายุโดเมนและพื้นที่จัดเก็บ</td><td>3</td><td>4</td></tr>
                            <tr><td colSpan="4"></td></tr>
                        </tbody>
                        <tbody> 
                            <tr><td colSpan="3" rowSpan="3"></td><td>รวมเป็นเงิน</td></tr>
                            <tr><td>ภาษีมูลค่าเพิ่ม</td></tr>
                            <tr><td className="thead-default">จำนวนเงินทั้งสิ้น</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="row" style={{marginTop: 2 + 'em'}}>
                    <div className="col-md-6">
                        <textarea>
                            เงื่อนไขการชำระเงิน
                        </textarea>
                        <textarea>
                            งวดที่ 1 จ่ายให้ 60% ก่อนเริ่มงาน 
                            งวดที่ 2 จ่ายให้ 40% หลังจากเว็บไซต์เสร็จสมบูรณ์
                        </textarea>
                    </div>
                    <div className="col-md-6">
                        <textarea>
                            วิธีการชำระเงิน
                        </textarea>
                        <textarea>
                                ชำระค่าใช้จ่ายได้ด้วยเงินสด หรือชำระผ่านตู้เอทีเอ็ม Pay-in 
                                หรือ Internet Banking
                            </textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaperTable;