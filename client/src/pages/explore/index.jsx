// import Dictaphone from '../../components/dictaphone/Dictaphone';
import { useState } from 'react';
import FileUpload from '../../components/fileUpload/FileUpload';
import Recording from '../../components/recording/Recording';
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/textInput/TextInput';

const ExplorePage = () => {
  const [tab, setTab] = useState('text');
  const [file, setFile] = useState(null);
  const [time, setTime] = useState(0);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  return (
    <div className="h-[90vh] flex justify-center items-center flex-col font-poppins">
      <div className="flex gap-3 w-[800px]">
        <div
          onClick={() => setTab('text')}
          className={`cursor-pointer border-blood  px-5 py-2 border-2 text-base rounded flex-1 text-center  font-bold ${
            tab === 'text' ? 'bg-blood text-white' : 'bg-white text-blood'
          }`}
        >
          Metin
        </div>
        <div
          onClick={() => setTab('recording')}
          className={`cursor-pointer border-blood  px-5 py-2 border-2 text-base rounded flex-1 text-center  font-bold ${
            tab === 'recording' ? 'bg-blood text-white' : 'bg-white text-blood'
          }`}
        >
          Kayıt
        </div>
        <div
          onClick={() => setTab('file')}
          className={`cursor-pointer border-blood  px-5 py-2 border-2 text-base rounded flex-1 text-center font-bold ${
            tab === 'file' ? 'bg-blood text-white' : 'bg-white text-blood'
          }`}
        >
          Dosya
        </div>
      </div>
      {tab === 'recording' && <Recording time={time} setTime={setTime} />}
      {tab === 'file' && <FileUpload file={file} setFile={setFile} />}
      {tab === 'text' && (
        <TextInput content={content} setContent={setContent} />
      )}
      {((tab === 'recording' && time) ||
        (tab === 'file' && file) ||
        (tab === 'text' && content)) && (
        <div
          className={`flex gap-2 items-center border-2 border-blood p-3  text-blood bg-white hover:text-white hover:bg-blood transition-all duration-200 cursor-pointer mt-10`}
          onClick={() => navigate('/input')}
        >
          <span className="font-semibold">Sonraki Adım</span>
          <TbPlayerTrackNextFilled className="" />
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
