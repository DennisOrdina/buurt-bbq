const questions = [
  ["1970s", "In welk jaar won ABBA het Eurovisie Songfestival met 'Waterloo'?", "Muziekgeschiedenis", ["1972", "1974", "1976", "1978"], 1, "0GjEhVFGZW8afUYGChu3Rr"],
  ["1980s", "Welke dansbeweging maakte Michael Jackson tijdens een tv-optreden met dit nummer wereldberoemd?", "Popcultuur", ["Moonwalk", "Robot", "Running man", "Electric slide"], 0, "5ChkMS8OtdzJeqyybCc9R5"],
  ["1980s", "Hoe heet de tegenstander van Rocky in de film waarvoor dit nummer werd gemaakt?", "Film", ["Clubber Lang", "Ivan Drago", "Apollo Creed", "Tommy Gunn"], 0, "2HHtWyy5CgaQbC7XSoOb0e"],
  ["Nederlandse klassiekers", "Welke stad bezingt deze Nederlandse klassieker?", "Plaats", ["Rotterdam", "Utrecht", "Amsterdam", "Den Haag"], 2, "0he0jeqHPH4W5Aw849W6ES"],
  ["1970s", "Welk instrument hoor je meteen in de intro?", "Instrument", ["Saxofoon", "Trompet", "Dwarsfluit", "Mondharmonica"], 0, "2x7JPx4lQ6xm4ba5ughsvM"],
  ["1980s", "Welke animatietechniek maakt de videoclip bij dit nummer zo herkenbaar?", "Videoclip", ["Rotoscoping", "Stop-motion", "Kleianimatie", "Pixilation"], 0, "2WfaOiMkCvy7F5fcp2zZ8L"],
  ["1990s", "In welke sitcom hoor je dit liedje in de opening?", "TV-serie", ["Friends", "Seinfeld", "The Fresh Prince", "Full House"], 0, "7MZOtq8HEcSVxDHc4kDGWF"],
  ["1990s", "Welke Spice Girl droeg de bijnaam 'Sporty Spice'?", "Popcultuur", ["Mel C", "Emma Bunton", "Mel B", "Geri Halliwell"], 0, "1Je1IMUlBXcx1Fz0WE7oPT"],
  ["1990s", "Uit welke film komt de iconische ballad die je nu hoort?", "Film", ["The Bodyguard", "Titanic", "Pretty Woman", "Ghost"], 1, "33LC84JgLvK2KuW43MfaNq"],
  ["1990s", "Welke Gallagher-broer schreef dit nummer?", "Songwriting", ["Noel", "Liam", "Paul", "Geen van beiden"], 0, "7ouMYWpwJ422jRcDASZB7P"],
  ["2000s", "Welke dansfilm maakte dit nummer extra beroemd?", "Film", ["Save the Last Dance", "Step Up", "Dirty Dancing: Havana Nights", "Honey"], 1, "4JpKVNYnVcJ8tuMKjAj50A"],
  ["2000s", "Welke helft van OutKast neemt de zang van dit nummer voor zijn rekening?", "Artiest", ["André 3000", "Big Boi", "CeeLo Green", "Pharrell Williams"], 0, "2PpruBYCo4H7WOBJ7Q2EwM"],
  ["2000s", "Welk land hoort bij deze wereldhit 'Dragostea Din Tei'?", "Land", ["Roemenië", "Moldavië", "Bulgarije", "Hongarije"], 1, "7CnnGGBLuuu9cawoiHPLl4"],
  ["2000s", "Welke titel droeg Beyoncé's eerste soloalbum, waarop dit nummer stond?", "Album", ["B'Day", "Dangerously in Love", "4", "I Am... Sasha Fierce"], 1, "5IVuqXILoxVWvWEPm82Jxr"],
  ["2000s", "Uit welke Amerikaanse stad komt de band achter dit nummer?", "Herkomst", ["Las Vegas", "Los Angeles", "Seattle", "Austin"], 0, "003vvx7Niy0yvhvHt4a68B"],
  ["2010s", "Welke animatiefilm maakte dit nummer wereldwijd extra groot?", "Film", ["Despicable Me 2", "Coco", "Sing", "Inside Out"], 0, "60nZcImufyMA1MKQY3dcCH"],
  ["2010s", "Wie werkte samen met Daft Punk aan deze hit?", "Samenwerking", ["Bruno Mars", "Pharrell Williams", "The Weeknd", "Justin Timberlake"], 1, "69kOkLUCkxIZYexIgSG8rq"],
  ["2010s", "Op welke Nederlandse feestdag werd dit lied een vaste afsluiter?", "Traditie", ["Koningsdag", "Bevrijdingsdag", "Sinterklaas", "Carnaval"], 0, "4ZtFanR9U6ndgddUvNcjcG"],
  ["2010s", "Welke sportcompetitie gebruikte dit nummer als bekendste WK-lied?", "Sport", ["EK voetbal", "WK voetbal", "Olympische Spelen", "Tour de France"], 1, "6bNB5gxFX6Q87DbQWb8OWZ"],
  ["2010s", "Welke film uit 2018 leverde deze krachtige duet-hit op?", "Film", ["La La Land", "A Star Is Born", "Bohemian Rhapsody", "Mamma Mia! Here We Go Again"], 1, "2VxeLyX666F8uXCJ0dZF8B"],
  ["2020s", "Welke serie gaf dit Kate Bush-nummer een enorme comeback?", "TV-serie", ["Wednesday", "Stranger Things", "Euphoria", "The Crown"], 1, "29d0nY7TzCoi22XBqDQkiP"],
  ["2020s", "Wie zingt deze synthpop-hit 'Blinding Lights'?", "Artiest", ["The Weeknd", "Harry Styles", "Post Malone", "Bruno Mars"], 0, "0VjIjW4GlUZAMYd2vXMi3b"],
  ["2020s", "Op welk ouder nummer wordt deze hit vaak gezien als een antwoord?", "Muziekverband", ["When I Was Your Man", "Grenade", "Locked Out of Heaven", "Just the Way You Are"], 0, "4DHcnVTT87F0zZhRPYmZ3B"],
  ["2020s", "In welke film is 'What Was I Made For?' te horen?", "Film", ["Barbie", "Wonka", "Oppenheimer", "Inside Out 2"], 0, "6wf7Yu7cxBSPrRlWeSeK0Q"],
  ["2020s", "Welke artiest vertegenwoordigde Nederland met dit nummer op het Eurovisiepodium?", "Eurovisie", ["Joost", "Claude", "Duncan Laurence", "S10"], 0, "0uHrMbMv3c78398pIANDqR"],
  ["2020s", "Op welk album van Sabrina Carpenter verscheen dit nummer?", "Album", ["Short n' Sweet", "emails i can't send", "Singular: Act II", "Evolution"], 0, "2qSkIjg1o9h3YT9RAgYN75"],
  ["2020s", "Met welke artiest zingt ROSÉ hier samen?", "Samenwerking", ["Bruno Mars", "The Weeknd", "Jungkook", "Ed Sheeran"], 0, "5vNRhkKd0yEAg8suGBpjeY"],
  ["2020s", "Welke Nederlandse band maakte deze festivalhit 'Noodgeval'?", "Artiest", ["Goldband", "Froukje", "De Jeugd van Tegenwoordig", "Maan"], 0, "2LcmbuYX7tyR4DWy3b273L"],
  ["2020s", "Van welk album is dit nummer de afsluitende track?", "Album", ["HIT ME HARD AND SOFT", "Happier Than Ever", "When We All Fall Asleep, Where Do We Go?", "dont smile at me"], 0, "6dOtVTDdiauQNBQEDOtlAB"],
  ["Finale", "Welke musical hoort bij deze onweerstaanbare ABBA-song?", "Musical", ["Mamma Mia!", "Grease", "The Lion King", "Hairspray"], 0, "0GjEhVFGZW8afUYGChu3Rr"]
].map(([decade, question, category, answers, correct]) => ({ decade, question, category, answers, correct }));

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
