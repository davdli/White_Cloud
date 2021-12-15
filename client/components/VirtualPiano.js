import React from 'react'
import { useEffect } from "react";

const VirtualPiano = () => {

  useEffect(() => {
    const piano = document.querySelector('#piano');
    const data = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    let html = '';
    for (let octave = 0; octave < 2; octave++) {
      for (let i = 0; i < data.length; i++) {
        let hasSharp = (data[i] !== 'E' && data[i] !== 'B') ? true : false
        html += `<div class='whiteNote' data-code='${data[i]}${octave+4}'>`
        if (hasSharp) {
          html += `<div class='blackNote' data-code='${data[i]}#${octave+4}'></div>`
        }
        html += '</div>'
      }
    }
    piano.insertAdjacentHTML('beforeend', html)

  }, [])

  return (
    <div className="guest-container">
      <div id="piano"></div>
    </div>
  )
}

export default VirtualPiano;
