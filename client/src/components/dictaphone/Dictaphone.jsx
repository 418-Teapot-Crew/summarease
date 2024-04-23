import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { useState } from 'react';

import { FaPlay } from 'react-icons/fa';
import { FaCirclePause } from 'react-icons/fa6';

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
      <div className="container-test">
        <div className="main-content">{transcript}</div>

        <div className="btn-style">
          {!recording ? (
            <button
              className="btn-class"
              onClick={() => {
                setRecording(true);
                SpeechRecognition.startListening({
                  continuous: true,
                  language: 'tr-TR',
                });
              }}
            >
              <FaPlay className="text-4xl" />
            </button>
          ) : (
            <button
              className="btn-class"
              onClick={() => {
                setRecording(false);
                SpeechRecognition.stopListening();
              }}
            >
              <FaCirclePause className="text-4xl" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Dictaphone;
