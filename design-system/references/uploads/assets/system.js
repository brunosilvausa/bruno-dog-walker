(() => {
  const toast = document.querySelector('.toast');
  let timer;
  const notify = message => {if(!toast)return;toast.textContent = message; clearTimeout(timer); timer = setTimeout(() => {toast.textContent = '';}, 3500);};
  const rootStyle = getComputedStyle(document.documentElement);
  const token = name => rootStyle.getPropertyValue(`--primitive-color-${name}`).trim();
  const colors = {brown:token('brown'),cream:token('cream'),blue:token('blue-dark'),yellow:token('yellow')};
  function luminance(hex) {
    const values = hex.match(/[a-f\d]{2}/gi).map(v => parseInt(v, 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
    return values[0] * .2126 + values[1] * .7152 + values[2] * .0722;
  }
  [['Marrom / creme',colors.brown,colors.cream],['Azul escuro / creme',colors.blue,colors.cream],['Marrom / amarelo',colors.brown,colors.yellow],['Amarelo / azul escuro',colors.yellow,colors.blue]].forEach(([name,fg,bg]) => {
    const ratio = (Math.max(luminance(fg),luminance(bg))+.05)/(Math.min(luminance(fg),luminance(bg))+.05);
    const el = document.createElement('div');el.className = 'contrast-pair';
    const specimen = document.createElement('b');specimen.textContent = 'Aa';specimen.style.color=fg;specimen.style.background=bg;specimen.style.padding='4px 8px';
    const label = document.createElement('span');label.textContent = `${name} · ${ratio.toFixed(2)}:1`;
    el.append(specimen,label);document.querySelector('#contrast-pairs')?.append(el);
  });
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click',async () => {
    try {await navigator.clipboard.writeText(button.dataset.copy);notify(`Cor copiada: ${button.dataset.copy}`);} catch {notify(`Código da cor: ${button.dataset.copy}`);}
  }));
  const studio = document.querySelector('#studio');
  const cream = document.querySelector('#cream-theme');const blue = document.querySelector('#blue-theme');
  function theme(isBlue) {studio?.classList.toggle('theme-cream',!isBlue);cream?.setAttribute('aria-pressed',String(!isBlue));blue?.setAttribute('aria-pressed',String(isBlue));}
  cream?.addEventListener('click',() => theme(false));blue?.addEventListener('click',() => theme(true));
  function fitHeadline(element) {
    if(!element?.isConnected)return false;
    const width=element.closest('.piece').clientWidth;
    if(!width)return true;
    element.style.overflowWrap='normal';element.style.wordBreak='normal';
    const minimum=width*.060, maximum=width*.084;
    for(let size=maximum;size>=minimum;size=Math.max(minimum,size-width*.001)){
      element.style.fontSize=`${size}px`;
      const line=parseFloat(getComputedStyle(element).lineHeight);
      if(element.scrollWidth<=element.clientWidth+1 && element.getBoundingClientRect().height<=line*2+1)return true;
      if(size===minimum)break;
    }
    return false;
  }
  window.BDW={fitHeadline};
  const title=document.querySelector('#live-headline'),field=document.querySelector('#headline'),status=document.querySelector('#headline-status');
  let accepted='Little walks. Big joy.';
  function updateTitle(){
    if(!title)return;
    const draft=field?.value.trim() ?? accepted;
    title.textContent=draft;
    const valid=!!draft && fitHeadline(title);
    field?.setAttribute('aria-invalid',String(!valid));
    if(valid){accepted=draft;if(status)status.textContent='';}
    else{title.textContent=accepted;fitHeadline(title);if(status)status.textContent='Encurte o título para duas linhas, sem dividir palavras. A prévia mantém o último título válido.';}
  }
  document.fonts.ready.then(updateTitle);
  if(title)new ResizeObserver(updateTitle).observe(title.closest('.piece'));
  field?.addEventListener('input',updateTitle);
  document.querySelector('#headline-reset')?.addEventListener('click',()=>{field.value='Little walks. Big joy.';updateTitle();field.focus();});
  document.querySelectorAll('.mobile-index a').forEach(a=>a.addEventListener('click',()=>{a.closest('details').open=false;}));
  document.querySelector('#board-zoom')?.addEventListener('click',e=>{
    const expanded=document.body.classList.toggle('is-zoomed');
    e.currentTarget.setAttribute('aria-expanded',String(expanded));
    e.currentTarget.textContent=expanded?'Ver painel inteiro':'Ampliar painel';
    document.querySelector('#board-help').textContent=expanded?'Painel ampliado. Deslize na horizontal ou use as setas após focar no painel.':'Painel completo. Amplie para consultar os detalhes e deslize na horizontal.';
  });
  document.querySelector('#safe-check')?.addEventListener('change',e => studio.classList.toggle('show-safe',e.target.checked));
  const photoChoices = {
    dark:{file:'park-dog.jpg',alt:'Cão de pelo preto e branco no parque',focus:[.52,.43]},
    brown:{file:'brown-dog.jpg',alt:'Cão marrom e branco junto à vegetação',focus:[.30,.23]},
    light:{file:'fluffy-dog.jpg',alt:'Cão de pelo claro durante uma pausa no passeio',focus:[.76,.69]},
    golden:{file:'golden-dog.jpg',alt:'Cão dourado olhando para trás durante passeio',focus:[.79,.39]},
    crew:{file:'park-crew.jpg',alt:'Dois cães passeando juntos no parque',focus:[.5,.44]},
    street:{file:'walking-group.jpg',alt:'Passeador e cães caminhando em grupo em uma via do parque',focus:[.48,.46]}
  };
  function focusPhoto(img) {
    const chosen=photoChoices[img.dataset.selectedPhoto];if(!chosen||!img.naturalWidth)return;
    const width=img.clientWidth,height=img.clientHeight;
    const scale=Math.max(width/img.naturalWidth,height/img.naturalHeight);
    const rendered=[img.naturalWidth*scale,img.naturalHeight*scale];
    const percent=rendered.map((total,i)=>{const size=i===0?width:height;const overflow=total-size;return overflow>0?Math.max(0,Math.min(100,(chosen.focus[i]*total-size*.5)/overflow*100)):50;});
    img.style.objectPosition=`${percent[0]}% ${percent[1]}%`;
  }
  const photos=[...document.querySelectorAll('[data-test-photo]')];
  photos.forEach(img=>{img.addEventListener('load',()=>focusPhoto(img));new ResizeObserver(()=>focusPhoto(img)).observe(img);});
  document.querySelector('#photo-test')?.addEventListener('change',e=>{
    photos.forEach(img=>{
      const original=e.target.value==='original';const key=original?img.dataset.original:e.target.value;const choice=photoChoices[key];
      if(original){delete img.dataset.selectedPhoto;img.style.removeProperty('object-position');}else img.dataset.selectedPhoto=key;
      img.src=`assets/photos/${choice.file}`;img.alt=choice.alt;focusPhoto(img);
    });
    notify(e.target.value==='original'?'Fotos originais dos layouts restauradas.':'Foto de teste aplicada. Confira o rosto no enquadramento.');
  });
  document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click',() => notify(button.dataset.demo)));
  document.querySelector('#demo-form')?.addEventListener('submit',e => {
    e.preventDefault();const input = document.querySelector('#demo-email');const valid = input.value.trim() !== '' && input.validity.valid;
    input.setAttribute('aria-invalid',String(!valid));const help = document.querySelector('#email-help');help.classList.toggle('error',!valid);
    help.textContent = valid ? 'Formato válido. Demonstração concluída.' : 'Informe um e-mail válido, por exemplo you@example.com.';
    const status = document.querySelector('#demo-status');status.textContent = valid ? 'Tudo certo. Nenhum dado foi enviado.' : 'Revise o campo indicado.';status.style.color = valid ? 'var(--semantic-color-success)' : 'var(--semantic-color-error)';
    if(!valid)input.focus();
  });
})();
