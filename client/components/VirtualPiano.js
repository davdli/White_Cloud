import React from 'react'
import { useEffect } from "react";

const VirtualPiano = () => {

  useEffect(() => {
    const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'i', 'o', 'p']

    const keys = document.querySelectorAll('.key');
    const whiteKeys = document.querySelectorAll('.key.white');

    keys.forEach(key => {
      key.addEventListener('click', () => playNote(key))
    })

    document.addEventListener('keydown', event => {
      if (event.repeat) return;
      const key = event.key;
      const whiteKeyIndex = WHITE_KEYS.indexOf(key);

      if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    })

    const playNote = (key) => {
      const noteAudio = document.getElementById(key.dataset.note);
      noteAudio.currentTime = 0;
      noteAudio.play();

      key.classList.add('active')
      noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
      })
    }
  }, [])
  return (
    <div className="guest-container">
      <div className="piano-container">
        <div data-note="C" className="white key"></div>
        <div className="black key"></div>
        <div data-note="Db" className="white key"></div>
        <div className="black key"></div>
        <div data-note="D" className="white key"></div>
        <div data-note="Eb" className="white key"></div>
        <div className="black key"></div>
        <div data-note="E" className="white key"></div>
        <div className="black key"></div>
        <div data-note="F" className="white key"></div>
        <div className="black key"></div>
        <div data-note="Gb" className="white key"></div>

        <div data-note="G" className="white key"></div>
        <div className="black key"></div>
        <div data-note="Ab" className="white key"></div>
        <div className="black key"></div>
        <div data-note="A" className="white key"></div>
        <div data-note="Bb" className="white key"></div>
        <div className="black key"></div>
        <div data-note="B" className="white key"></div>
        <div className="black key"></div>
        <div className="white key"></div>
        <div className="black key"></div>
        <div className="white key"></div>
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
