const QUESTIONS = [
  {t:"오랜만에 만난 친구가 무심코 상처되는 말을 했다.", o:[
    ["가볍게 받아치듯 웃어넘기지만, 이후 연락이 뜸해진다","passive_aggressive"],
    ["집에 와서 왜 그런 말을 했을지 계속 곱씹는다","intellectualization"],
    ["순간 욱하지만, 감정이 가라앉을 때까지 반응을 미뤄둔다","suppression"],
    ["답답한 마음을 다른 활동에 쏟아낸다","sublimation"]]},
  {t:"열심히 준비한 일이 예상과 다르게 흘러갔다.", o:[
    ["\"역시 나한테만 이런 일이 생긴다\"는 생각이 든다","projection"],
    ["뭐가 잘못됐는지 단계별로 분석하기 시작한다","intellectualization"],
    ["그 경험을 다음 준비 에너지로 바꾼다","sublimation"],
    ["관계자에게 바로 무엇이 문제였는지 물어보고 정리한다","suppression"]]},
  {t:"팀원이 내 아이디어를 은근슬쩍 자기 것처럼 발표했다.", o:[
    ["회의에선 말 안 하지만, 다음 협업 요청엔 늦게 답한다","passive_aggressive"],
    ["\"다 같이 만든 아이디어니까\" 하며 상황을 정리해버린다","rationalization"],
    ["화가 나는 걸 인정하고, 나중에 차분히 얘기할 타이밍을 잡는다","suppression"],
    ["오히려 그 팀원에게 평소보다 더 잘해준다","reaction_formation"]]},
  {t:"중요한 발표나 시험을 망쳤다.", o:[
    ["\"그 자리 분위기가 원래 별로였어\" 하고 생각한다","projection"],
    ["발표 자료나 답안의 논리를 처음부터 다시 복기한다","intellectualization"],
    ["\"이불 킥 각인데\" 하고 스스로 웃어넘긴다","humor"],
    ["그 경험을 다음 준비 에너지로 바꾼다","sublimation"]]},
  {t:"연인이나 가족과 다퉜다. 내가 먼저 말 걸어야 할 것 같은데 자존심이 상한다.", o:[
    ["겉으론 아무렇지 않은 척하지만 은근히 데면데면하게 군다","passive_aggressive"],
    ["\"각자 예민했던 것 같다\"며 논리적으로 정리해버린다","rationalization"],
    ["화해 타이밍을 스스로 정하고 감정이 가라앉을 때까지 기다린다","suppression"],
    ["오히려 평소보다 더 다정하게 군다","reaction_formation"]]},
  {t:"가족이 나에 대해 걱정 섞인 잔소리를 했다.", o:[
    ["\"그러시는 분이 참 대단하시네요~\" 하고 가볍게 받아치듯 넘긴다","passive_aggressive"],
    ["그 얘기가 나온 배경을 이해하려고 분석한다","intellectualization"],
    ["\"내가 또 잔소리 들을 짓을 했네\" 하고 스스로 웃어넘긴다","humor"],
    ["\"걱정되는 건 알겠는데, 부담스러워\"라고 바로 말한다","suppression"]]},
  {t:"상사한테 이유 없이 혼났다. 퇴근길, 나는?", o:[
    ["집에 가서 다른 사람에게 그 감정을 풀어낸다","displacement"],
    ["\"오늘 팀 전체가 스트레스 받은 상황이었다\"며 분석한다","intellectualization"],
    ["러닝화 신고 나가서 땀 빼며 푼다","sublimation"],
    ["그 자리에서 이유를 물어보고 넘어간다","suppression"]]},
  {t:"SNS에서 지인의 자랑 게시물을 봤다. 마음이 불편하다.", o:[
    ["\"저 사람 보여주기식인 듯\" 하는 생각이 든다","projection"],
    ["\"쟤도 힘든 게 있겠지\" 하며 이유를 붙인다","rationalization"],
    ["불편함을 인정하고 잠깐 앱을 끈 뒤 나중에 다시 본다","suppression"],
    ["그 에너지로 내 프로젝트에 더 몰입한다","sublimation"]]},
  {t:"누군가 나에 대해 뒷말을 했다는 걸 알게 됐다.", o:[
    ["가볍게 받아치듯 말하고 거리를 둔다","passive_aggressive"],
    ["\"쟤가 원래 그런 얘기를 좋아하지\" 하고 생각한다","projection"],
    ["속상하지만 감정이 가라앉을 때까지 반응을 미룬다","suppression"],
    ["\"그런 얘기 들었는데, 무슨 뜻이었어?\"라고 직접 묻는다","suppression"]]},
  {t:"새로운 일에서 실수를 했고, 동료가 지적했다.", o:[
    ["가볍게 받아치듯 말하고 넘긴다","passive_aggressive"],
    ["\"역시 나답다\"며 자조 섞인 농담을 던진다","humor"],
    ["실수를 복기하며 다음엔 더 나은 방식을 찾는다","sublimation"],
    ["지적한 방식이나 타이밍이 부적절했다고 짚는다","intellectualization"]]},
  {t:"스트레스 쌓이는 하루, 퇴근하고 나면?", o:[
    ["짜증을 다른 데(온라인 쇼핑, 배달앱 등)로 풀어낸다","displacement"],
    ["\"오늘은 이런저런 이유로 힘든 날이었다\"고 스스로 정리한다","rationalization"],
    ["운동이나 청소 등으로 에너지를 쏟아낸다","sublimation"],
    ["\"오늘 진짜 별로였다\"며 스스로 웃으며 넘긴다","humor"]]},
  {t:"믿었던 사람에게 실망스러운 일을 겪었다.", o:[
    ["\"그 사람도 원래 그런 스타일이었어\" 하며 정리한다","projection"],
    ["오히려 더 챙겨주고 잘해준다","reaction_formation"],
    ["그 일 자체를 빨리 잊으려 한다","repression"],
    ["감정이 가라앉을 때까지 기다렸다가 차분히 얘기를 꺼낸다","suppression"]]}
];

const MECH_TO_KEY = {
  projection:"mirror", passive_aggressive:"fog", rationalization:"reason",
  intellectualization:"robot", reaction_formation:"switch", displacement:"road",
  repression:"seal", sublimation:"alchemy", humor:"laugh", suppression:"timer"
};
