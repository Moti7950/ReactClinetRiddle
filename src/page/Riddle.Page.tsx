import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { GetRiddles } from "../utility/functionFetch.tsx";

type Riddle = {
  id: number;
  taskDescription: string;
  correctAnswer: string;
};

export default function RiddlePage() {
  const answerInput = useRef<HTMLInputElement>(null);
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState<
    "start" | "correct" | "wrong" | null
  >("start");

  useEffect(() => {
    (async () => {
      try {
        const list = await GetRiddles();
        setRiddles(list);
        setIndex(0);
        setFinished(list.length === 0);
        setFeedback("start");
      } catch (e: any) {
        setError(e?.message || "Failed to load riddles");
      } finally {
        setLoading(false);
      }
    })();
  }, []);


  useEffect(() => {
    if (!finished) answerInput.current?.focus();
  }, [index, finished]);

  function submit() {
    if (!answerInput.current || riddles.length === 0 || finished) return;
    const user = (answerInput.current.value ?? "").trim().toLowerCase();
    const cur = riddles[index];
    const correct = user === cur.correctAnswer.trim().toLowerCase();

    if (correct) {
      setFeedback("correct");
      answerInput.current.value = "";
      if (index + 1 < riddles.length) setIndex((i) => i + 1);
      else setFinished(true);
    } else {
      setFeedback("wrong");

    }
  }

  if (loading) return <h2>Looding</h2>; <Link to="/">Go to homepage</Link>;
  if (error) return <div style={{ color: "crimson" }}>Error: {error}</div>;
  if (finished) return <h2>Finishhhhh</h2>; <Link to="/">Go to homepage</Link>;

  const cur = riddles[index];

  return (
    <>
      <h1>Hi from Riddle page</h1>

      <h2>
        Riddle {index + 1} / {riddles.length}
      </h2>
      <p>{cur.taskDescription}</p>

      <label htmlFor="Answer">Answer:</label>
      <input
        id="Answer"
        type="text"
        placeholder="Enter your answer"
        ref={answerInput}
      />
      <button onClick={submit}>Submit</button>

      {feedback === "start" && <p>Good loack</p>}
      {feedback === "correct" && <p style={{ color: "green" }}>Correct 😁</p>}
      {feedback === "wrong" && <p style={{ color: "crimson" }}>Incorrect 😢</p>}

      <hr />
      <Link to="/">Go to homepage</Link>
    </>
  );
}
