/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as Svg2 } from './image2.svg';
import FirstImage from './image3.png';
import SecondImage from './image4.png';
import ThirdImage from './image5.png';
import FourthImage from './image6.png';
import { ReactComponent as Svg } from './logo1.svg';

// import { getByDisplayValue } from '@testing-library/react';

const navigationStyle = css`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  max-width: 1350px;
  padding: 0 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const allNavStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const navHomeStyle = css`
  left: 759px;
  position: absolute;
`;
const navMediaStyle = css`
  right: 450px;
  position: absolute;
  color: grey;
  transition: 0.3s ease;
  :hover {
    color: black;
  }
`;
const navCareerStyle = css`
  right: 350px;
  position: absolute;
  color: grey;
  transition: 0.3s ease;
  :hover {
    color: black;
  }
`;

const icon1Style = css`
  display: flex;
  position: absolute;
  bottom: 100px;
  left: 820px;
  overflow: hidden;
`;

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
  left: 75px;
  font-size: 8.5rem;
  max-width: 90%;
  text-align: center;
`;
const h2Style = css`
  font-size: 2rem;
  display: flex;
  position: absolute;
  bottom: 180px;
  left: 450px;
  color: grey;
`;

const down1ButtonStyle = css`
  display: flex;
  position: absolute;
  font-size: 22px;
  font-weight: 600;
  background: white;
  padding: 20px 60px;
  border-radius: 30px;
  bottom: 80px;
  left: 480px;
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
  left: 795px;
  background-image: linear-gradient(
    225deg,
    #27d86c 0%,
    #26caf8 50%,
    #c625d0 100%
  );
  z-index: -1;
  transition: 0.3s ease;
`;
const down3ButtonStyle = css`
  display: flex;
  position: absolute;
  font-size: 18px;
  font-weight: 600;
  background: blue;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  top: 4000px;
  left: 650px;
`;

const secondSectionStyle = css`
  display: flex;
  bottom: 30px;
  left: 450px;
  align-items: center;
  margin: auto;
`;

const image2Style = css`
  position: absolute;
  left: 160px;
  top: 700px;
  width: 80%;
  height: 110%;
`;
const line2TextStyle = css`
  display: flex;
  position: absolute;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  top: 1440px;
  left: 590px;
  font-size: 4rem;
  max-width: 90%;
  text-align: center;
`;
const line3TextStyle = css`
  display: flex;
  position: absolute;
  color: gray;
  top: 1680px;
  left: 290px;
  font-size: 0.9rem;
  max-width: 90%;
  text-align: center;
`;
const line4TextStyle = css`
  display: flex;
  position: absolute;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  top: 2600px;
  left: 530px;
  font-size: 4rem;
  max-width: 90%;
  text-align: center;
`;

const line5TextStyle = css`
  display: flex;
  position: absolute;
  color: gray;
  top: 2840px;
  left: 320px;
  font-size: 0.9rem;
  max-width: 90%;
  text-align: center;
`;
const line6TextStyle = css`
  display: flex;
  position: absolute;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  top: 3700px;
  left: 580px;
  font-size: 4rem;
  max-width: 90%;
  text-align: center;
`;

const line7TextStyle = css`
  display: flex;
  position: absolute;
  color: gray;
  top: 3900px;
  left: 480px;
  font-size: 0.9rem;
  max-width: 90%;
  text-align: center;
`;
const image3Style = css`
  position: absolute;
  left: 160px;
  top: 1850px;
  width: 80%;
  height: 110%;
`;
const image4Style = css`
  position: absolute;
  left: 160px;
  top: 3000px;
  width: 80%;
  height: 110%;
`;
const image5Style = css`
  position: absolute;
  left: 160px;
  top: 4100px;
  width: 80%;
  height: 110%;
`;

function App() {
  return (
    <div>
      <section>
        <nav css={navigationStyle}>
          <div>
            <Svg />
          </div>
          <nav css={allNavStyle}>
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
          <Svg2 src css={icon1Style} />
        </div>
      </section>
      <section css={secondSectionStyle}>
        <div>
          <img css={image2Style} src={FirstImage} alt="foto" />
        </div>
        <div css={line2TextStyle}>
          <h1>Gallery</h1>
        </div>
        <div css={line3TextStyle}>
          <h1>
            A social profile for all your NFTs regardless of which wallet or
            blockchain they are issued on.
          </h1>
        </div>
      </section>
      <section>
        <div>
          <img css={image3Style} src={SecondImage} alt="foto" />
        </div>
        <div css={line4TextStyle}>
          <h1>Storefront</h1>
        </div>
        <div css={line5TextStyle}>
          <h1>
            Storefront aggregation across all your favorite marketplaces
            starting with OpenSea.
          </h1>
        </div>
      </section>
      <section>
        <div>
          <img css={image4Style} src={ThirdImage} alt="foto" />
        </div>
        <div css={line6TextStyle}>
          <h1>Threads</h1>
        </div>
        <div css={line7TextStyle}>
          <h1>Token-gated threads to keep up with verified owners.</h1>
        </div>
        <button css={down3ButtonStyle}>Comming soon</button>
      </section>
      <section>
        <div>
          <img css={image5Style} src={FourthImage} alt="foto" />
        </div>
      </section>
    </div>
  );
}

export default App;
