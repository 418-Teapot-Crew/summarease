const FileUpload = () => {
  return (
    <>
      <label
        htmlFor="actual-btn"
        className="cursor-pointer h-[300px] w-[600px] border-blood border-2 text-blood bg-white flex justify-center items-center rounded tracking-wider  mt-10"
      >
        File Upload
      </label>
      <input type="file" id="actual-btn" hidden />
    </>
  );
};

export default FileUpload;
