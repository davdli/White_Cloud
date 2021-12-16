import React from 'react'
import { useEffect } from "react";
import * as Tone from 'tone'

const VirtualPiano = () => {

  useEffect(() => {
    const piano = document.querySelector('#keys-container');
    const data = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    let html = '';

    for (let octave = 0; octave < 2; octave++) {
      for (let i = 0; i < data.length; i++) {
        let hasSharp = (data[i] !== 'E' && data[i] !== 'B') ? true : false
        html += `<div class='white-note' data-code='${data[i]}${octave+4}'>`
        if (hasSharp) {
          html += `<div class='black-note' data-code='${data[i]}#${octave+4}'></div>`
        }
        html += '</div>'
      }
    }

    piano.insertAdjacentHTML('beforeend', html)

    const notes = document.querySelectorAll('.white-note, .black-note')
    const keys = ['Tab', '1', 'q', '2', 'w', 'e', '4', 'r', '5', 't', '6', 'y', 'u', '8', 'i', '9', 'o', 'p', '-', '[', '=', ']', 'Backspace', '\\']
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      if (!event.repeat) {
        keys.forEach((key, index) => {
          if (event.key === key) {
            notes[index].style.background = (notes[index].classList.contains('white-note') ? '#a2a8d3' : '#a2a8d3')
            synth.triggerAttackRelease(notes[index].dataset.code, '16n')
          }
        })
      }
    })

    document.addEventListener('keyup', (event) => {
      keys.forEach((key, index) => {
        if (event.key === key) {
          notes[index].style.background = (notes[index].classList.contains('white-note') ? 'white' : '#0a0e12')
        }
      })
    })

  }, [])

  return (
    <div id="piano-container">
      <div id="piano-top"></div>
      <div id="keys-container">
      </div>
      <div id="piano-bottom"></div>
    </div>
  )
}

export default VirtualPiano;
