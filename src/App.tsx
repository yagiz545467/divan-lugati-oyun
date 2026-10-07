import { useEffect, useMemo, useRef, useState } from "react";
import {
  CATEGORIES, PROVERBS, WORDS, levelFor, loadProfile, saveProfile,
  scrambleWord, shuffleArray, soundBad, soundClick, soundGood,
  type Profile, type Word,
} from "./data";

type Page = "home" | "dictionary" | "games" | "about";
type GameKind = "scramble" | "quiz" | "match" | null;

/* ---------- küçük UI parçaları ---------- */

function Confetti({ show }: { show: boolean }) {
  const pieces = useMemo(() => {
    if (!show) return [];
    const colors = ["#b3541e", "#d4a017", "#2e7d4f", "#3b82c4", "#a855f7", "#e2725b"];
    return Array.from({ length: 48 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.2,
      color: colors[i % colors.length],
      size: 6 + Math.random() * 7,
    }));
  }, [show]);
  if (!show) return null;
  return (
    <div className="confetti-container" aria-hidden>
      {pieces.map((p) => (
        <div key={p.id} className="confetti-piece"
          style={{ left: `${p.left}%`, animationDelay: `${p.delay}s`, backgroundColor: p.color, width: p.size, height: p.size * 1.6 }} />
      ))}
    </div>
  );
}

function StatsBar({ items }: { items: { value: React.ReactNode; label: string }[] }) {
  return (
    <div className="stats-bar">
      {items.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function WordModal({ word, onClose, onLearned }: { word: Word | null; onClose: () => void; onLearned: (id: number) => void }) {
  useEffect(() => {
    if (word) onLearned(word.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word?.id]);
  if (!word) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="detail-word">{word.oldTurkish}</div>
        <div className="detail-modern">→ {word.modern}</div>
        <div className="detail-row"><span className="detail-label">Anlam</span><span className="detail-value">{word.meaning}</span></div>
        <div className="detail-row"><span className="detail-label">Kategori</span><span className="detail-value">{word.category}</span></div>
        <div className="detail-row"><span className="detail-label">Örnek</span><span className="detail-value italic">“{word.example}”</span></div>
        <div className="detail-row"><span className="detail-label">Köken</span><span className="detail-value">{word.origin}</span></div>
        <div className="detail-row no-border"><span className="detail-label">Not</span><span className="detail-value">{word.note}</span></div>
        <div className="btn-group"><button className="btn btn-secondary" onClick={onClose}>Kapat</button></div>
      </div>
    </div>
  );
}

/* ---------- Sözlük ---------- */

function DictionaryPage({ onLearned }: { onLearned: (id: number) => void }) {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("Tümü");
  const [selected, setSelected] = useState<Word | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLocaleLowerCase("tr-TR");
    return WORDS.filter((w) => {
      const okQ = !q ||
        w.oldTurkish.toLocaleLowerCase("tr-TR").includes(q) ||
        w.modern.toLocaleLowerCase("tr-TR").includes(q) ||
        w.meaning.toLocaleLowerCase("tr-TR").includes(q);
      return okQ && (cat === "Tümü" || w.category === cat);
    });
  }, [search, cat]);

  return (
    <div>
      <section className="card">
        <h2 className="card-title"><span>📖</span> Eski Türkçe Sözlük</h2>
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Kelime ara… (eski veya modern Türkçe)" />
        </div>
        <div className="category-filters">
          <button className={`chip ${cat === "Tümü" ? "active" : ""}`} onClick={() => setCat("Tümü")}>Tümü ({WORDS.length})</button>
          {CATEGORIES.map((c) => (
            <button key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>
              {c} ({WORDS.filter((w) => w.category === c).length})
            </button>
          ))}
        </div>
        <div className="word-grid">
          {filtered.map((w) => (
            <button key={w.id} className="word-card" onClick={() => { soundClick(); setSelected(w); }}>
              <div className="turkish-word">{w.oldTurkish}</div>
              <div className="modern-word">→ {w.modern}</div>
              <div className="meaning">{w.meaning}</div>
              <span className="category-badge">{w.category}</span>
            </button>
          ))}
        </div>
        {filtered.length === 0 && <p className="empty">🔍 Aramanızla eşleşen kelime bulunamadı.</p>}
      </section>
      <WordModal word={selected} onClose={() => setSelected(null)} onLearned={onLearned} />
    </div>
  );
}

/* ---------- Karıştırma oyunu ---------- */

function ScrambleGame({ onFinish }: { onFinish: (score: number, learned: number[]) => void }) {
  const [words, setWords] = useState<Word[]>([]);
  const [idx, setIdx] = useState(0);
  const [letters, setLetters] = useState<string[]>([]);
  const [answer, setAnswer] = useState<{ letter: string; from: number }[]>([]);
  const [used, setUsed] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [hint, setHint] = useState(0);
  const [feedback, setFeedback] = useState<{ ok: boolean; msg: string } | null>(null);
  const [timer, setTimer] = useState(60);
  const [over, setOver] = useState(false);
  const [burst, setBurst] = useState(false);
  const learnedRef = useRef<number[]>([]);

  const setup = (list: Word[], i: number) => {
    const w = list[i];
    if (!w) return;
    setLetters(scrambleWord(w.oldTurkish));
    setAnswer([]);
    setUsed(new Set());
    setHint(0);
    setFeedback(null);
    setTimer(60);
  };

  useEffect(() => {
    const list = shuffleArray(WORDS).slice(0, 10);
    setWords(list);
    setIdx(0); setScore(0); setStreak(0); setOver(false);
    learnedRef.current = [];
    setup(list, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (over || feedback) return;
    if (timer <= 0) {
      const w = words[idx];
      soundBad();
      setFeedback({ ok: false, msg: `Süre doldu! Doğrusu: ${w?.oldTurkish}` });
      setStreak(0);
      setTimeout(() => next(false), 2000);
      return;
    }
    const t = setTimeout(() => setTimer((v) => v - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, over, feedback]);

  const next = (wonLast: boolean) => {
    if (wonLast && words[idx]) learnedRef.current.push(words[idx].id);
    if (idx + 1 >= words.length) {
      setOver(true);
      onFinish(score, learnedRef.current);
      return;
    }
    const n = idx + 1;
    setIdx(n);
    setup(words, n);
  };

  const pick = (i: number) => {
    if (feedback || used.has(i)) return;
    soundClick();
    const na = [...answer, { letter: letters[i], from: i }];
    setAnswer(na);
    setUsed(new Set([...used, i]));
    if (na.length === letters.length) {
      const guess = na.map((a) => a.letter).join("");
      const correct = words[idx].oldTurkish.toLocaleUpperCase("tr-TR");
      if (guess === correct) {
        const pts = Math.max(10 + Math.floor(timer / 10) + (streak >= 2 ? 3 : 0) - hint * 2, 5);
        setScore((s) => s + pts);
        setStreak((s) => s + 1);
        setFeedback({ ok: true, msg: `Harika! +${pts} puan 🎉` });
        soundGood();
        setBurst(true);
        setTimeout(() => setBurst(false), 1500);
        setTimeout(() => next(true), 1600);
      } else {
        setStreak(0);
        setFeedback({ ok: false, msg: `Yanlış! Doğrusu: ${words[idx].oldTurkish}` });
        soundBad();
        setTimeout(() => next(false), 2000);
      }
    }
  };

  const remove = (ai: number) => {
    if (feedback) return;
    const r = answer[ai];
    setAnswer(answer.filter((_, i) => i !== ai));
    const nu = new Set(used);
    nu.delete(r.from);
    setUsed(nu);
  };

  if (words.length === 0) return null;
  if (over) {
    return (
      <section className="card center">
        <Confetti show={score >= 50} />
        <div className="big-emoji">{score >= 80 ? "🏆" : score >= 50 ? "🌟" : "📚"}</div>
        <h2 className="amiri">Oyun Bitti!</h2>
        <div className="modal-score">{score}</div>
        <p className="muted">10 kelime tamamlandı • En iyi serini sözlükte geliştirmeye devam et</p>
        <p className="muted">{score >= 80 ? "Muhteşem! Kaşgarlı Mahmud gurur duyardı 🎓" : score >= 50 ? "Harika performans! ✨" : "Öğrenmeye devam, her oyun yeni kelime 📖"}</p>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={() => window.location.reload()}>🔄 Yeniden Oyna</button>
        </div>
      </section>
    );
  }

  const w = words[idx];
  return (
    <section className="card">
      <Confetti show={burst} />
      <StatsBar items={[
        { value: score, label: "Puan" },
        { value: <span className={timer <= 10 ? "timer danger" : "timer"}>⏱ {timer}s</span>, label: "Süre" },
        { value: streak >= 2 ? <span className="streak">🔥 {streak}x</span> : streak, label: "Seri" },
        { value: `${idx + 1}/${words.length}`, label: "Kelime" },
      ]} />
      <div className="progress"><div className="progress-fill" style={{ width: `${(idx / words.length) * 100}%` }} /></div>
      <div className="center">
        <p className="muted">Bu harfleri doğru sıraya diz:</p>
        <p className="hint-line">Modern karşılığı: <strong>{w.modern}</strong> • Kategori: {w.category}</p>
        <div className="slots">
          {letters.map((_, i) => (
            <button key={i} className={`slot ${answer[i] ? "filled" : ""}`} onClick={() => answer[i] && remove(i)}>
              {answer[i]?.letter ?? ""}
            </button>
          ))}
        </div>
        <div className="tiles">
          {letters.map((L, i) => (
            <button key={i} className={`tile ${used.has(i) ? "used" : ""}`} onClick={() => pick(i)}>{L}</button>
          ))}
        </div>
        {feedback && <div className={`feedback ${feedback.ok ? "ok" : "bad"}`}>{feedback.msg}</div>}
        {hint > 0 && <p className="hint-text">
          {hint === 1 ? `İpucu: ${w.meaning}` : `İpucu: "${w.example}"`}
        </p>}
        <div className="btn-group">
          <button className="btn btn-secondary" disabled={hint >= 2} onClick={() => setHint((h) => h + 1)}>💡 İpucu ({2 - hint})</button>
          <button className="btn btn-danger" onClick={() => { setStreak(0); setFeedback({ ok: false, msg: `Atlandı! Cevap: ${w.oldTurkish}` }); setTimeout(() => next(false), 1200); }}>⏭ Atla</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Quiz ---------- */

interface QuizQ { word: Word; options: string[]; }

function QuizGame({ onFinish }: { onFinish: (score: number, learned: number[]) => void }) {
  const [qs, setQs] = useState<QuizQ[]>([]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [sel, setSel] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const [log, setLog] = useState<{ word: string; ok: boolean }[]>([]);
  const [over, setOver] = useState(false);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    const list = shuffleArray(WORDS).slice(0, 10).map((word) => {
      const wrong = shuffleArray(WORDS.filter((x) => x.id !== word.id)).slice(0, 3).map((x) => x.meaning);
      return { word, options: shuffleArray([word.meaning, ...wrong]) };
    });
    setQs(list);
  }, []);

  const choose = (opt: string) => {
    if (sel !== null || over) return;
    setSel(opt);
    const q = qs[i];
    const ok = opt === q.word.meaning;
    const learned = ok ? [q.word.id] : [];
    if (ok) {
      const pts = 10 + (streak >= 2 ? 5 : 0);
      setScore((s) => s + pts);
      setStreak((s) => s + 1);
      soundGood();
      if (streak >= 1) { setBurst(true); setTimeout(() => setBurst(false), 1200); }
    } else { setStreak(0); soundBad(); }
    setLog((l) => [...l, { word: q.word.oldTurkish, ok }]);
    setTimeout(() => {
      if (i + 1 >= qs.length) {
        setOver(true);
        const totalLearned = [...log.filter((x) => x.ok).map((x) => qs.find((qq) => qq.word.oldTurkish === x.word)?.word.id ?? 0), ...learned].filter(Boolean);
        onFinish(score + (ok ? 10 + (streak >= 2 ? 5 : 0) : 0), totalLearned);
      } else { setI((v) => v + 1); setSel(null); }
    }, 1400);
  };

  if (qs.length === 0) return null;
  if (over) {
    const correct = log.filter((x) => x.ok).length;
    return (
      <section className="card center">
        <Confetti show={correct >= 7} />
        <div className="big-emoji">{correct >= 9 ? "🏆" : correct >= 6 ? "🌟" : "📚"}</div>
        <h2 className="amiri">Quiz Tamamlandı!</h2>
        <div className="modal-score">{score}</div>
        <p className="muted">{correct}/{qs.length} doğru</p>
        <div className="review">{log.map((a, k) => <div key={k} className="review-row"><span>{a.ok ? "✅" : "❌"}</span><span className={a.ok ? "good" : "bad-text"}>{a.word}</span></div>)}</div>
        <div className="btn-group"><button className="btn btn-primary" onClick={() => window.location.reload()}>🔄 Yeniden Oyna</button></div>
      </section>
    );
  }

  const q = qs[i];
  return (
    <section className="card">
      <Confetti show={burst} />
      <StatsBar items={[
        { value: score, label: "Puan" },
        { value: streak >= 2 ? <span className="streak">🔥 {streak}x</span> : streak, label: "Seri" },
        { value: `${i + 1}/${qs.length}`, label: "Soru" },
      ]} />
      <div className="progress"><div className="progress-fill" style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <div className="center">
        <p className="muted">Bu kelimenin anlamı nedir?</p>
        <div className="quiz-word">{q.word.oldTurkish}</div>
        <p className="muted small">Kategori: {q.word.category}</p>
      </div>
      <div className="quiz-options">
        {q.options.map((opt, k) => {
          let cls = "quiz-option";
          if (sel !== null) {
            cls += " disabled";
            if (opt === q.word.meaning) cls += " correct";
            else if (opt === sel) cls += " wrong";
          }
          return <button key={k} className={cls} onClick={() => choose(opt)}><b>{String.fromCharCode(65 + k)}.</b> {opt}</button>;
        })}
      </div>
    </section>
  );
}

/* ---------- Eşleştirme ---------- */

function MatchGame({ onFinish }: { onFinish: (score: number, learned: number[]) => void }) {
  const [pairs, setPairs] = useState<Word[]>([]);
  const [left, setLeft] = useState<Word[]>([]);
  const [right, setRight] = useState<Word[]>([]);
  const [selL, setSelL] = useState<number | null>(null);
  const [selR, setSelR] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrong, setWrong] = useState<{ l: number; r: number } | null>(null);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [timer, setTimer] = useState(90);
  const [over, setOver] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    const p = shuffleArray(WORDS).slice(0, 6);
    setPairs(p);
    setLeft(shuffleArray(p));
    setRight(shuffleArray(p));
  }, []);

  useEffect(() => {
    if (over || pairs.length === 0) return;
    if (timer <= 0) { setOver(true); setWon(false); onFinish(score, [...matched]); return; }
    const t = setTimeout(() => setTimer((v) => v - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, over]);

  const check = (l: number, r: number) => {
    setTries((t) => t + 1);
    if (l === r) {
      const nm = new Set(matched);
      nm.add(l);
      setMatched(nm);
      const ns = score + 15;
      setScore(ns);
      soundGood();
      setSelL(null); setSelR(null);
      if (nm.size === pairs.length) {
        const bonus = Math.floor(timer / 5);
        setScore(ns + bonus);
        setOver(true); setWon(true);
        onFinish(ns + bonus, pairs.map((p) => p.id));
      }
    } else {
      soundBad();
      setWrong({ l, r });
      setTimeout(() => { setSelL(null); setSelR(null); setWrong(null); }, 700);
    }
  };

  if (pairs.length === 0) return null;
  if (over) {
    return (
      <section className="card center">
        <Confetti show={won} />
        <div className="big-emoji">{won ? "🏆" : "⏰"}</div>
        <h2 className="amiri">{won ? "Tebrikler!" : "Süre Doldu!"}</h2>
        <div className="modal-score">{score}</div>
        <p className="muted">{matched.size}/{pairs.length} eşleşme • {tries} deneme</p>
        <div className="btn-group"><button className="btn btn-primary" onClick={() => window.location.reload()}>🔄 Yeniden Oyna</button></div>
      </section>
    );
  }

  return (
    <section className="card">
      <StatsBar items={[
        { value: score, label: "Puan" },
        { value: <span className={timer <= 15 ? "timer danger" : "timer"}>⏱ {timer}s</span>, label: "Süre" },
        { value: `${matched.size}/${pairs.length}`, label: "Eşleşme" },
        { value: tries, label: "Deneme" },
      ]} />
      <div className="progress"><div className="progress-fill" style={{ width: `${(matched.size / pairs.length) * 100}%` }} /></div>
      <p className="muted center">Eski Türkçe kelimeleri modern karşılıklarıyla eşleştir</p>
      <div className="match-grid">
        <div className="match-col">
          <div className="match-head">Eski Türkçe</div>
          {left.map((w) => (
            <button key={w.id} disabled={matched.has(w.id)}
              className={`match-item ${matched.has(w.id) ? "matched" : ""} ${selL === w.id ? "selected" : ""} ${wrong?.l === w.id ? "wrong-shake" : ""}`}
              onClick={() => { soundClick(); setSelL(w.id); setWrong(null); if (selR !== null) check(w.id, selR); }}>
              <span className="amiri-sm">{w.oldTurkish}</span>
            </button>
          ))}
        </div>
        <div className="match-mid">⟷</div>
        <div className="match-col">
          <div className="match-head">Modern Türkçe</div>
          {right.map((w) => (
            <button key={w.id} disabled={matched.has(w.id)}
              className={`match-item ${matched.has(w.id) ? "matched" : ""} ${selR === w.id ? "selected" : ""} ${wrong?.r === w.id ? "wrong-shake" : ""}`}
              onClick={() => { soundClick(); setSelR(w.id); setWrong(null); if (selL !== null) check(selL, w.id); }}>
              {w.modern}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Sayfalar ---------- */

function HomePage({ profile, go }: { profile: Profile; go: (p: Page, g?: GameKind) => void }) {
  const daily = useMemo(() => {
    const day = Math.floor(Date.now() / 86400000);
    return WORDS[day % WORDS.length];
  }, []);
  const [demo, setDemo] = useState(daily);
  const lvl = levelFor(profile.totalScore);

  return (
    <div>
      <section className="card hero-card">
        <div className="hero-emoji">🏛️</div>
        <h2 className="amiri-lg">Türkçenin bin yıllık hazinesini oyunla keşfet</h2>
        <p className="muted hero-text">
          <strong>Divanü Lügati't-Türk</strong> (1072–1074) kelimeleriyle 3 farklı oyun oyna,
          seviye atla, rozetleri topla. Krem ve sıcak tonlarda, göz yormayan tasarım.
        </p>
        <div className="hero-stats">
          <div className="hero-stat"><span>📖</span><b>{WORDS.length}</b><small>Kelime</small></div>
          <div className="hero-stat"><span>📂</span><b>{CATEGORIES.length}</b><small>Kategori</small></div>
          <div className="hero-stat"><span>🎮</span><b>3</b><small>Oyun</small></div>
          <div className="hero-stat"><span>🎯</span><b>{lvl.level}. seviye</b><small>{lvl.title}</small></div>
        </div>
        <div className="level-row">
          <div className="progress big"><div className="progress-fill" style={{ width: `${lvl.progress}%` }} /></div>
          <small className="muted">{profile.totalScore} XP • Sonraki seviyeye {200 - (profile.totalScore % 200)} XP</small>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={() => go("games")}>🎮 Hemen Oyna</button>
          <button className="btn btn-secondary" onClick={() => go("dictionary")}>📖 Sözlüğe Göz At</button>
        </div>
      </section>

      <section className="card center">
        <h2 className="card-title"><span>✨</span> Günün Kelimesi</h2>
        <div className="daily-word">{demo.oldTurkish}</div>
        <div className="daily-modern">→ {demo.modern}</div>
        <p className="muted">{demo.meaning}</p>
        <p className="italic muted">“{demo.example}”</p>
        <span className="category-badge">{demo.category}</span>
        <div className="btn-group">
          <button className="btn btn-secondary" onClick={() => setDemo(WORDS[Math.floor(Math.random() * WORDS.length)])}>🔄 Başka Kelime</button>
        </div>
      </section>

      <section className="card">
        <h2 className="card-title"><span>🎯</span> Hızlı Başlangıç</h2>
        <div className="game-selector">
          {[
            { k: "scramble" as GameKind, icon: "🔤", t: "Kelime Karıştırma", d: "Harfleri diz, süre bonusunu kap. İpucu hakkın var." },
            { k: "quiz" as GameKind, icon: "❓", t: "Anlam Quizi", d: "4 seçenekten doğru anlamı bul, seriyi büyüt." },
            { k: "match" as GameKind, icon: "🔗", t: "Eşleştirme", d: "Eski ↔ modern kelimeleri 90 saniyede eşleştir." },
          ].map((g) => (
            <button key={g.k} className="game-option" onClick={() => go("games", g.k)}>
              <div className="game-icon">{g.icon}</div><h3>{g.t}</h3><p>{g.d}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function GamesPage({ initial, onFinish }: { initial: GameKind; onFinish: (game: string, score: number, learned: number[]) => void }) {
  const [active, setActive] = useState<GameKind>(initial);
  useEffect(() => setActive(initial), [initial]);

  if (active === "scramble") return <div><button className="btn btn-secondary back" onClick={() => setActive(null)}>← Oyunlara Dön</button><ScrambleGame onFinish={(s, l) => onFinish("scramble", s, l)} /></div>;
  if (active === "quiz") return <div><button className="btn btn-secondary back" onClick={() => setActive(null)}>← Oyunlara Dön</button><QuizGame onFinish={(s, l) => onFinish("quiz", s, l)} /></div>;
  if (active === "match") return <div><button className="btn btn-secondary back" onClick={() => setActive(null)}>← Oyunlara Dön</button><MatchGame onFinish={(s, l) => onFinish("match", s, l)} /></div>;

  return (
    <section className="card">
      <h2 className="card-title"><span>🎮</span> Oyun Seç</h2>
      <p className="muted">Her oyun farklı becerini ölçer. Skorların profiline işlenir, en iyi skorların saklanır.</p>
      <div className="game-selector">
        <button className="game-option" onClick={() => { soundClick(); setActive("scramble"); }}>
          <div className="game-icon">🔤</div><h3>Kelime Karıştırma</h3><p>60 sn / kelime • ipucu ve seri bonusu</p>
        </button>
        <button className="game-option" onClick={() => { soundClick(); setActive("quiz"); }}>
          <div className="game-icon">❓</div><h3>Anlam Quizi</h3><p>10 soru • 4 şık • seri bonusu</p>
        </button>
        <button className="game-option" onClick={() => { soundClick(); setActive("match"); }}>
          <div className="game-icon">🔗</div><h3>Eşleştirme</h3><p>6 çift • 90 saniye • süre bonusu</p>
        </button>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div>
      <section className="card">
        <h2 className="card-title"><span>📜</span> Divanü Lügati't-Türk Hakkında</h2>
        <div className="info-box">
          <strong>Divanü Lügati't-Türk</strong> (Türk Dilleri Sözlüğü), <strong>Kaşgarlı Mahmud</strong> tarafından
          <strong> 1072–1074</strong> yıllarında Bağdat'ta yazıldı. Araplara Türkçe öğretmek için Arapça kaleme alınan
          ilk kapsamlı Türk sözlüğüdür: ~7500 kelime, lehçe notları, şiirler, atasözleri ve ünlü dünya haritasını içerir.
        </div>
        <div className="timeline">
          {[
            ["📍 Kaşgarlı Mahmud (1008–1105)", "Kaşgar doğumlu bilgin; Türk boylarını gezerek dil malzemesi topladı."],
            ["📖 Yazım (1072–1074)", "Bağdat'ta Abbasi Halifesi El-Muktedi'ye sunulmak üzere hazırlandı."],
            ["🗺️ Dünya Haritası", "Balasagun merkezli dairesel harita; Türk dünyasının yayılımını gösterir."],
            ["📚 İçerik", "Lehçeler, atasözleri, coğrafya, etnografya ve dil bilgisi kuralları."],
            ["🏛️ Keşif (1914)", "Tek yazma nüsha Ali Emiri Efendi tarafından İstanbul'da bulundu; Millet Kütüphanesi'nde korunur."],
          ].map(([h, p], i) => <div key={i} className="timeline-item"><h4>{h}</h4><p>{p}</p></div>)}
        </div>
      </section>
      <section className="card">
        <h2 className="card-title"><span>💬</span> Eserden Atasözleri</h2>
        {PROVERBS.map((p, i) => (
          <div key={i} className="proverb">
            <p className="amiri-sm gold">“{p.old}”</p>
            <p className="italic muted">{p.modern}</p>
            <p className="small muted">💡 {p.meaning}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

/* ---------- Ana uygulama ---------- */

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [presetGame, setPresetGame] = useState<GameKind>(null);
  const [profile, setProfile] = useState<Profile>(() => loadProfile());

  const go = (p: Page, g: GameKind = null) => {
    soundClick();
    setPresetGame(g);
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const markLearned = (id: number) => {
    setProfile((prev) => {
      if (prev.wordsLearned.includes(id)) return prev;
      const np = { ...prev, wordsLearned: [...prev.wordsLearned, id] };
      saveProfile(np);
      return np;
    });
  };

  const handleGameFinish = (game: string, score: number, learned: number[]) => {
    setProfile((prev) => {
      const np: Profile = {
        ...prev,
        totalScore: prev.totalScore + score,
        gamesPlayed: prev.gamesPlayed + 1,
        bestScramble: game === "scramble" ? Math.max(prev.bestScramble, score) : prev.bestScramble,
        bestQuiz: game === "quiz" ? Math.max(prev.bestQuiz, score) : prev.bestQuiz,
        bestMatch: game === "match" ? Math.max(prev.bestMatch, score) : prev.bestMatch,
        wordsLearned: [...new Set([...prev.wordsLearned, ...learned])],
      };
      saveProfile(np);
      return np;
    });
  };

  const resetProfile = () => {
    if (!window.confirm("Profil sıfırlansın mı? Skorların silinir.")) return;
    const fresh: Profile = { totalScore: 0, gamesPlayed: 0, bestScramble: 0, bestQuiz: 0, bestMatch: 0, wordsLearned: [] };
    saveProfile(fresh);
    setProfile(fresh);
  };

  const lvl = levelFor(profile.totalScore);

  return (
    <div className="app">
      <div className="pattern" aria-hidden />
      <div className="container">
        <header className="header">
          <div className="ornament" />
          <h1><span className="arabic">دیوان لغات الترک</span><br />Divanü Lügati't-Türk</h1>
          <div className="author">Kaşgarlı Mahmud • 1072–1074</div>
          <div className="subtitle">İnteraktif Kelime Oyunu</div>
          <div className="profile-chip">
            <span>🎖 {lvl.title} • {lvl.level}. seviye</span>
            <span>⭐ {profile.totalScore} XP</span>
            <span>📖 {profile.wordsLearned.length}/{WORDS.length} kelime</span>
            <span>🎮 {profile.gamesPlayed} oyun</span>
            <button className="link-btn" onClick={resetProfile} title="Profili sıfırla">sıfırla</button>
          </div>
          <div className="best-row">
            <span>🔤 En iyi karıştırma: <b>{profile.bestScramble}</b></span>
            <span>❓ En iyi quiz: <b>{profile.bestQuiz}</b></span>
            <span>🔗 En iyi eşleştirme: <b>{profile.bestMatch}</b></span>
          </div>
          <div className="ornament" />
        </header>

        <nav className="nav">
          {([["home", "🏠 Ana Sayfa"], ["dictionary", "📖 Sözlük"], ["games", "🎮 Oyunlar"], ["about", "📜 Hakkında"]] as [Page, string][]).map(([id, label]) => (
            <button key={id} className={`nav-tab ${page === id ? "active" : ""}`} onClick={() => go(id)}>{label}</button>
          ))}
        </nav>

        <main>
          {page === "home" && <HomePage profile={profile} go={go} />}
          {page === "dictionary" && <DictionaryPage onLearned={markLearned} />}
          {page === "games" && <GamesPage initial={presetGame} onFinish={handleGameFinish} />}
          {page === "about" && <AboutPage />}
        </main>

        <footer className="footer">
          <p>Divanü Lügati't-Türk İnteraktif Proje • Kaşgarlı Mahmud'un Mirası</p>
          <p>📚 “Türk dilini öğreniniz, çünkü onların uzun sürecek hâkimiyetleri vardır.”</p>
        </footer>
      </div>
    </div>
  );
}
