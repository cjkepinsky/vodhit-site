(()=>{
  const year=document.getElementById('copyright-year');if(year)year.textContent=String(new Date().getFullYear());
  const toggle=document.getElementById('menu-toggle'), nav=document.getElementById('main-navigation');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}
  const cfg=window.VODHIT_CONFIG||{},form=document.getElementById('beta-form'),email=document.getElementById('email'),submit=document.getElementById('signup-submit'),status=document.getElementById('form-status'),hosted=document.getElementById('hosted-waitlist');
  const validHttps=(value)=>{if(typeof value!=='string'||!value.trim())return false;try{return new URL(value).protocol==='https:'}catch{return false}};
  if(validHttps(cfg.hostedWaitlistUrl)){
    form.hidden=true;hosted.hidden=false;hosted.href=cfg.hostedWaitlistUrl;
  } else if(validHttps(cfg.formEndpoint)) {
    form.action=cfg.formEndpoint;form.removeAttribute('novalidate');email.disabled=false;submit.disabled=false;submit.innerHTML='Join the beta waitlist <span aria-hidden="true">↗</span>';status.textContent='Your email will be submitted securely to our signup provider.';
    form.addEventListener('submit',(e)=>{if(!email.checkValidity()){e.preventDefault();email.reportValidity();return}status.textContent='Opening secure sign-up…';submit.disabled=true;setTimeout(()=>{submit.disabled=false},3500)})
  }
})();