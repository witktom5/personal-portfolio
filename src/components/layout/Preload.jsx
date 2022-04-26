import blobsDark from '../../assets/svg/blobsDark.svg';
import blobsLight from '../../assets/svg/blobsLight.svg';
import spinner from '../../assets/svg/spinner.svg';
import spinnerDark from '../../assets/svg/spinnerDark.svg';
import wave1dark from '../../assets/svg/wave1dark.svg';
import wave2dark from '../../assets/svg/wave2dark.svg';
import wave3dark from '../../assets/svg/wave3dark.svg';
import wave1light from '../../assets/svg/wave1light.svg';
import wave2light from '../../assets/svg/wave2light.svg';
import wave3light from '../../assets/svg/wave3light.svg';

function Preload() {
  return (
    <div className='hidden'>
      {blobsDark}
      {blobsLight}
      {spinner}
      {spinnerDark}
      {wave1dark}
      {wave1light}
      {wave2dark}
      {wave2light}
      {wave3dark}
      {wave3light}
    </div>
  );
}
export default Preload;
