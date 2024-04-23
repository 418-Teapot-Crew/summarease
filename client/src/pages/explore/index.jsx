import { useState } from 'react';
import Dictaphone from '../../components/dictaphone/Dictaphone';

const ExplorePage = () => {
  const [tab, setTab] = useState('recording');
  return (
    <div className="h-[90vh] flex justify-center items-center flex-col">
      <div className="flex gap-3 w-[600px]">
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
      <Dictaphone />
    </div>
  );
};

export default ExplorePage;
