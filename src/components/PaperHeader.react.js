import React from 'react';

class PaperHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="row" style={{marginTop: 2 + 'em'}}>
                    <div className="col-md-6">
                        <img src = "https://staticaltmetric.s3.amazonaws.com/uploads/2015/10/dark-logo-for-site.png" alt = "logo" className="logo"/>
                    </div>
                    <div className="col-md-6 pull-right">
                        <textarea name="title" className="pull-right">            
                            
                            ใบเสนอราคา (QUOTATION) แก้ไข
                        </textarea>
                    </div>
                </div>
                <div className="row">   
                    <div className="col-md-8">
                        <textarea>
                            เรียน คุณลูกค้าผู้น่ารัก
                            สำนักงานใหญ่ : บ้านเลขที่ 41/94 หมู่ 6 ปากเกร็ด นนทบุรี 11120
                        </textarea>
                        <textarea>
                            บริษัท ทาสแมว จำกัด
                        </textarea>
                       
                    </div>
                    <div className="col-md-4">
                        <textarea>เลขที่เอกสาร : 000001</textarea>
                        <textarea>วันที่เอกสาร : December 01, 2017</textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaperHeader ;