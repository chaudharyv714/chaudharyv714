import './App.css';
import ImageSlider from './slider';
import { SliderData } from './data/SliderData';

function Appreciate() {

  return (
    <div className="appreciate">
      <img className="quote" src="quotation.png" alt="block" />
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Appreciate;