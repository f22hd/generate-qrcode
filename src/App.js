import React,{useState} from 'react';
import QRCode from 'qrcode.react';
import './App.css'
import Footer from './components/footer';

function App() {
  const [text,setText] = useState('');
  const [visible,setVisible] = useState(false);
  const [message,setMessage] = useState('');

  const onTextChange = event => {
    setText(event.target.value)
  }

  const convert = () => {
    const hasValue = text != null;
    setVisible(hasValue);
    setMessage('');
  }

  const download = () => {
    const canvas = document.querySelector('canvas').toDataURL('image/png').replace('image/png','image/octet-stream');
    const link = document.createElement('a');
    link.setAttribute('id','barcode-link');
    link.setAttribute('download','barcode.png');
    link.setAttribute('href',canvas);
    link.click();

    setMessage('تم تحميل الصورة بنجاح');
  }

  return (
    <div className="container mt-5">
        <main className='row justify-content-center'>
            <div className='col-12 col-sm-6 text-center pt-5 px-0 content'>     
              <section className='display-flex'>
              <input dir='auto' className='form-control mb-2' placeholder='ادخل النص لتحويله الى باركود' type='text' name='text' value={text} onChange={onTextChange} />
              <button className='btn btn-primary' disabled={!text} onClick={() => convert()}>تحويل</button>

              {visible &&     
              <div className='mt-5 display-flex'>
                <QRCode className='mx-auto'
                  value={text}
                /> 
                <button className='btn btn-success mt-3' onClick={() => download()}>تحميل الصورة</button>
              </div>
              }

              { message &&
              <p className='text-center text-primary my-2'>{message}</p>
              }
              </section>
              <Footer></Footer>
            </div>
        </main>
    </div>
  );
}

export default App;
