// ── 화면 전환 ──────────────────────────────────────────────
function goScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── 문항 진행 상태 ──────────────────────────────────────────
let qi = 0;
const answers = new Array(QUESTIONS.length).fill(null);

function startQuiz(){ qi = 0; answers.fill(null); goScreen('screen-quiz'); renderQ(); }

function renderQ(){
  const body = document.getElementById('qbody');
  const q = QUESTIONS[qi];
  document.getElementById('qbar').style.width = ((qi+1)/QUESTIONS.length*100)+'%';
  document.getElementById('qcount').textContent = (qi+1)+' / '+QUESTIONS.length;
  document.getElementById('qprev').style.visibility = qi===0 ? 'hidden' : 'visible';
  let html = '<div class="quiz-q">'+q.t+'</div>';
  q.o.forEach((opt,i)=>{
    const picked = answers[qi]===i;
    html += '<div class="opt'+(picked?' picked':'')+'" data-i="'+i+'">'+opt[0]+'</div>';
  });
  body.innerHTML = html;
  body.querySelectorAll('.opt').forEach(el=>{
    el.onclick = ()=>{
      answers[qi] = parseInt(el.dataset.i);
      renderQ();
      setTimeout(()=>{
        if(qi < QUESTIONS.length-1){ qi++; renderQ(); }
        else { finishQuiz(); }
      }, 250);
    };
  });
}
function qPrev(){ if(qi>0){ qi--; renderQ(); } }

// ── 채점: 단일 선택 +1점 누적, 동점 시 무작위 선택 ──────────
function finishQuiz(){
  const scores = {};
  Object.keys(MECH_TO_KEY).forEach(k=>scores[k]=0);
  answers.forEach((choice, idx)=>{
    const mech = QUESTIONS[idx].o[choice][1];
    scores[mech] = (scores[mech]||0) + 1;
  });
  const maxScore = Math.max(...Object.values(scores));
  const topMechs = Object.keys(scores).filter(k => scores[k] === maxScore);
  const winner = topMechs[Math.floor(Math.random() * topMechs.length)]; // 동점 시 무작위 선택
  const mainKey = MECH_TO_KEY[winner];
  showResult(mainKey);
  goScreen('screen-result');
}

function showResult(key){
  document.querySelectorAll('.result-card').forEach(c=>c.classList.remove('on'));
  document.getElementById('result-'+key).classList.add('on');
}

// ── 결과 공유 (MVP: Web Share API / 클립보드 복사) ──────────
// 실제 카카오톡 전용 공유 카드가 필요해지면, 이 함수 내부만
// Kakao.Share.sendDefault(...) 호출로 교체하면 됩니다.
const SHARE_TITLE = '나는 상처받으면 어떻게 나를 지킬까?';
const SHARE_TEXT = '내가 반복하는 행동 속에 숨은 나만의 방어기제 알아보기 🛡️';
const SHARE_URL = window.location.href;

function shareResult(){
  if (navigator.share) {
    navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: SHARE_URL }).catch(()=>{});
  } else {
    navigator.clipboard.writeText(SHARE_TITLE + '\n' + SHARE_TEXT + '\n' + SHARE_URL)
      .then(()=> alert('링크가 복사됐어요. 카톡/문자에 붙여넣어 공유해보세요!'))
      .catch(()=> alert(SHARE_URL));
  }
}
