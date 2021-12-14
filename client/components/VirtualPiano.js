import React from 'react'
import { useEffect } from "react";

const VirtualPiano = () => {
  useEffect(() => {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
      key.addEventListener('click', () => playNote(key))
    })

    const playNote = (key) => {
      const noteAudio = document.getElementById(key.dataset.note);
      noteAudio.play()
    }
  }, [])
  return (
    <div className="guest-container">
      <div className="piano-container">
        <div data-note="C" className="key white"></div>
        <div data-note="Db" className="key black"></div>
        <div data-note="D" className="key white"></div>
        <div data-note="Eb" className="key black"></div>
        <div data-note="E" className="key white"></div>
        <div data-note="F" className="key white"></div>
        <div data-note="Gb" className="key black"></div>
        <div data-note="G" className="key white"></div>
        <div data-note="Ab" className="key black"></div>
        <div data-note="A" className="key white"></div>
        <div data-note="Bb" className="key black"></div>
        <div data-note="B" className="key white"></div>
      </div>

      <audio id="C" src="C.mp3"></audio>
      <audio id="Db" src="Db.mp3"></audio>
      <audio id="D" src="D.mp3"></audio>
      <audio id="Eb" src="Eb.mp3"></audio>
      <audio id="E" src="E.mp3"></audio>
      <audio id="F" src="F.mp3"></audio>
      <audio id="Gb" src="Gb.mp3"></audio>
      <audio id="G" src="G.mp3"></audio>
      <audio id="Ab" src="Ab.mp3"></audio>
      <audio id="A" src="A.mp3"></audio>
      <audio id="Bb" src="Bb.mp3"></audio>
      <audio id="B" src="B.mp3"></audio>
    </div>
  )
}

export default VirtualPiano;
