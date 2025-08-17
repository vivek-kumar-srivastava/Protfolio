'use client';
import TextPressure from './text';

const Header = () => {
  return (
    <>
    <div id='home' style={{ position: 'relative', height: '270px' }}>
      <TextPressure
        text="Vivek's-Resume"
        fontSize
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={220}
       // fontSizeMultiplier={1}
      />
    </div>
    </>
  );
};

export default Header;
