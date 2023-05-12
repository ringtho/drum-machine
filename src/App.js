import React from 'react'
import $ from 'jquery'

$(document).ready(function () {
  $('#heater-1').click(function () {
    $('#Q')[0].play()
  })

  $('#heater-2').click(function () {
    $('#W')[0].play()
  })

  $('#heater-3').click(function () {
    $('#E')[0].play()
  })

  $('#heater-4').click(function () {
    $('#A')[0].play()
  })

  $('#heater-5').click(function () {
    $('#S')[0].play()
  })

  $('#heater-6').click(function () {
    $('#D')[0].play()
  })

  $('#heater-7').click(function () {
    $('#Z')[0].play()
  })

  $('#heater-8').click(function () {
    $('#X')[0].play()
  })

  $('#heater-9').click(function () {
    $('#C')[0].play()
  })
})

function App () {
  return (
    <div className="app">
      <div id="drum-machine" className="wrapper">
        <div className='logo-container'>
          <em>FCC</em>
          <i className='fa-brands fa-free-code-camp'></i>
        </div>
        <div className='drum-buttons'>
          <div className='drum-pad' id="heater-1">
            <p>Q</p>
            <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            className='clip' id="Q">
            </audio>
          </div>
          <div className='drum-pad' id="heater-2">
            <p>W</p>
            <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            className='clip' id="W">
            </audio>
          </div>
          <div className='drum-pad' id="heater-3">
            <p>E</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className='clip' id="E"></audio>
          </div>
          <div className='drum-pad' id="heater-4">
            <p>A</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className='clip' id="A"></audio>
          </div>
          <div className='drum-pad' id="heater-5">
            <p>S</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className='clip' id="S"></audio>
          </div>
          <div className='drum-pad' id="heater-6">
            <p>D</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className='clip' id="D"></audio>
          </div>
          <div className='drum-pad' id="heater-7">
            <p>Z</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className='clip' id="Z"></audio>
          </div>
          <div className='drum-pad' id="heater-8">
            <p>X</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className='clip' id="X"></audio>
          </div>
          <div className='drum-pad' id="heater-9">
            <p>C</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className='clip' id="C"></audio>
          </div>
        </div>
        <div className='drum-controls'>
          <div className='power'>
            <p>Power</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className='display' id='display'>
          </div>
          <div className='controls-slider'>
            <input type="range" min="1" max="100" step="1" value="30" className='range-slider' />
          </div>
          <div className='bank'>
            <p>Bank</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
