import { useState } from 'react';
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
import Loading from '../../components/loading/Loading';

const InputPage = () => {
  const [loading, setLoading] = useState(false);
  const handleClickGetDocument = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.open('http://localhost:5173/pdfs/dummy.pdf', '_blank');
    }, 2000);
  };

  return (
    <div className="h-[90vh] flex justify-center items-center flex-col font-poppins">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex gap-3 w-[800px]">
            <textarea
              rows={10}
              className="w-full border border-blood p-3 rounded"
              placeholder="Dikkate alınması gereken noktalar..."
            />
          </div>

          <div className="flex gap-2 items-center border-2 border-blood p-3  text-blood bg-white hover:text-white hover:bg-blood transition-all duration-200 cursor-pointer mt-10">
            <span className="font-semibold" onClick={handleClickGetDocument}>
              Dokümanı Al
            </span>
            <TbPlayerTrackNextFilled className="" />
          </div>
        </>
      )}
    </div>
  );
};

export default InputPage;
