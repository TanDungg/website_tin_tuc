import { Carousel, Image } from "antd";

function Main() {
  return (
    <div className="container-body">
      <Carousel autoplay>
        <div>
          <Image src="src/assets/images/LogoTinTuc.png" />
        </div>
        <div>
          <Image src="src/assets/images/LogoTinTuc.png" />
        </div>
        <div>
          <Image src="src/assets/images/LogoTinTuc.png" />
        </div>
      </Carousel>
    </div>
  );
}

export default Main;
