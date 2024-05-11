import { Carousel } from "antd";

const CustomCarousel = ({ autoplay, images }) => {
  return (
    <Carousel autoplay={autoplay}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
