/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as Svg } from './image.svg';
import { ReactComponent as Svg2 } from './image2.svg';

// import { ReactComponent as Svg3 } from '/image3.svg';

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
const icon3Style = css`
  display: flex;
  position: absolute;
  bottom: 180px;
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
  top: 2px;
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
  color: black;
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
        </nav>
      </section>
      <div>
        <h1 css={mainTextStyle}>Explore Islands, Together</h1>
      </div>
      <div>
        <h1 css={h2Style}>Islands is your passport to the metaverse</h1>
      </div>
      <div>
        <button css={down1ButtonStyle}>Get Started</button>
        <button css={down2ButtonStyle}>Play video</button>
        <Svg2 css={icon2Style} />
      </div>
    </div>
  );
}

export default App;
