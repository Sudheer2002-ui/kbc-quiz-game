import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 

const QRCodeGenerator = () => {
    const url = "http://192.168.1.33:3000"; 

  return (
    <div>
      <h2>Scan to Join</h2>
      <QRCodeCanvas value={url} />
      <p className='or'>OR</p>
    </div>
  );
};

export default QRCodeGenerator;
