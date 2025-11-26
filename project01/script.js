const quotes = [
  "Success begins at the end of your comfort zone.",
  "Consistency beats talent when talent stops showing up.",
  "Small steps every day lead to big results.",
  "Your only limit is your mindset.",
  "Discipline is choosing what you want most over what you want now.",
  "Failure is not the opposite of success; it's part of success.",
  "Dream big, start small, act now.",
  "What you focus on grows.",
  "Courage is doing it even when you’re scared.",
  "The future depends on what you do today.",
  "If it doesn’t challenge you, it won’t change you.",
  "Don’t wait for the perfect moment; make the moment perfect.",
  "Success is built on daily habits.",
  "Your vibe attracts your tribe.",
  "Do something today that your future self will thank you for.",
  "Growth begins where comfort ends.",
  "Progress, not perfection.",
  "Your dreams are valid. Start now.",
  "Energy flows where attention goes.",
  "A little progress each day adds up to big change.",
  "Winners are not people who never fail but people who never quit.",
  "Work until you no longer have to introduce yourself.",
  "The only bad decision is not making one.",
  "Be the energy you want to attract.",
  "You don’t find motivation, you create it.",
  "Nothing changes if nothing changes.",
  "Every expert was once a beginner.",
  "Stop doubting yourself and work hard.",
  "Your struggle will become your strength.",
  "Good things take time, but great things take effort."
];
 const button=document.querySelector('button');
 const quote=document.querySelector('h1')
 button.addEventListener('click',()=>{
  const index= Math.floor(Math.random()*30); 
  quote.textContent=quotes[index];
 })