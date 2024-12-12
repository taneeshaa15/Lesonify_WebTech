import React, { useState, useEffect } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import "./uploadFile.css";
// import { storage } from '../../components/firebase/firebase.init'
// import { ref, uploadBytes, listAll } from 'firebase/storage'
// import { v4 } from 'uuid';
// import Swal from "sweetalert2";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom/dist";

const UploadFile = () => {
  let navigate = useNavigate();

  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = () => {
    // if (pdf == null){
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops..",
    //     text: "Please Upload a File!",
    //     timer: 1500,
    //   })
    //   return;
    // }
    // setLoading(true);
    // const pdfRef = ref(storage, "data/");
    // uploadBytes(pdfRef, pdf).then(() => {
    //   setLoading(false);
    //   Swal.fire({
    //     icon: "success",
    //     title: "Success",
    //     text: "File uplodaded successfully!",
    //     timer: 1500,
    //   });
    //   setPdf(null);
    // }).catch((err) => {
    //   console.log(err);
    // })

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/eeg-graphs");
    }, 20000);
  };

  return (
    <div className="admin-page d-flex flex-column align-items-center">
      {loading && (
        <div style={{ marginTop: "15%" }} className="position-absolute">
          <RotatingLines
            strokeColor="black"
            strokeWidth="4"
            animationDuration="1"
            width="50"
            visible={true}
          />
        </div>
      )}
      <div className="file-upload d-flex flex-column p-5">
        <div className="d-flex flex-column m-4">
          <IoMdCloudUpload className="upload-icon mx-auto"></IoMdCloudUpload>
          <input
            onChange={(e) => setPdf(e.target.files[0])}
            type="file"
            className="opacity-1"
            name=""
            id=""
          />
        </div>
        {pdf && <p className="mx-auto">{pdf.name}</p>}
        <button onClick={uploadFile} className="w-50 mx-auto btn btn-primary">
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
