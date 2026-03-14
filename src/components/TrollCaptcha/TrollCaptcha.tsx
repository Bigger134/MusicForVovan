import { useState } from "react";

export default function TrollCaptcha({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const captchas = [
    { question: "Сколько будет 2 + 2 ?", answer: "4" },
    { question: "Напиши 'я не бот'", answer: "я не бот" },
    { question: "Сколько букв в слове 'React'?", answer: "5" },
    { question: "Введите слово 'музыка'", answer: "музыка" },
    { question: "Последняя проверка: 10 - 3 ?", answer: "7" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer.toLowerCase() !== captchas[step].answer) {
      alert("Неверно 😈 Попробуй ещё");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setAnswer("");

      if (step + 1 === captchas.length) {
        onComplete();
      } else {
        setStep(step + 1);
      }
    }, 2000);
  };

  return (
    <div style={overlay}>
      <div style={box}>
        <h2>Проверка безопасности</h2>

        {loading ? (
          <p>Проверяем ответ... 🔍</p>
        ) : (
          <>
            <p>
              Проверка {step + 1} из {captchas.length}
            </p>
            <p>{captchas[step].question}</p>

            <form onSubmit={handleSubmit}>
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                style={input}
              />

              <button type="submit" style={button}>
                Проверить
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const box = {
  background: "white",
  padding: "40px",
  borderRadius: "10px",
  textAlign: "center",
  width: "350px",
};

const input = {
  padding: "8px",
  marginTop: "10px",
  width: "100%",
};

const button = {
  marginTop: "15px",
  padding: "10px 20px",
  cursor: "pointer",
};
