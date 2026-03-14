import "./App.css";
import { useState } from "react";
import TrollCaptcha from "./components/TrollCaptcha/TrollCaptcha";

function App() {
  const [verified, setVerified] = useState(false);
  return (
    <>
      {!verified && <TrollCaptcha onComplete={() => setVerified(true)} />}
      <section id="center">
        <iframe
          className="music-player"
          src="https://music.yandex.ru/iframe/album/37009656/track/140063166"
          frameBorder="0"
          allow="clipboard-write"
          width="923"
          height="411"
        >
          Слушайте{" "}
          <a href="https://music.yandex.ru/album/37009656/track/140063166?utm_source=desktop&utm_medium=copy_link">
            Братство воровского кольца
          </a>{" "}
          — <a href="https://music.yandex.ru/artist/24194275">Джон Шансон</a> на
          Яндекс Музыке
        </iframe>
      </section>
    </>
  );
}

export default App;
