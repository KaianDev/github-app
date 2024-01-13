import styled from "styled-components";

const ImageBrand = styled.img`
  width: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  filter: invert();
`;

ImageBrand.defaultProps = {
  src: "/Logo.png",
};

export default ImageBrand;
