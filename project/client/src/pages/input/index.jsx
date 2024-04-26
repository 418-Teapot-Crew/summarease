import { useState } from 'react';
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
import Loading from '../../components/loading/Loading';
import { useNavigate } from 'react-router-dom';

const InputPage = () => {
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const navigation = useNavigate();
  const handleClickGetDocument = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.open(
        'http://localhost:5173/pdfs/pazarlama-stratejisi-havelsan.pdf',
        '_blank'
      );
      navigation('/');
    }, 2000);
  };

  const handleAddTag = () => {
    setTags((prev) => [...prev, tag]);
    setTag('');
  };

  return (
    <div className="h-[90vh] flex justify-center items-center flex-col font-poppins">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className=" w-[800px] flex flex-col gap-5">
            <input
              type="text"
              className="w-full border border-blood p-3 rounded-l outline-none"
              placeholder="Konu"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="w-full border border-blood p-3 rounded-l outline-none"
              placeholder="Tarih"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <textarea
              rows={10}
              className="w-full border border-blood p-3 rounded"
              placeholder="Özet Başlıkları"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className="flex">
              <input
                type="text"
                className="w-full border border-blood p-3 rounded-l outline-none"
                placeholder="Etiket"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="bg-blood py-3 px-6 text-white rounded-r"
              >
                Ekle
              </button>
            </div>
            <div className="flex gap-3">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-blood py-2 px-5 text-sm text-white rounded tracking-wider"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          {content ? (
            <div className="flex gap-2 items-center border-2 border-blood p-3  text-blood bg-white hover:text-white hover:bg-blood transition-all duration-200 cursor-pointer mt-10">
              <span className="font-semibold" onClick={handleClickGetDocument}>
                Dokümanı Al
              </span>
              <TbPlayerTrackNextFilled className="" />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default InputPage;
