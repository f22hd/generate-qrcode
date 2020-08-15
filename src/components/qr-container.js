import React, { useState } from "react";
import QRCode from "qrcode.react";

function QRContainer({ text }) {
  const [message, setMessage] = useState("");

  const download = () => {
    const canvas = document
      .querySelector("canvas")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.setAttribute("id", "barcode-link");
    link.setAttribute("download", "barcode.png");
    link.setAttribute("href", canvas);
    link.click();

    setMessage("تم تحميل الصورة بنجاح");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <section className="flex-auto">
      <div className="w-full mb-4">
        <QRCode className="m-auto" value={text} />
      </div>
      <div className="w-full mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 mt-3 rounded"
          onClick={() => download()}
        >
          تحميل الصورة
        </button>
      </div>
      {message && <p className="text-blue-700 my-2">{message}</p>}
    </section>
  );
}

export default QRContainer;
