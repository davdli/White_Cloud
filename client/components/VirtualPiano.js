import React from 'react'

const VirtualPiano = () => {
  return (
    <div class="guest-container">
      <div class="piano-container">
        <div data-note="C" class="white-key"></div>
        <div data-note="Db" class="black-key"></div>
        <div data-note="D" class="white-key"></div>
        <div data-note="Eb" class="black-key"></div>
        <div data-note="E" class="white-key"></div>
        <div data-note="F" class="white-key"></div>
        <div data-note="Gb" class="black-key"></div>
        <div data-note="G" class="white-key"></div>
        <div data-note="Ab" class="black-key"></div>
        <div data-note="A" class="white-key"></div>
        <div data-note="Bb" class="black-key"></div>
        <div data-note="B" class="white-key"></div>
      </div>

      <audio id="C" src="../../notes/C.mp3"></audio>
      <audio id="Db" src="../../notes/Db.mp3"></audio>
      <audio id="D" src="../../notes/D.mp3"></audio>
      <audio id="Eb" src="../../notes/Eb.mp3"></audio>
      <audio id="E" src="../../notes/E.mp3"></audio>
      <audio id="F" src="../../notes/F.mp3"></audio>
      <audio id="Gb" src="../../notes/Gb.mp3"></audio>
      <audio id="G" src="../../notes/G.mp3"></audio>
      <audio id="Ab" src="../../notes/Ab.mp3"></audio>
      <audio id="A" src="../../notes/A.mp3"></audio>
      <audio id="Bb" src="../../notes/Bb.mp3"></audio>
      <audio id="B" src="../../notes/B.mp3"></audio>
    </div>

  )
}

export default VirtualPiano;
