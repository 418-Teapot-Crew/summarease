// eslint-disable-next-line react/prop-types
const TextInput = ({ content, setContent }) => {
  return (
    <div className=" w-[800px] flex flex-col gap-5 mt-10">
      <textarea
        rows={10}
        className="w-full border border-blood p-3 rounded"
        placeholder="Toplantı İçeriği"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
