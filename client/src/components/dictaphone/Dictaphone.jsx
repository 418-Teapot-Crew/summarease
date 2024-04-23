import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { useState } from 'react';

import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

const Dictaphone = () => {
  const [recording, setRecording] = useState(false);
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  console.log('transcript', transcript);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 mt-10">
        <div className="bg-white h-[300px] w-[600px] border border-blood text-blood p-3 spacin">
          {transcript}
        </div>

        <div className="btn-style">
          {!recording ? (
            <FaPlay
              className="text-4xl text-blood"
              onClick={() => {
                SpeechRecognition.startListening({
                  continuous: true,
                  language: 'tr-TR',
                });
                setRecording(true);
              }}
            />
          ) : (
            <FaPause
              className="text-4xl text-blood"
              onClick={() => {
                SpeechRecognition.stopListening();
                setRecording(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Dictaphone;
