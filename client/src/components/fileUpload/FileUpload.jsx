/* eslint-disable react/prop-types */
const FileUpload = ({ file, setFile }) => {
  const handleUploadFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <label
        htmlFor="actual-btn"
        className="cursor-pointer h-[300px] w-[800px] border-blood border-2 text-blood bg-white flex justify-center items-center rounded tracking-wider  mt-10 text-xl"
      >
        {file && file.name ? file.name : 'Bir ses dosyası seçiniz'}
      </label>
      <input type="file" id="actual-btn" onChange={handleUploadFile} hidden />
    </>
  );
};

export default FileUpload;
