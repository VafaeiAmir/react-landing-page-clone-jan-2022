/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as Svg } from './image.svg';
import { ReactComponent as Svg2 } from './image2.svg';
import FirstImage from './image3.png';
import SecondImage from './image4.png';

// import { getByDisplayValue } from '@testing-library/react';

const navigationStyle = css`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  max-width: 200;
  padding: 1px 160px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const navHomeStyle = css`
  display: flex;
  top: 12px;
  right: 600px;
  position: absolute;
  margin: auto;
  font-weight: 600;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const navMediaStyle = css`
  display: flex;
  top: 12px;
  right: 515px;
  position: absolute;
  margin: auto;
  font-weight: 600;
  box-sizing: border-box;
  color: grey;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease;
  :hover {
    color: black;
  }
`;
const navCareerStyle = css`
  display: flex;
  top: 12px;
  right: 430px;
  position: absolute;
  margin: auto;
  font-weight: 600;
  box-sizing: border-box;
  color: grey;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease;
  :hover {
    color: black;
  }
`;
const logoStyle = css`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;
const iconStyle = css`
  height: 28px;
  width: 32px;
`;
const icon2Style = css`
  display: flex;
  position: absolute;
  bottom: 100px;
  left: 820px;
  overflow: hidden;
`;
/* const icon3Style = css`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 500ms ease 500ms;
`;*/

const buttonGetStyle = css`
  font-size: 16px;
  background: white;
  color: black;
  padding: 10px 28px;
  border-radius: 30px;
`;
const buttonSignStyle = css`
  font-size: 16px;
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  transition: 0.3s ease;
  :hover {
    background-color: grey;
  }
`;

const mainTextStyle = css`
  display: flex;
  position: absolute;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  top: 0px;
  left: 79px;
  font-size: 8.5rem;
  max-width: 90%;
  text-align: center;
`;
const h2Style = css`
  font-size: 2rem;
  display: flex;
  position: absolute;
  bottom: 180px;
  left: 460px;
  color: grey;
`;

const down1ButtonStyle = css`
  display: flex;
  position: absolute;
  font-size: 22px;
  font-weight: 600;
  background: white;
  // color: black;
  padding: 20px 60px;
  border-radius: 30px;
  bottom: 80px;
  left: 490px;
`;
const down2ButtonStyle = css`
  display: flex;
  position: absolute;
  font-size: 22px;
  font-weight: 600;
  background: white;
  color: black;
  padding: 20px 60px;
  border-radius: 30px;
  bottom: 80px;
  left: 800px;
  overflow: hidden;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #27d86c 0%,
    #26caf8 50%,
    #c625d0 100%
  );
  z-index: -1;
  transition: 0.3s ease;
`;

const secondSectionStyle = css`
  display: flex;
  bottom: 30px;
  left: 450px;
`;
const image3Style = css`
  position: absolute;
  left: 160px;
  top: 700px;
  width: 80%;
  height: 110%;
`;
const secondTextStyle = css`
  display: flex;
  position: absolute;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  top: 1450px;
  left: 590px;
  font-size: 4rem;
  max-width: 90%;
  text-align: center;
`;
const thirdTextStyle = css`
  display: flex;
  position: absolute;
  color: gray;
  top: 1700px;
  left: 290px;
  font-size: 0.9rem;
  max-width: 90%;
  text-align: center;
`;
const image4Style = css`
  position: absolute;
  left: 160px;
  top: 1850px;
  width: 80%;
  height: 110%;
`;

function App() {
  return (
    <div>
      <section>
        <nav css={navigationStyle}>
          <div css={logoStyle}>
            <Svg css={iconStyle} />
          </div>
          <nav>
            <p css={navHomeStyle}>Home</p>
            <p css={navMediaStyle}>Media</p>
            <p css={navCareerStyle}>Careers</p>
          </nav>
          <div>
            <button css={buttonGetStyle}>Get Started</button>
            <button css={buttonSignStyle}>Sign In</button>
          </div>
        </nav>{' '}
        <div>
          <h1 css={mainTextStyle}>Explore Islands, Together</h1>
        </div>
        <div>
          <h1 css={h2Style}>Islands is your passport to the metaverse</h1>
        </div>
        <div>
          <button css={down1ButtonStyle}>Get Started</button>
          <button css={down2ButtonStyle}>Play video</button>
          <Svg2 src css={icon2Style} />
        </div>
      </section>
      <section css={secondSectionStyle}>
        <div>
          <img css={image3Style} src={FirstImage} alt="foto" />
        </div>
        <div css={secondTextStyle}>
          <h1>Gallery</h1>
        </div>
        <div css={thirdTextStyle}>
          <h1>
            A social profile for all your NFTs regardless of which wallet or
            blockchain they are issued on.
          </h1>
        </div>
      </section>
      <section>
        <div>
          <img css={image4Style} src={SecondImage} alt="foto" />
        </div>
      </section>
    </div>
  );
}

export default App;
