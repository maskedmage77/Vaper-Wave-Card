import React from 'react';
import './App.css';

function App() {


  const animation_time = 4;
  const first_step = 8;
  const drop_time = 40;
  console.log( 0.05 * 5 ** 2)

  function TranslateAmount(n: number) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total = total + ( first_step * (0.975 ** n) )
    } 
    return total * 8;
  }

  function TurnAmount(n: number) {
    return -(0.25 * (0.65 ** n) - 0.25);
  }

  function GenerateRaindrop(number_of_drops: number) {
    let drops = [];
    for (var i = 0; i < number_of_drops; i++) {
      let left = Math.floor(Math.random() * 230) - 99;
      drops.push(
        <div className='RainDrop' style={{ 
          left: `${left * 8}px`, 
          animationDelay: `-${drop_time - Math.random()}s`,
          backgroundColor: `rgba(206, 206, 206, ${Math.random() * 0.5})`
        }}/>
      );
    }
    return drops;
  }

  return (
    <div className="App">
      <div className='Card'>
        <div className='CardBack'>
          <h2>Created by</h2>
          <h1>Simon Maskelyne</h1>
          <h2>"Jacob Hines"</h2>
          <h2>Made with React & Vanilla CSS</h2>
          <p className="Support">Developed for Firefox & Chromium Browsers
          <br />
          <a href='https://github.com/maskedmage77'><img src="/github.png" className="GitHub" /></a>
          </p>
        </div>
        <div className="VaporBox">
          <div className='RainContainer'>
          { GenerateRaindrop(200) }
          </div>
          <div className="PageDivider">
            
            <div className="Top">

              <img src="/mountain1.png" className="Mountain1" />
              <img src="/mountain1.png" className="Mountain3" />

              <img src="/skyline.png" className='Skyline' />

              <img src="/mountain2.png" className="Mountain2" />
              <img src="/mountain2.png" className="Mountain4" />

              <img src="/mountain3.png" className="MountainBG1" />
              <img src="/mountain4.png" className="MountainBG2" />

              <div className="Sun">
                <div className='SunLine1' />
                <div className='SunLine2' />
                <div className='SunLine3' />
                <div className='SunLine4' />
                <div className='SunLine5' />
                <div className='SunLine6' />
              </div>
            </div>
            <div className='TopGradient' />

            <div className="Mid"></div>
            <div className="Bot">
              
                <div className="VerticalLine" style={{ transform: `translate(-${ TranslateAmount(7) }px,0) rotate(${TurnAmount(7)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(-${ TranslateAmount(6) }px,0) rotate(${TurnAmount(6)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(-${ TranslateAmount(5) }px,0) rotate(${TurnAmount(5)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(-${ TranslateAmount(4) }px,0) rotate(${TurnAmount(4)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(-${ TranslateAmount(3) }px,0) rotate(${TurnAmount(3)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(-${ TranslateAmount(2) }px,0) rotate(${TurnAmount(2)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(-${ TranslateAmount(1) }px,0) rotate(${TurnAmount(1)}turn)` }} />

                  <div className="VerticalLine" style={{ transform: 'translate(0,0) rotate(0.0turn)' }} />

                <div className="VerticalLine" style={{ transform: `translate(${ TranslateAmount(1) }px,0) rotate(-${TurnAmount(1)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(${ TranslateAmount(2) }px,0) rotate(-${TurnAmount(2)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(${ TranslateAmount(3) }px,0) rotate(-${TurnAmount(3)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(${ TranslateAmount(4) }px,0) rotate(-${TurnAmount(4)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(${ TranslateAmount(5) }px,0) rotate(-${TurnAmount(5)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(${ TranslateAmount(6) }px,0) rotate(-${TurnAmount(6)}turn)` }} />
                <div className="VerticalLine" style={{ transform: `translate(${ TranslateAmount(7) }px,0) rotate(-${TurnAmount(7)}turn)` }} />

                <div className="HorizontalLine" style={{ animationDelay: `-${animation_time * 8 / 8}s` }} />
                <div className="HorizontalLine" style={{ animationDelay: `-${animation_time * 7 / 8}s` }} />
                <div className="HorizontalLine" style={{ animationDelay: `-${animation_time * 6 / 8}s` }} />
                <div className="HorizontalLine" style={{ animationDelay: `-${animation_time * 5 / 8}s` }} />
                <div className="HorizontalLine" style={{ animationDelay: `-${animation_time * 4 / 8}s` }} />
                <div className="HorizontalLine" style={{ animationDelay: `-${animation_time * 3 / 8}s` }} />
                <div className="HorizontalLine" style={{ animationDelay: `-${animation_time * 2 / 8}s` }} />
                <div className="HorizontalLine" style={{ animationDelay: `-${animation_time * 1 / 8}s` }} />
              <div className="Lines" />
            </div>
            <div className="BotBackground" />

          </div>
        </div>
      </div>
      <iframe scrolling="no" className="Music" frameBorder="no"  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/926084137&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />



    </div>
  );
}

export default App;
