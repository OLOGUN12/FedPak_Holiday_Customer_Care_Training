function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6IZCoAtgf42":
        Script1();
        break;
      case "6rCXWpH3NtT":
        Script2();
        break;
      case "63tHBbUE8JV":
        Script3();
        break;
      case "5k5H14YBPQ4":
        Script4();
        break;
      case "5loC26VDgBG":
        Script5();
        break;
      case "61Cmqo8bkEK":
        Script6();
        break;
      case "6PotvhT1ALa":
        Script7();
        break;
      case "6oKqbThrG3f":
        Script8();
        break;
      case "6ClD1VrBym1":
        Script9();
        break;
      case "6J6sAhkUR28":
        Script10();
        break;
      case "6fqRa6rm1Xe":
        Script11();
        break;
      case "6QhZCd9W37f":
        Script12();
        break;
      case "5ztXBecQ1F4":
        Script13();
        break;
      case "6ZRA0pc8SgX":
        Script14();
        break;
      case "5ocLqVwuFG5":
        Script15();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6rhN9q1jEqC');
const duration = 24000;
const easing = 'ease-out';
const id = '61JdoRWuwxt';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5X0AaGHYGhd');
const duration = 30000;
const easing = 'ease-out';
const id = '5ivCvDZaeiP';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('6g0wQpGXt2W');
const duration = 2000;
const easing = 'ease-out';
const id = '6XCLpzVkQLh';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6jSfbF851Kr');
const duration = 750;
const easing = 'ease-out';
const id = '5qaoQsanAIr';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6dFgFcHATr3');
const duration = 750;
const easing = 'ease-out';
const id = '5qaoQsanAIr';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5oepg5SygUG');
const duration = 750;
const easing = 'ease-out';
const id = '5qaoQsanAIr';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('62CxYu9L6Bj');
const duration = 750;
const easing = 'ease-out';
const id = '5qaoQsanAIr';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5b1GdCuMWwC');
const duration = 2000;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6QqicQ6BQRw';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('5aEnUKsecsY');
const duration = 2000;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6QqicQ6BQRw';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6lw8awOIpgZ');
const duration = 2000;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6QqicQ6BQRw';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5khh0tPPb0e');
const duration = 2000;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6QqicQ6BQRw';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6p2mE1uN8XY');
const duration = 2000;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6QqicQ6BQRw';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  player.once(() => {
const target = object('6ISCmoUd0HL');
const duration = 2000;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6QqicQ6BQRw';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6ODhMpqLcPi');
const duration = 2000;
const easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
const id = '6QqicQ6BQRw';
const growAmount = 1.2;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.elastic(growAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6krGQWX1Ikf');
const duration = 750;
const easing = 'ease-out';
const id = '5cq7PFwUB8H';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
