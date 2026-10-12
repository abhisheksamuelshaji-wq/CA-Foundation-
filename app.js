const days = [
[1,"2026-10-13","Accounting Ch 5 – Depreciation & Amortisation (Part 1)",1],
[2,"2026-10-14","Accounting Ch 5 – Depreciation & Amortisation (Part 2)",1],
[3,"2026-10-15","Accounting Ch 6 – Bills of Exchange & Promissory Notes (Part 1)",1],
[4,"2026-10-16","Accounting Ch 6 – Bills of Exchange & Promissory Notes (Part 2)",1],
[5,"2026-10-17","Math Ch 4 – Mathematics of Finance (Part 1)",1],
[6,"2026-10-18","Math Ch 4 – Mathematics of Finance (Part 2)",1],
[7,"2026-10-19","REST / BUFFER DAY 1",1,true],
[8,"2026-10-20","Business Law Ch 2 – Indian Contract Act, 1872 (Part 1)",1],
[9,"2026-10-21","Business Law Ch 2 – Indian Contract Act, 1872 (Part 2)",1],
[10,"2026-10-22","Stats Ch 13 – Statistical Representation of Data + Math Ch 3 – Linear Inequalities",1],
[11,"2026-10-23","Stats Ch 14 – Measures of Central Tendency & Dispersion (Part 1)",1],
[12,"2026-10-24","Stats Ch 14 – Measures of Central Tendency & Dispersion (Part 2)",1],
[13,"2026-10-25","Accounting Ch 7 – Final Accounts of Sole Proprietors (Part 1)",1],
[14,"2026-10-26","REST / BUFFER DAY 2",1,true],
[15,"2026-10-27","Accounting Ch 7 – Final Accounts of Sole Proprietors (Part 2)",1],
[16,"2026-10-28","Stats Ch 15 – Probability (Part 1)",1],
[17,"2026-10-29","Stats Ch 15 – Probability (Part 2)",1],
[18,"2026-10-30","Business Law Ch 4 – Indian Partnership Act, 1932",1],
[19,"2026-10-31","Math Ch 1 – Ratio, Proportion, Logarithms + Math Ch 2 – Equations",1],
[20,"2026-11-01","Accounting Ch 1 – Theoretical Framework + Accounting Ch 2 – Accounting Process",1],
[21,"2026-11-02","REST / BUFFER DAY 3",1,true],
[22,"2026-11-03","Accounting Ch 8 – NPO Accounts (Part 1)",1],
[23,"2026-11-04","Accounting Ch 8 – NPO Accounts (Part 2)",1],
[24,"2026-11-05","Accounting Ch 9 – Accounts from Incomplete Records (Part 1)",1],
[25,"2026-11-06","Accounting Ch 9 – Accounts from Incomplete Records (Part 2)",1],
[26,"2026-11-07","Econ Ch 2 – Theory of Demand & Supply (Part 1)",1],
[27,"2026-11-08","Econ Ch 2 – Theory of Demand & Supply (Part 2)",1],
[28,"2026-11-09","REST / BUFFER DAY 4",1,true],
[29,"2026-11-10","Accounting Ch 10 – Partnership Accounts (Part 1)",1],
[30,"2026-11-11","Accounting Ch 10 – Partnership Accounts (Part 2)",1],
[31,"2026-11-12","Accounting Ch 3 – BRS + Accounting Ch 4 – Inventories",1],
[32,"2026-11-13","Math Ch 5 – Permutations & Combinations + Math Ch 6 – Sequence & Series",1],
[33,"2026-11-14","Math Ch 7 – Sets & Functions + Math Ch 8 – Calculus Formulas",1],
[34,"2026-11-15","Math Ch 9, 10, 11, 12 – Logical Reasoning (All 4 short chapters)",1],
[35,"2026-11-16","REST / BUFFER DAY 5",1,true],
[36,"2026-11-17","Econ Ch 3 – Production & Cost + Econ Ch 4 – Markets",1],
[37,"2026-11-18","Econ Ch 6 – National Income + Business Law Ch 6 – Companies Act (Basics)",1],
[38,"2026-11-19","Accounting Ch 11 – Company Accounts (Issue of Shares & Debentures)",2],
[39,"2026-11-20","Accounting Ch 11 – Company Accounts (Forfeiture & Reissue)",2],
[40,"2026-11-21","Business Law Ch 1 – Indian Regulatory Framework + Law Ch 5 – LLP Act",2],
[41,"2026-11-22","Business Law Ch 3 – Sale of Goods Act, 1930 (Part 1)",2],
[42,"2026-11-23","Business Law Ch 3 – Sale of Goods Act, 1930 (Part 2)",2],
[43,"2026-11-24","Business Law Ch 7 – Negotiable Instruments Act, 1881",2],
[44,"2026-11-25","REST / BUFFER DAY 6",2,true],
[45,"2026-11-26","Statistics Ch 17 – Correlation & Regression (Part 1)",2],
[46,"2026-11-27","Statistics Ch 17 – Correlation & Regression (Part 2)",2],
[47,"2026-11-28","Statistics Ch 16 – Theoretical Distributions",2],
[48,"2026-11-29","Statistics Ch 18 – Index Numbers",2],
[49,"2026-11-30","Econ Ch 9 – International Trade + Econ Ch 10 – Indian Economy",2],
[50,"2026-12-01","Econ Ch 1, 5, 7, 8 – Nature of Econ, Business Cycles, Public Finance & Money Market",2],
[51,"2026-12-02","REST / FINAL CATCH-UP DAY",2,true],
[52,"2026-12-03","Accounting & Law Revision Test Papers (RTPs)",3],
[53,"2026-12-04","Accounting & Law Revision Test Papers (RTPs)",3],
[54,"2026-12-05","Accounting & Law Revision Test Papers (RTPs)",3],
[55,"2026-12-06","Math, Stats & Econ Formula & MCQ Speed Drills",3],
[56,"2026-12-07","Math, Stats & Econ Formula & MCQ Speed Drills",3],
[57,"2026-12-08","Math, Stats & Econ Formula & MCQ Speed Drills",3],
[58,"2026-12-09","Full-Length Timed Mock Exam 1",3],
[59,"2026-12-10","Full-Length Timed Mock Exam 2",3],
[60,"2026-12-11","Full-Length Timed Mock Exam 3",3],
[61,"2026-12-12","Final light notes glance and rest before exam day",3]
].map(x=>({day:x[0],date:x[1],task:x[2],phase:x[3],buffer:!!x[4]}));
const KEY="ca-foundation-pwa-v1";
let state={};
try{state=JSON.parse(localStorage.getItem(KEY)||"{}")}catch{}
const $=id=>document.getElementById(id);
const todayISO=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`};
const isDone=d=>!!state[d.day]?.done;
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const dateLabel=s=>new Date(s+"T12:00:00").toLocaleDateString(undefined,{weekday:"short",day:"numeric",month:"short"});
function overdue(){return days.filter(d=>!d.buffer&&d.date<todayISO()&&!isDone(d))}
function nextBufferFor(d){return days.find(b=>b.buffer&&b.date>d.date&&b.date>=todayISO())||days.find(b=>b.buffer&&b.date>=todayISO())||null}
function dueQueue(){const grouped={};overdue().forEach(d=>{const b=nextBufferFor(d);if(b)(grouped[b.day] ||= {buffer:b,items:[]}).items.push(d)});return grouped}
function updateStats(){const n=days.filter(isDone).length;$("doneCount").textContent=n;$("leftCount").textContent=61-n;$("pct").textContent=Math.round(n/61*100)+"%";$("bar").style.width=(n/61*100)+"%";$("summary").textContent=n===61?"All 61 days complete — well done!":`${n} of 61 days complete. Pending chapters stay visible until you mark them done.`}
function makeDay(d,queued=false){const el=document.createElement("article");el.className="day"+(isDone(d)?" done":"");
 const top=document.createElement("div");top.className="daytop";const cb=document.createElement("input");cb.type="checkbox";cb.checked=isDone(d);cb.setAttribute("aria-label",`Mark day ${d.day} complete`);cb.addEventListener("change",()=>{state[d.day]={...(state[d.day]||{}),done:cb.checked};save();render()});
 const body=document.createElement("div");body.className="daybody";const title=document.createElement("div");title.className="daytitle";title.textContent=`Day ${d.day} · ${dateLabel(d.date)}`;const task=document.createElement("div");task.className="task";task.textContent=d.task;body.append(title,task);
 const tag=document.createElement("span");tag.className="tag";tag.textContent=isDone(d)?"Done":d.buffer?"Buffer / rest":queued?"Catch-up":"Pending";top.append(cb,body,tag);el.append(top);
 const note=document.createElement("input");note.className="note";note.placeholder="Optional note: test score, doubts, revision…";note.value=state[d.day]?.note||"";note.addEventListener("change",()=>{state[d.day]={...(state[d.day]||{}),note:note.value};save()});el.append(note);return el}
function renderToday(){const box=$("todayPanel");box.innerHTML="";const today=days.find(d=>d.date===todayISO());if(today){box.append(makeDay(today));}else{box.innerHTML='<p class="muted">Today is outside the scheduled dates. You can still work through pending tasks below.</p>'}
 const queue=dueQueue();const entries=Object.values(queue);if(entries.length){const notice=document.createElement("div");notice.className="notice";notice.textContent="Catch-up queue: unfinished study days are assigned to the next available buffer day. Complete them here or in the main list; they will remain pending until checked off.";box.append(notice);
 entries.forEach(({buffer,items})=>{const h=document.createElement("h3");h.className="sectiontitle";h.textContent=`${buffer.task} · ${dateLabel(buffer.date)} (${items.length} pending)`;box.append(h);items.forEach(d=>box.append(makeDay(d,true)))})}
 if(today?.buffer){const pending=overdue();const p=document.createElement("p");p.className="muted";p.textContent=pending.length?`Buffer day: ${pending.length} unfinished study day(s) to catch up on.`:"Buffer day: no earlier missed study days. Rest or revise.";box.append(p)}
}
function render(){updateStats();renderToday();const q=$("search").value.trim().toLowerCase(),phase=$("phase").value,status=$("status").value;const root=$("schedule");root.innerHTML="";
 let list=days.filter(d=>(phase==="all"||String(d.phase)===phase)&&(!q||(`day ${d.day} ${d.task} ${d.date}`).toLowerCase().includes(q))&&(status==="all"||(status==="pending"&&!isDone(d))||(status==="done"&&isDone(d))||(status==="buffer"&&d.buffer)));
 for(let p=1;p<=3;p++){const subset=list.filter(d=>d.phase===p);if(!subset.length)continue;const section=document.createElement("section");section.className="panel";const h=document.createElement("h2");h.textContent=({1:"Phase 1 · Core foundation",2:"Phase 2 · Priority chapters",3:"Phase 3 · Revision & mocks"})[p];section.append(h);subset.forEach(d=>section.append(makeDay(d)));root.append(section)}
 if(!list.length)root.innerHTML='<section class="panel empty">No matching days.</section>'}
["search","phase","status"].forEach(id=>$(id).addEventListener(id==="search"?"input":"change",render));
$("notifyBtn").addEventListener("click",async()=>{if(!("Notification"in window)){alert("This browser does not support notifications. Try Chrome on Android.");return}const result=await Notification.requestPermission();$("notifInfo").textContent=result==="granted"?"Notifications allowed. This page can show reminders while open; reliable closed-app reminders need hosted push notification setup.":"Notification permission was not granted. You can still use the tracker.";if(result==="granted")new Notification("CA Foundation Tracker",{body:"Notifications enabled. Remember to check today's plan."})});
let installPrompt;$("installBtn").hidden=true;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;$("installBtn").hidden=false});$("installBtn").addEventListener("click",async()=>{if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$("installBtn").hidden=true}else alert("In Chrome, open the browser menu and choose 'Install app' or 'Add to Home screen'.")});
$("export").addEventListener("click",()=>{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify({version:1,progress:state},null,2)],{type:"application/json"}));a.download="ca-foundation-progress.json";a.click();URL.revokeObjectURL(a.href)});
$("import").addEventListener("click",()=>$("file").click());$("file").addEventListener("change",async e=>{try{const data=JSON.parse(await e.target.files[0].text());state=data.progress||data;save();render();alert("Backup imported.")}catch{alert("Could not read that backup file.")}e.target.value=""});
$("reset").addEventListener("click",()=>{if(confirm("Reset all saved checkmarks and notes? Export a backup first if needed.")){state={};save();render()}});
if("serviceWorker"in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});
render();
// In-page timer is a convenience only; browsers may suspend it when backgrounded.
function maybeRemind(){if(!("Notification"in window)||Notification.permission!=="granted")return;const now=new Date(),key=`reminded-${todayISO()}`;const last=sessionStorage.getItem(key)||"";const hm=String(now.getHours()).padStart(2,"0")+":"+String(now.getMinutes()).padStart(2,"0");if(hm>="07:00"&&hm<"07:02"&&!last.includes("morning")){new Notification("Today's CA Foundation plan",{body:days.find(d=>d.date===todayISO())?.task||"Review your pending chapters."});sessionStorage.setItem(key,last+"morning")}if(hm>="20:00"&&hm<"20:02"&&!last.includes("evening")){const n=overdue().length;new Notification(n?"CA Foundation: catch-up reminder":"CA Foundation: progress check",{body:n?`${n} unfinished study day(s). Review your next buffer day.`:"Check off today's work and preview tomorrow."});sessionStorage.setItem(key,last+"evening")}}
setInterval(maybeRemind,30000);
