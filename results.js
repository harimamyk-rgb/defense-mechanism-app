// 10개 방어기제 결과 카드 마크업.
// 앱 시작 시 #resultMount에 통째로 삽입되고, showResult(key)가 하나만 보이게 전환합니다.
document.getElementById('resultMount').innerHTML = `
<div class="result-card" id="result-mirror"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"그거 완전 네 얘기 아니야?"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#9AA8D8"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><circle cx="93" cy="127" r="6" fill="#222"/><circle cx="132" cy="127" r="6" fill="#222"/><path d="M101 148 Q112 158 123 148" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><ellipse cx="234" cy="158" rx="55" ry="85" fill="#B8C8FF" stroke="#6E78B8" stroke-width="5" transform="rotate(-12 234 158)"/><ellipse cx="234" cy="158" rx="43" ry="72" fill="#C5D3FF" stroke="#8D98D7" stroke-width="3" transform="rotate(-12 234 158)"/><path d="M208 105 Q228 90 250 99" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity=".8"/><circle cx="302" cy="70" r="7" fill="#B8C8FF"/><circle cx="322" cy="102" r="5" fill="#B8C8FF"/><circle cx="42" cy="82" r="6" fill="#B8C8FF"/></svg></div>
  <h3 class="result-title">거울 방패</h3><p class="result-subtitle">내 감정을 상대에게 비춰보며<br>나를 지키는 사람이에요.</p>
  <div class="progress-dots"><span class="on"></span><span></span><span></span><span></span><span></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>싸운 다음날, "쟤가 나한테 삐진 것 같은데"라는 생각이 먼저 들어요.</p></div><div class="list-item"><div class="list-item__number">2</div><p>SNS를 보다가 "저 사람 혹시 나 저격하나?" 생각해본 적 있어요.</p></div><div class="list-item"><div class="list-item__number">3</div><p>내가 화났는데 왜 쟤가 화났다고 느껴질 때가 있어요.</p></div></div></section>
  <section class="result-section"><h3>혹시, 내 감정인데<br>상대 탓처럼 느껴진 적 있나요?</h3><p class="result-section__body">서운한 건 나인데 "쟤가 나한테 서운한가 봐"라는 생각이 먼저 들어요. 경쟁심이 드는 상황에서도 "저 사람이 나를 견제하는 것 같다"고 느끼고요. 그런데 가만히 들여다보면, 그 감정은 원래 내 안에 있던 것일 수도 있어요. 감정 자체는 없어지지 않고, 방향만 상대에게로 옮겨간 거예요.</p></section>
  <section class="result-section"><h3>왜 감정을 남에게 비추게 됐을까요?</h3><p class="result-section__body">어릴 때 친구가 미워서 "쟤 싫어"라고 말했다가 "그런 못된 마음을 가지면 안 돼"라는 말을 들은 적 있지 않았나요? 혹은 화가 나서 표현했다가 오히려 더 크게 혼나서, 그 감정을 느꼈다는 사실 자체를 숨기고 싶어졌던 순간이 있었을 거예요. 그럴 때 우리는 그 감정을 "내 것"으로 인정하는 대신, 마치 다른 사람의 것인 양 느끼는 법을 배워요. 그래야 나쁜 사람이 되지 않을 수 있으니까요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>내가 화가 난 상태인데 오히려 상대방이 화나 있는 것처럼 느껴질 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>근거 없이 "사람들이 나를 안 좋게 보는 것 같다"는 느낌이 들 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>친한 관계에서도 "쟤가 나를 이용하려는 것 같다"는 의심이 이유 없이 생길 때</p></div></div></section>
  <section class="result-section"><h3>혹시 이거, 내 감정일 수도 있지 않을까요?</h3><div class="quote"><div class="quote__mark">&quot;</div><p>다음번에 저 사람 때문에 이런 생각이 든다면, 딱 한 번만 스스로에게 물어봐 주세요. 방패를 억지로 내릴 필요는 없어요. 그냥 한 번 되물어보는 것만으로도 충분해요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>

<div class="result-card" id="result-fog"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"괜찮다고 했잖아... 근데 왜 답장이 늦지"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#C7B79A"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><circle cx="93" cy="127" r="6" fill="#222"/><circle cx="132" cy="127" r="6" fill="#222"/><path d="M98 150 Q112 146 126 150" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><polygon points="234,80 258,150 210,150" fill="#FFCB6B" stroke="#D99A2E" stroke-width="4"/><rect x="222" y="150" width="24" height="60" rx="6" fill="#FFE1A0" stroke="#D99A2E" stroke-width="3"/><path d="M200 195 Q234 178 268 195" fill="none" stroke="#E8D3A8" stroke-width="6" stroke-linecap="round" opacity=".8"/><circle cx="302" cy="70" r="7" fill="#FFCB6B"/><circle cx="322" cy="102" r="5" fill="#FFCB6B"/><circle cx="42" cy="82" r="6" fill="#FFCB6B"/></svg></div>
  <h3 class="result-title">안개 신호탄</h3><p class="result-subtitle">직접 부딪히는 대신 은근한 신호로<br>마음을 표현하는 사람이에요.</p>
  <div class="progress-dots"><span class="on"></span><span></span><span></span><span></span><span></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>"어 괜찮아~"라고 말하고 그날따라 카톡 답장이 3시간 늦어질 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>화났는데 티는 안 내고 그냥 좋아요만 안 누를 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>뒷담화는 절대 안 하는데 은근히 거리는 둘 때</p></div></div></section>
  <section class="result-section"><h3>괜찮다고 말은 했는데,<br>마음은 다른 곳에 가 있지 않나요?</h3><p class="result-section__body">서운한 일이 있어도 "괜찮아"라고 말은 하지만, 답장은 눈에 띄게 늦어져요. 회의에서는 아무 말 안 하지만, 다음 협업 요청엔 마음이 잘 안 움직이고요. 겉으로는 갈등이 없어 보이는데, 행동으로는 이미 다 전달되고 있는 거예요.</p></section>
  <section class="result-section"><h3>왜 신호로만 전달하게 됐을까요?</h3><p class="result-section__body">어릴 때 화가 나서 크게 표현했다가 "너 지금 버릇없이 왜 그래"라는 말을 듣고 오히려 더 큰 갈등으로 번진 경험이 있었을 수 있어요. 그런 순간이 반복되면, 직접 부딪히는 건 위험하다는 걸 배우게 돼요. 대신 대답을 늦추거나, 살짝 데면데면하게 구는 것처럼 안전하게 신호만 보내는 방법을 찾게 된 거예요. 갈등을 표면화하지 않으면서도 마음을 전달할 수 있는, 그때는 그게 최선이었던 거예요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>부탁을 대놓고 거절하지 못하고 일부러 늦게 처리하거나 대충 할 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>당사자에게 직접 말하기보다 다른 사람에게 먼저 그 얘기를 털어놓을 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>은근히 비꼬는 말투("그러시구나~")로 불편함을 에둘러 표현할 때</p></div></div></section>
  <section class="result-section"><h3>신호 대신, 딱 한 문장만 먼저 건네볼까요?</h3><div class="quote"><div class="quote__mark">&quot;</div><p>"나 사실 좀 서운했어" 이 한마디면 충분해요. 안개보다 훨씬 빨리, 훨씬 정확하게 전달될 거예요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>

<div class="result-card" id="result-reason"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"다 이유가 있겠지 뭐"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#D9C79A"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><circle cx="93" cy="127" r="6" fill="#222"/><circle cx="132" cy="127" r="6" fill="#222"/><path d="M101 148 Q112 156 123 148" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><path d="M204 195 L264 195 L254 240 L214 240 Z" fill="#F6D98A" stroke="#C9A24A" stroke-width="4"/><circle cx="216" cy="180" r="9" fill="#F0C05C" stroke="#C9A24A" stroke-width="2.5"/><circle cx="234" cy="168" r="9" fill="#F0C05C" stroke="#C9A24A" stroke-width="2.5"/><circle cx="252" cy="180" r="9" fill="#F0C05C" stroke="#C9A24A" stroke-width="2.5"/><circle cx="302" cy="70" r="7" fill="#F6D98A"/><circle cx="322" cy="102" r="5" fill="#F6D98A"/><circle cx="42" cy="82" r="6" fill="#F6D98A"/></svg></div>
  <h3 class="result-title">이유 수집가</h3><p class="result-subtitle">그럴듯한 이유를 만들어<br>마음을 다독이는 사람이에요.</p>
  <div class="progress-dots"><span></span><span class="on"></span><span></span><span></span><span></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>연락 안 오면 5초 만에 "바쁜가보다"로 결론 내릴 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>안 좋은 일 생기면 "이것도 다 경험이지"부터 나올 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>실제 감정보다 "그럴 수도 있지" 소리를 더 자주 할 때</p></div></div></section>
  <section class="result-section"><h3>혹시, 서운한데<br>이유부터 찾고 있지 않나요?</h3><p class="result-section__body">연인이 연락이 뜸해지면 "요즘 바빠서 그렇겠지"라는 생각이 제일 먼저 들어요. 원하는 결과를 못 얻었을 땐 "어차피 나한테 맞는 길이 아니었을 거야"라고 정리해버리고요. 그런데 이 이유들, 진짜 이유가 맞을까요? 사실 이유의 진위보다 더 중요한 게 있어요 — 이유를 붙이는 행동 자체가, 그 감정을 마주하는 걸 미루는 방식일 수 있다는 거예요.</p></section>
  <section class="result-section"><h3>왜 이유부터 찾게 됐을까요?</h3><p class="result-section__body">어릴 때 넘어져서 속상해 울고 있는데, "괜찮아, 많이 아팠겠다"보다 "그러니까 뛰지 말라고 했잖아"라는 말이 먼저 왔던 적 있지 않나요? 혹은 속상한 일을 겪었을 때 "왜 그런 일이 생겼는지" 설명부터 듣고 나서야 마음이 놓였던 경험이 반복됐을 수도 있어요. 그럴 때 우리는 감정을 표현하는 것보다, 이유를 이해하는 게 관계를 더 편하게 만든다는 걸 배워요. 그렇게 이유부터 찾는 회로가 자동으로 작동하게 된 거예요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>갈등 상황에서 상대의 입장을 먼저 헤아리느라 내 감정은 뒷전이 될 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>거절당해도 "그럴 수도 있지" 하고 빠르게 넘길 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>힘든 결정 앞에서 감정보다 논리적인 이유부터 줄줄이 나열할 때</p></div></div></section>
  <section class="result-section"><h3>이유를 붙이기 전에, 딱 한 가지만 먼저 해보세요</h3><div class="quote"><div class="quote__mark">&quot;</div><p>이유를 찾는 습관, 나쁜 게 아니에요. 다만 순서만 살짝 바꿔보면 좋겠어요. 이유를 붙이기 전에 30초만, "지금 나는 무슨 감정이지?"라고 스스로에게 물어보는 거예요. 이유는 그다음에 붙여도 절대 늦지 않아요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>

<div class="result-card" id="result-robot"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"일단 정리부터 좀 하고"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#A9B7C7"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><circle cx="93" cy="127" r="6" fill="#222"/><circle cx="132" cy="127" r="6" fill="#222"/><path d="M101 150 L123 150" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><rect x="204" y="90" width="76" height="100" rx="10" fill="#C7D6EA" stroke="#7C93B0" stroke-width="4" transform="rotate(-6 242 140)"/><line x1="220" y1="115" x2="264" y2="112" stroke="#7C93B0" stroke-width="3" transform="rotate(-6 242 140)"/><line x1="220" y1="135" x2="264" y2="132" stroke="#7C93B0" stroke-width="3" transform="rotate(-6 242 140)"/><circle cx="302" cy="70" r="7" fill="#C7D6EA"/><circle cx="322" cy="102" r="5" fill="#C7D6EA"/><circle cx="42" cy="82" r="6" fill="#C7D6EA"/></svg></div>
  <h3 class="result-title">분석 로봇</h3><p class="result-subtitle">감정을 데이터로 바꿔<br>안전하게 다루는 사람이에요.</p>
  <div class="progress-dots"><span></span><span class="on"></span><span></span><span></span><span></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>싸우고 나서 원인 분석 리포트를 마음속으로 쓸 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>감정을 물으면 "그니까 상황이"로 답이 시작될 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>슬픈 영화를 보고 나서 "근데 서사 구조가"부터 나올 때</p></div></div></section>
  <section class="result-section"><h3>감정을 느끼기 전에,<br>먼저 분석부터 하고 있지 않나요?</h3><p class="result-section__body">속상한 일이 생기면 감정보다 "왜 이런 일이 일어났는지" 원인 분석부터 시작해요. 다툰 뒤에도 "우리가 왜 이런 패턴으로 싸우는지" 구조적으로 설명하려 하고요. 감정과 나 사이에, "생각"이라는 안전한 완충지대를 만들어두는 거예요.</p></section>
  <section class="result-section"><h3>왜 감정 대신 분석을 먼저 하게 됐을까요?</h3><p class="result-section__body">집에서 부모님 기분이 그날그날 달라서, 오늘은 웃어주실지 예민하실지 미리 살피고 계산해야 했던 적 있지 않나요? 감정을 표현했을 때보다, 상황을 논리적으로 설명했을 때 더 안전하고 인정받는다고 느꼈던 경험이 쌓이면, 감정 대신 분석하는 게 훨씬 안정적인 통제감을 준다는 걸 일찍 배우게 돼요. 분석은 예측 가능하지만, 감정은 예측할 수 없으니까요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>감정을 물어보면 감정 단어 대신 상황 요약부터 답하게 될 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>슬픈 영화나 책을 봐도 감정보다 스토리 구조부터 평가하게 될 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>스트레스 받는 날 오히려 할 일 목록이나 정리 작업에 몰두하게 될 때</p></div></div></section>
  <section class="result-section"><h3>분석 끝난 뒤에, 딱 한 줄만 더해볼까요?</h3><div class="quote"><div class="quote__mark">&quot;</div><p>"그래서 나는 서운했다"처럼요. 로봇도 가끔은 감정 언어를 씁니다. 몸이 먼저 보내는 신호(가슴이 답답하다, 어깨가 무겁다)를 알아차리는 것부터 시작해도 좋아요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>

<div class="result-card" id="result-switch"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"화났는데 왜 자꾸 잘해주지"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#D9A9C4"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><circle cx="93" cy="127" r="6" fill="#222"/><circle cx="132" cy="127" r="6" fill="#222"/><path d="M96 145 Q112 158 128 145" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><rect x="196" y="130" width="96" height="46" rx="23" fill="#F3C2DA" stroke="#C77BA0" stroke-width="4"/><circle cx="266" cy="153" r="17" fill="#FFFFFF" stroke="#C77BA0" stroke-width="3"/><circle cx="302" cy="70" r="7" fill="#F3C2DA"/><circle cx="322" cy="102" r="5" fill="#F3C2DA"/><circle cx="42" cy="82" r="6" fill="#F3C2DA"/></svg></div>
  <h3 class="result-title">역방향 스위치</h3><p class="result-subtitle">진짜 감정과 반대로 행동하며<br>스스로를 보호하는 사람이에요.</p>
  <div class="progress-dots"><span></span><span></span><span class="on"></span><span></span><span></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>미운 사람 생일을 제일 먼저 챙기고 있을 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>서운한데 오히려 더 웃으면서 대할 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>"나 진짜 착한가?" 스스로 의심해본 적 있을 때</p></div></div></section>
  <section class="result-section"><h3>화가 났는데,<br>오히려 더 다정해지고 있지 않나요?</h3><p class="result-section__body">서운한 사람에게 오히려 더 다정하게 대해요. 화가 난 상황에서도 웃으며 상대를 챙기고요. 스스로도 "왜 이렇게까지 잘해주지"라는 의문이 들 때가 있을 거예요. 진짜 감정과 정반대의 행동이 튀어나오는 거예요.</p></section>
  <section class="result-section"><h3>왜 감정을 반대로 표현하게 됐을까요?</h3><p class="result-section__body">친구나 동생에게 화를 냈다가 "너 왜 그렇게 못되게 굴어"라는 말을 듣고, 그 뒤로는 화날 때마다 오히려 더 잘해줘야 했던 경험 있지 않나요? 분노나 서운함을 표현했을 때 부정적인 반응을 자주 겪었다면, 그 감정을 아예 반대 방향으로 바꿔서 표현하는 게 더 안전하다고 학습하게 돼요. 화가 나는데 오히려 더 착하게 굴었을 때 관계가 유지됐던 경험이 쌓이면서 굳어진 거예요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>미운 감정이 드는 사람의 생일이나 기념일을 유독 더 신경 써서 챙길 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>진짜 감정을 표현하는 순간 자체를 어색해하거나 피할 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>정작 내가 힘들 때는 티 내지 않고 오히려 상대를 걱정해줄 때</p></div></div></section>
  <section class="result-section"><h3>겉으로는 그대로, 마음속에서만 이름 붙여볼까요?</h3><div class="quote"><div class="quote__mark">&quot;</div><p>다정하게 굴기 전에, 마음속으로만이라도 진짜 감정에 이름을 붙여보세요. 안전하다고 느끼는 사람 한 명에게만 살짝 표현해보는 것부터 시작해도 좋아요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>

<div class="result-card" id="result-road"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"엄한 데다 화풀이 중"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#9AC7C0"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><circle cx="93" cy="127" r="6" fill="#222"/><circle cx="132" cy="127" r="6" fill="#222"/><path d="M100 149 Q112 145 124 149" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><line x1="238" y1="90" x2="238" y2="230" stroke="#7CB9AE" stroke-width="6"/><polygon points="238,100 292,90 292,120 238,130" fill="#B7E4DA" stroke="#5FA090" stroke-width="3"/><polygon points="238,140 184,150 184,180 238,170" fill="#B7E4DA" stroke="#5FA090" stroke-width="3"/><circle cx="302" cy="70" r="7" fill="#B7E4DA"/><circle cx="322" cy="102" r="5" fill="#B7E4DA"/><circle cx="42" cy="82" r="6" fill="#B7E4DA"/></svg></div>
  <h3 class="result-title">우회 도로</h3><p class="result-subtitle">감정을 안전한 곳으로<br>돌려 흘려보내는 사람이에요.</p>
  <div class="progress-dots"><span></span><span></span><span></span><span class="on"></span><span></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>상사한테 혼난 날 배달앱 결제 버튼을 누를 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>진짜 화난 사람 앞에서는 순한 양이 될 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>운전할 때 유독 신경질적이 될 때</p></div></div></section>
  <section class="result-section"><h3>진짜 화난 사람 앞에서는<br>오히려 조용해지지 않나요?</h3><p class="result-section__body">상사한테 혼난 날, 집에 와서 다른 사람에게 그 감정을 풀어내요. 스트레스 쌓인 날은 애먼 소비로 이어지고요. 정작 감정을 일으킨 사람 앞에서는 오히려 말이 없어져요. 감정의 크기는 그대로인데, 향하는 방향만 바뀌는 거예요.</p></section>
  <section class="result-section"><h3>왜 다른 곳으로 감정을 돌리게 됐을까요?</h3><p class="result-section__body">부모님께 서운한 게 있어도 말하면 더 혼날까 봐, 대신 형제자매나 친구한테 괜히 짜증을 냈던 적 있지 않나요? 감정을 일으킨 대상(주로 힘이 더 센 사람)에게 직접 표현하는 게 위험하거나 소용없다고 느낀 경험이 반복되면, 안전한 대상에게 감정을 돌리는 패턴이 생겨요. 힘의 차이가 큰 관계에서 특히 자주 자리잡아요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>반려동물이나 물건에 짜증을 표출할 때가 있을 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>SNS에 누구를 향한 건지 애매하게 감정을 드러내는 글을 올릴 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>평소보다 운전할 때 유독 신경질적으로 반응할 때</p></div></div></section>
  <section class="result-section"><h3>우회하기 전에, 출발지부터 짚어볼까요?</h3><div class="quote"><div class="quote__mark">&quot;</div><p>이 감정이 진짜 어디서 시작됐는지 한 번만 짚어보세요. 도로를 안 바꿔도, 출발지를 아는 것만으로 감정을 다루는 방식이 조금씩 달라져요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>

<div class="result-card" id="result-seal"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"그거 기억이... 안 나는데?"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#C0A98A"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><path d="M87 127 Q93 123 99 127" stroke="#222" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M126 127 Q132 123 138 127" stroke="#222" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M104 150 Q112 154 120 150" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><rect x="204" y="150" width="70" height="56" rx="8" fill="#E7C99A" stroke="#B08A4E" stroke-width="4"/><path d="M216 150 A23 26 0 0 1 262 150" fill="none" stroke="#B08A4E" stroke-width="6"/><circle cx="239" cy="176" r="6" fill="#B08A4E"/><circle cx="302" cy="70" r="7" fill="#E7C99A"/><circle cx="322" cy="102" r="5" fill="#E7C99A"/><circle cx="42" cy="82" r="6" fill="#E7C99A"/></svg></div>
  <h3 class="result-title">봉인술사</h3><p class="result-subtitle">감당하기 힘든 감정을<br>잠시 넣어두는 사람이에요.</p>
  <div class="progress-dots"><span></span><span></span><span></span><span></span><span class="on"></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>"그때 힘들지 않았어?"라는 질문에 "어? 그랬나?" 반응이 나올 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>힘든 일 얘기해도 표정 변화가 별로 없을 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>이유 모를 두통이나 피곤함이 자주 찾아올 때</p></div></div></section>
  <section class="result-section"><h3>그때 힘들지 않았냐고 물으면,<br>의외로 담담하지 않나요?</h3><p class="result-section__body">힘들었던 일을 나중에 돌아보면 잘 기억이 안 나요. 속상한 일이 있어도 "그냥 신경 안 쓰려고"라며 빠르게 잊고요. 감정을 물어보면 "잘 모르겠어"라는 대답이 자주 나와요. 그 감정이 사라진 게 아니라, 의식 밖으로 밀려나 있는 거예요.</p></section>
  <section class="result-section"><h3>왜 감정을 넣어두게 됐을까요?</h3><p class="result-section__body">많이 속상했던 날, 울고 있어도 아무도 다가와 주지 않았거나 "그만 좀 울어"라는 말만 들었던 적 있지 않나요? 감당하기 어려운 감정을 느꼈을 때 그걸 받아줄 사람이나 공간이 없었던 경험이 반복되면, 마음이 그 감정을 아예 의식 밖으로 밀어내는 방식으로 스스로를 지키는 법을 배워요. "느끼지 않는 것"이 그때는 가장 안전한 선택이었던 거예요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>힘든 이야기를 할 때도 표정 변화가 크지 않을 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>몸이 먼저 반응(두통, 피로감)하는데 정작 이유를 잘 모를 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>힘들었던 시기를 떠올려도 감정보다 사실관계만 기억날 때</p></div></div></section>
  <section class="result-section"><h3>아주 조금씩, 안전한 곳에서 열어볼까요?</h3><div class="quote"><div class="quote__mark">&quot;</div><p>봉인된 감정이 나중에 다른 모습(피로감, 짜증)으로 튀어나올 때가 있어요. 안전하다고 느끼는 사람 앞에서 조금씩 열어보는 것도 괜찮고, 힘들다면 전문가와 함께 다뤄보는 것도 좋은 방법이에요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>

<div class="result-card" id="result-alchemy"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"힘든 만큼 결과물이 나옴"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#9CC98A"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><circle cx="93" cy="123" r="6" fill="#222"/><circle cx="132" cy="123" r="6" fill="#222"/><path d="M98 148 Q112 160 126 148" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><path d="M226 100 L226 140 L198 200 Q196 210 210 210 L268 210 Q282 210 280 200 L252 140 L252 100 Z" fill="#C7EAB0" stroke="#6FA84F" stroke-width="4"/><rect x="220" y="90" width="38" height="12" rx="4" fill="#C7EAB0" stroke="#6FA84F" stroke-width="3"/><circle cx="230" cy="185" r="5" fill="#8FCB6E" opacity=".8"/><circle cx="248" cy="192" r="4" fill="#8FCB6E" opacity=".8"/><circle cx="302" cy="70" r="7" fill="#C7EAB0"/><circle cx="322" cy="102" r="5" fill="#C7EAB0"/><circle cx="42" cy="82" r="6" fill="#C7EAB0"/></svg></div>
  <h3 class="result-title">연금술사</h3><p class="result-subtitle">감정을 다른 에너지로<br>바꾸는 사람이에요.</p>
  <div class="progress-dots"><span></span><span></span><span></span><span></span><span class="on"></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>이별하고 나서 오히려 운동 루틴이 완성될 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>스트레스 받으면 대청소부터 시작할 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>힘들었던 시기의 포트폴리오가 제일 알찰 때</p></div></div></section>
  <section class="result-section"><h3>힘든 감정이 오히려<br>뭔가를 만들어내는 힘이 되지 않나요?</h3><p class="result-section__body">속상한 일이 있으면 운동이나 창작 활동으로 자연스럽게 이어져요. 돌아보면 힘들었던 시기에 오히려 결과물을 많이 만들어냈고요. 감정을 억누르는 대신, 다른 형태의 에너지로 온전히 바꿔내는 거예요.</p></section>
  <section class="result-section"><h3>어떻게 이런 힘을 갖게 됐을까요?</h3><p class="result-section__body">어릴 때 속상한 마음을 그림이나 글, 운동으로 풀어냈을 때 "우와 잘했다"는 반응을 받았던 경험이 있었을 수 있어요. 감정을 표현하는 것 자체보다, 그 감정을 뭔가 생산적인 것으로 바꿔냈을 때 인정받거나 스스로 만족감을 느꼈던 경험이 쌓이면 이 패턴이 자리잡아요. 감정을 억누르는 게 아니라, 다른 형태로 온전히 표현하는 법을 일찍 배운 거예요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>이별이나 힘든 일 이후 취미에 몰두하는 경향이 있을 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>화가 날 때 청소나 정리를 몰아서 하게 될 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>감정이 격해질 때 글쓰기 같은 방식으로 정리하는 걸 좋아할 때</p></div></div></section>
  <section class="result-section"><h3>변환하기 전에, 잠깐 느껴보는 것도 더해볼까요?</h3><div class="quote"><div class="quote__mark">&quot;</div><p>이미 건강하게 잘 쓰고 있는 방식이에요. 가끔은 아무것도 만들어내지 않고, 그냥 그 감정만 느껴보는 시간도 스스로에게 허락해주세요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>

<div class="result-card" id="result-laugh"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"이거 완전 다큐 각인데"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#E0C866"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><path d="M87 122 Q93 116 99 122" stroke="#222" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M126 122 Q132 116 138 122" stroke="#222" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M92 146 Q112 168 132 146" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><path d="M206 100 L272 100 L272 150 Q272 190 239 214 Q206 190 206 150 Z" fill="#FCE289" stroke="#D9AE2E" stroke-width="4"/><path d="M222 148 Q239 168 256 148" fill="none" stroke="#B8901F" stroke-width="5" stroke-linecap="round"/><circle cx="302" cy="70" r="7" fill="#FCE289"/><circle cx="322" cy="102" r="5" fill="#FCE289"/><circle cx="42" cy="82" r="6" fill="#FCE289"/></svg></div>
  <h3 class="result-title">웃음 방패</h3><p class="result-subtitle">유머로 긴장을 풀어내며<br>넘어가는 사람이에요.</p>
  <div class="progress-dots"><span></span><span></span><span></span><span></span><span class="on"></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>힘든 일 겪고 바로 그걸로 드립부터 만들 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>위로받아야 할 상황에서 내가 먼저 웃길 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>진지한 대화만 하면 어색해서 농담이 튀어나올 때</p></div></div></section>
  <section class="result-section"><h3>힘든 순간에도<br>먼저 웃음으로 분위기를 만들지 않나요?</h3><p class="result-section__body">힘든 일을 겪은 뒤 "이거 완전 드라마 각인데" 하고 스스로 농담해요. 실수했을 때도 자책보다 자조 섞인 농담으로 넘어가고요. 위로받아야 할 상황에서도 오히려 먼저 나서서 분위기를 웃기게 만들어요.</p></section>
  <section class="result-section"><h3>왜 유머로 먼저 풀어내게 됐을까요?</h3><p class="result-section__body">집안 분위기가 무거워질 때마다 누군가 유머로 넘기면 다 같이 편해졌던 기억, 있지 않나요? 유머를 사용했을 때 자신도 주변도 편안해지는 경험을 반복적으로 하면서, 유머가 감정을 다루기 쉬운 크기로 만들어준다는 걸 몸으로 배운 거예요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>힘들다는 말 대신 웃긴 밈이나 짤로 감정을 대신 전달할 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>무거운 얘기를 꺼낼 때도 중간중간 유머로 분위기를 풀어낼 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>진지한 대화가 이어지면 오히려 어색함을 느낄 때</p></div></div></section>
  <section class="result-section"><h3>농담 다음에, 진심 한마디만 더해볼까요?</h3><div class="quote"><div class="quote__mark">&quot;</div><p>"근데 사실 좀 힘들었어"처럼요. 웃음이 없어도 괜찮다는 걸, 조금씩 스스로에게 알려주세요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>

<div class="result-card" id="result-timer"><div class="result-scroll"><div class="result-top">
  <div class="result-nav"><span class="result-nav__close" onclick="goScreen('screen-hook')">&times;</span><span class="result-nav__restart" onclick="goScreen('screen-hook')">&#8635; 다시하기</span></div>
  <div class="result-eyebrow">당신의 방어기제는</div>
  <p style="margin:14px 0 0;font-size:13px;color:var(--color-muted);font-style:italic;">"일단 오늘은 넘어가고, 낼 얘기하자"</p>
  <div class="result-visual"><svg class="char-illustration" viewBox="0 0 360 300"><ellipse class="soft-shadow" cx="175" cy="270" rx="88" ry="12" fill="#B7A9D9"/><circle cx="112" cy="132" r="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><ellipse cx="112" cy="166" rx="48" ry="72" fill="#FFF0E8" stroke="#D9957F" stroke-width="4"/><circle cx="93" cy="127" r="6" fill="#222"/><circle cx="132" cy="127" r="6" fill="#222"/><path d="M100 149 Q112 151 124 149" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><ellipse cx="78" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><ellipse cx="146" cy="148" rx="13" ry="7" fill="#F5B6A6" opacity=".75"/><path d="M154 168 Q174 184 185 202" fill="none" stroke="#D9957F" stroke-width="18" stroke-linecap="round"/><path d="M210 100 L268 100 L268 120 L239 148 L268 176 L268 196 L210 196 L210 176 L239 148 L210 120 Z" fill="#D4C7EF" stroke="#8B78C4" stroke-width="4"/><circle cx="302" cy="70" r="7" fill="#D4C7EF"/><circle cx="322" cy="102" r="5" fill="#D4C7EF"/><circle cx="42" cy="82" r="6" fill="#D4C7EF"/></svg></div>
  <h3 class="result-title">타이머 마스터</h3><p class="result-subtitle">감정을 잠시 미뤘다가<br>적절한 때 다루는 사람이에요.</p>
  <div class="progress-dots"><span></span><span></span><span></span><span></span><span class="on"></span></div>
</div>
<div class="result-body">
  <section class="result-section"><h3>이런 적 있나요?</h3><p class="result-section__lead">하나라도 익숙했다면,<br>이 결과를 조금 더 살펴보세요.</p>
    <div class="list"><div class="list-item"><div class="list-item__number">1</div><p>화나도 바로 말 안 하고 하루 자고 얘기할 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>급한 상황에서 오히려 제일 차분할 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>"너 진짜 감정 없냐"는 소리 들어본 적 있을 때</p></div></div></section>
  <section class="result-section"><h3>바로 반응하기보다,<br>잠깐 시간을 두는 편이지 않나요?</h3><p class="result-section__body">화가 나도 그 자리에서 바로 반응하기보다 잠시 시간을 두고 정리해요. 갈등 상황에서도 감정이 가라앉을 때까지 기다렸다가 대화를 시작하고요. 감정을 못 느끼는 게 아니라, "지금은 때가 아니다"를 스스로 판단하는 거예요.</p></section>
  <section class="result-section"><h3>어떻게 이런 균형을 갖게 됐을까요?</h3><p class="result-section__body">감정이 격할 때 바로 말하기보다, 잠깐 시간을 갖고 다시 이야기했을 때 훨씬 잘 풀렸던 경험이 있었을 거예요. 감정을 존중받으면서도 즉흥적인 반응이 강요되지 않았던 환경에서 자란 경우, 이렇게 스스로 타이밍을 고르는 능력이 자연스럽게 자리잡아요.</p></section>
  <section class="result-section"><h3>이럴 때 특히 잘 나타나요</h3><div class="list"><div class="list-item"><div class="list-item__number">1</div><p>힘든 일이 있어도 바로 티 내지 않고 나중에 정리해서 얘기할 때</p></div><div class="list-item"><div class="list-item__number">2</div><p>감정을 다루기 전에 스스로 준비할 시간을 갖는 편일 때</p></div><div class="list-item"><div class="list-item__number">3</div><p>급한 상황에서도 비교적 침착함을 유지할 때</p></div></div></section>
  <section class="result-section"><h3>타이머에, 끝나는 시간도 정해볼까요?</h3><div class="quote"><div class="quote__mark">&quot;</div><p>이미 균형 잡힌 방식이에요. 다만 타이머가 너무 길어지지 않게, "언제까지 미룰지" 스스로 기한을 정해보세요. 가끔은 준비 없이 즉흥적으로 표현해보는 것도 좋은 연습이 될 거예요.</p></div>
    <div class="note">※ 심리테스트 결과는 참고용이며, 전문적인 진단이 아닙니다.</div></section>
</div></div>
<div class="floating-cta"><div class="floating-cta-inner"><button class="btn btn--secondary" onclick="goScreen('screen-hook')">다시하기</button><button class="btn btn--primary" onclick="shareResult()">&#8599; 결과 공유하기</button></div></div>
</div>
`;
