const questionData = [
  ["1970s", "In welke Engelse badplaats won ABBA het Eurovisie Songfestival met 'Waterloo'?", "Muziekgeschiedenis", ["Brighton", "Blackpool", "Bristol", "Bournemouth"], 0, "0GjEhVFGZW8afUYGChu3Rr"],
  ["1980s", "Op welk album uit 1982 staat dit Michael Jackson-nummer?", "Album", ["Bad", "Thriller", "Off the Wall", "Dangerous"], 1, "5ChkMS8OtdzJeqyybCc9R5"],
  ["1980s", "Uit welke Amerikaanse stad komt bokser Rocky Balboa?", "Film", ["Chicago", "Philadelphia", "Boston", "Detroit"], 1, "2HHtWyy5CgaQbC7XSoOb0e"],
  ["1970s", "Waarvoor staan de letters ELO?", "Muziekgeschiedenis", ["Electric Light Orchestra", "European Live Orchestra", "Electric Love Organisation", "English Light Orchestra"], 0, "2RlgNHKcydI9sayD2Df2xp"],
  ["1970s", "In welke stad ligt de straat die dit nummer zijn titel gaf?", "Muziekgeschiedenis", ["Londen", "Edinburgh", "Dublin", "Liverpool"], 0, "2x7JPx4lQ6xm4ba5ughsvM"],
  ["1980s", "Welke animatietechniek maakt de videoclip bij dit nummer zo herkenbaar?", "Videoclip", ["Rotoscoping", "Stop-motion", "Kleianimatie", "Pixilation"], 0, "2WfaOiMkCvy7F5fcp2zZ8L"],
  ["1990s", "Welke acteur speelde Ross Geller in de sitcom bij dit nummer?", "TV-serie", ["Matt LeBlanc", "David Schwimmer", "Matthew Perry", "Paul Rudd"], 1, "7MZOtq8HEcSVxDHc4kDGWF"],
  ["1990s", "Welke Spice Girl droeg de bijnaam 'Sporty Spice'?", "Popcultuur", ["Mel C", "Emma Bunton", "Mel B", "Geri Halliwell"], 0, "1Je1IMUlBXcx1Fz0WE7oPT"],
  ["1990s", "Welke regisseur maakte de film bij deze iconische ballad?", "Film", ["Steven Spielberg", "James Cameron", "Ridley Scott", "Ron Howard"], 1, "33LC84JgLvK2KuW43MfaNq"],
  ["2010s", "In welk jaar werd dit nummer uitgebracht?", "Muziekgeschiedenis", ["2017", "2019", "2021", "2023"], 1, "3RauEVgRgj1IuWdJ9fDs70"],
  ["2000s", "Welke acteur speelt de hoofdrol in de dansfilm die bij dit nummer hoort?", "Film", ["Zac Efron", "Channing Tatum", "Ryan Gosling", "Chris Evans"], 1, "4JpKVNYnVcJ8tuMKjAj50A"],
  ["1980s", "Welke band zingt dit nummer?", "Artiest", ["Guns N' Roses", "Bon Jovi", "Aerosmith", "AC/DC"], 0, "7o2CTH4ctstm8TNelqjb51"],
  ["2000s", "Welk land hoort bij deze wereldhit 'Dragostea Din Tei'?", "Land", ["Roemenië", "Moldavië", "Bulgarije", "Hongarije"], 1, "7CnnGGBLuuu9cawoiHPLl4"],
  ["2000s", "Welke titel droeg Beyoncé's eerste soloalbum, waarop dit nummer stond?", "Album", ["B'Day", "Dangerously in Love", "4", "I Am... Sasha Fierce"], 1, "5IVuqXILoxVWvWEPm82Jxr"],
  ["2000s", "Welke voornaam heeft de zanger van The Killers?", "Artiest", ["Dave", "Brandon", "Brendan", "Bryan"], 1, "003vvx7Niy0yvhvHt4a68B"],
  ["2010s", "Welke acteur spreekt de stem in van Gru uit de film bij dit nummer?", "Film", ["Steve Carell", "Ben Stiller", "Jim Carrey", "Owen Wilson"], 0, "60nZcImufyMA1MKQY3dcCH"],
  ["2010s", "Uit welk land komt het duo Daft Punk?", "Muziekgeschiedenis", ["België", "Frankrijk", "Canada", "Verenigd Koninkrijk"], 1, "69kOkLUCkxIZYexIgSG8rq"],
  ["2000s", "Welke groep zingt dit nummer?", "Artiest", ["The Pussycat Dolls", "Black Eyed Peas", "OutKast", "LMFAO"], 1, "4vp2J1l5RD4gMZwGFLfRAu"],
  ["2010s", "In welk land werd het WK voetbal van 2010 gehouden?", "Sport", ["Brazilië", "Zuid-Afrika", "Duitsland", "Japan"], 1, "6bNB5gxFX6Q87DbQWb8OWZ"],
  ["2010s", "Welke acteur speelt naast Lady Gaga in de film bij deze duet-hit?", "Film", ["Ryan Gosling", "Bradley Cooper", "Hugh Jackman", "Matt Damon"], 1, "2VxeLyX666F8uXCJ0dZF8B"],
  ["2020s", "In welk jaar verscheen dit Kate Bush-nummer oorspronkelijk?", "Muziekgeschiedenis", ["1979", "1985", "1991", "1997"], 1, "29d0nY7TzCoi22XBqDQkiP"],
  ["2020s", "Wat is de voornaam van The Weeknd?", "Artiest", ["Abel", "Adam", "Amir", "Alex"], 0, "0VjIjW4GlUZAMYd2vXMi3b"],
  ["2020s", "Op welk ouder nummer wordt deze hit vaak gezien als een antwoord?", "Muziekverband", ["When I Was Your Man", "Grenade", "Locked Out of Heaven", "Just the Way You Are"], 0, "4DHcnVTT87F0zZhRPYmZ3B"],
  ["1990s", "Welke band zingt dit nummer?", "Artiest", ["The Corrs", "The Cranberries", "U2", "The Cardigans"], 1, "7EZC6E7UjZe63f1jRmkWxt"],
  ["2020s", "In welk land vond het Eurovisie Songfestival van 2024 plaats?", "Eurovisie", ["Zweden", "Nederland", "Zwitserland", "Oostenrijk"], 0, "0uHrMbMv3c78398pIANDqR"],
  ["2020s", "Op welk album van Sabrina Carpenter verscheen dit nummer?", "Album", ["Short n' Sweet", "emails i can't send", "Singular: Act II", "Evolution"], 0, "2qSkIjg1o9h3YT9RAgYN75"],
  ["2010s", "Onder welke artiestennaam werd Tim Bergling wereldberoemd?", "Artiest", ["Kygo", "Avicii", "Calvin Harris", "Martin Garrix"], 1, "0nrRP2bk19rLc0orkWPQk2"],
  ["2020s", "In welke stad werd Goldband opgericht?", "Nederlandse muziek", ["Den Haag", "Utrecht", "Groningen", "Eindhoven"], 0, "2LcmbuYX7tyR4DWy3b273L"],
  ["1970s", "Welke band zingt dit nummer?", "Artiest", ["Queen", "The Rolling Stones", "The Beatles", "Pink Floyd"], 0, "4u7EnebtmKWzUH433cf5Qv"],
  ["1970s", "In welk decennium werd dit disco-nummer uitgebracht?", "Muziekgeschiedenis", ["1960s", "1970s", "1980s", "1990s"], 1, "2grjqo0Frpf2okIBiifQKs"]
].map(([decade, question, category, answers, correct, spotifyId]) => ({ decade, question, category, answers, correct, spotifyId }));

// Vaste, gemengde quizvolgorde. Zo blijft de antwoordenlijst steeds gelijk aan de vragenronde.
const questionOrder = [16, 4, 25, 8, 19, 2, 28, 12, 6, 22, 14, 1, 27, 9, 21, 11, 3, 24, 18, 7, 29, 15, 10, 23, 5, 26, 13, 20, 0, 17];
const questions = questionOrder.map((index) => questionData[index]);

let current = 0;
let timerId;
let advanceTimeoutId;
let seconds = 10;
const els = {
  round: document.getElementById("roundNumber"), decade: document.getElementById("decadePill"), question: document.getElementById("question"), hint: document.getElementById("hint"), answers: document.getElementById("answers"), next: document.getElementById("nextButton"), previous: document.getElementById("previousButton"), progress: document.getElementById("progressFill"), timer: document.getElementById("timer"), timerDisplay: document.getElementById("timerDisplay"), start: document.getElementById("startButton"), timerStatus: document.getElementById("timerStatus")
};

function formatTime(value) { return `00:${String(value).padStart(2, "0")}`; }
function resetTimer() {
  clearInterval(timerId);
  clearTimeout(advanceTimeoutId);
  timerId = undefined;
  advanceTimeoutId = undefined;
  seconds = 10;
  els.timerDisplay.textContent = formatTime(seconds);
  els.timer.classList.remove("urgent");
  els.start.disabled = false;
  els.start.innerHTML = '<span aria-hidden="true">▶</span> Start timer';
  els.timerStatus.textContent = "Start de timer zodra het fragment begint.";
}
function renderQuestion() {
  const item = questions[current];
  resetTimer();
  els.start.style.visibility = "visible";
  els.timer.style.visibility = "visible";
  els.timerStatus.parentElement.style.visibility = "visible";
  els.round.textContent = String(current + 1).padStart(2, "0");
  els.decade.textContent = item.decade;
  els.question.textContent = item.question;
  els.hint.textContent = `${item.category} · schrijf je antwoord op je antwoordblad.`;
  els.next.style.visibility = "visible";
  els.previous.style.visibility = "visible";
  els.previous.disabled = current === 0;
  els.next.innerHTML = current === questions.length - 1 ? "Bekijk antwoorden <span>→</span>" : "Volgende vraag <span>→</span>";
  els.progress.style.width = `${((current + 1) / questions.length) * 100}%`;
  els.answers.innerHTML = "";
  item.answers.forEach((answer, index) => {
    const answerEl = document.createElement("div");
    answerEl.className = "answer answer-option";
    answerEl.innerHTML = `<span class="answer-key">${String.fromCharCode(65 + index)}</span><span>${answer}</span>`;
    els.answers.appendChild(answerEl);
  });
}
function showFinale() {
  clearInterval(timerId);
  clearTimeout(advanceTimeoutId);
  els.decade.textContent = "Klaar!";
  els.question.textContent = "De juiste antwoorden";
  els.hint.textContent = "Tijd om de antwoordbladen na te kijken!";
  els.answers.innerHTML = questions.map((item, index) => `<article class="answer correct"><span class="answer-key">${String(index + 1).padStart(2, "0")}</span><span><strong><span class="correct-option">${String.fromCharCode(65 + item.correct)}</span>${item.answers[item.correct]}</strong><small>${item.question}</small></span></article>`).join("");
  els.answers.insertAdjacentHTML("beforeend", '<button class="answer restart-button" type="button" id="restart"><span class="answer-key">↻</span><span>Speel de quiz opnieuw</span></button>');
  document.getElementById("restart").addEventListener("click", () => { current = 0; renderQuestion(); });
  els.next.style.visibility = "hidden";
  els.previous.style.visibility = "hidden";
  els.start.style.visibility = "hidden";
  els.timer.style.visibility = "hidden";
  els.timerStatus.parentElement.style.visibility = "hidden";
  els.progress.style.width = "100%";
}
function advanceQuestion() {
  if (current === questions.length - 1) showFinale(); else { current++; renderQuestion(); }
}
function startTimer() {
  if (timerId) return;
  els.start.disabled = true;
  els.start.innerHTML = '<span aria-hidden="true">◷</span> Timer loopt';
  els.timerStatus.textContent = "Overleg en noteer je antwoord!";
  timerId = setInterval(() => {
    seconds--;
    els.timerDisplay.textContent = formatTime(seconds);
    if (seconds <= 5) els.timer.classList.add("urgent");
    if (seconds === 0) {
      clearInterval(timerId);
      timerId = undefined;
      els.timerStatus.textContent = "Tijd is om — volgende vraag!";
      advanceTimeoutId = setTimeout(advanceQuestion, 650);
    }
  }, 1000);
}
els.next.addEventListener("click", () => {
  advanceQuestion();
});
els.previous.addEventListener("click", () => {
  if (current > 0) { current--; renderQuestion(); }
});
els.start.addEventListener("click", startTimer);
renderQuestion();
