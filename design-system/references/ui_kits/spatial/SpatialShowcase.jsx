function SxReveal(){
  const {StaggerContainer,ScrollReveal,ImageTile,TactileButton,Card}=SX();const [k,setK]=React.useState(0);
  return <div key={k} style={{display:'grid',gap:32,marginTop:32}}>
    <div><p className="sx-label" style={{marginBottom:12}}>Services · stagger 80ms, rise 16px</p>
      <StaggerContainer className="sx-grid" style={{'--min':'200px',gap:16}} itemStyle={{display:'flex'}}>{SX_SERVICES.map(s=><Card key={s.k} style={{flex:1}} eyebrow={s.k} title={s.t}/>)}</StaggerContainer></div>
    <div><p className="sx-label" style={{marginBottom:12}}>Gallery · unmask + 1.05 → 1 settle</p>
      <StaggerContainer variant="image" stagger={90} className="sx-grid" style={{'--min':'180px',gap:16}}>{[['park-dog','50% 35%','You said walk. I heard adventure.'],['fluffy-dog','60% 70%','Small paws. Big city.'],['brown-dog','35% 20%','One more sniff stop.'],['walking-group','40% 60%','Every walk has its own rhythm.']].map(([p,pos,c])=><ImageTile key={p} src={SXP+p+'.png'} position={pos} ratio="4/5" alt="" caption={c}/>)}</StaggerContainer></div>
    <div><p className="sx-label" style={{marginBottom:12}}>CTA · eyebrow, title, text, then action</p>
      <div style={{background:'var(--bdw-deep-walk)',color:'var(--bdw-warm-cream)',borderRadius:24,padding:'clamp(28px,5vw,48px)'}}>
        <StaggerContainer stagger={90} style={{display:'grid',gap:14,justifyItems:'start'}}>
          <span style={{font:'700 18px/1 var(--font-label)',textTransform:'uppercase'}}>Upper East Side / Manhattan</span>
          <h3 style={{margin:0,font:'900 clamp(30px,4vw,44px)/1.05 var(--font-sans)',letterSpacing:'-.03em'}}>Good care starts with a hello.</h3>
          <p style={{margin:0,fontSize:18}}>Meet us and your dog before the first walk.</p>
          <TactileButton variant="cream" arrow>Let’s meet</TactileButton>
        </StaggerContainer></div></div>
    <div><TactileButton size="sm" variant="secondary" onClick={()=>setK(k+1)}>Replay reveals</TactileButton></div>
  </div>;
}
function SxPaw(){const c=(l,t,w,h)=><i style={{left:l,top:t,width:w,height:h}}></i>;return <span className="sx-paw" aria-hidden="true">{c('8%','0%','22%','28%')}{c('39%','-6%','22%','28%')}{c('70%','0%','22%','28%')}{c('22%','38%','56%','52%')}</span>;}
function SxDecor(){
  const {FloatingElement,Spark,Logo,AmbientGlow}=SX();
  return <div className="sx-decor" style={{marginTop:32}}>
    <div style={{padding:'clamp(28px,5vw,48px)',color:'var(--bdw-warm-cream)',display:'grid',alignContent:'center',gap:12,position:'relative',zIndex:2}}>
      <span style={{font:'700 18px/1 var(--font-label)',textTransform:'uppercase'}}>Reading zone</span>
      <h3 style={{margin:0,font:'900 clamp(30px,4vw,44px)/1.05 var(--font-sans)',letterSpacing:'-.03em'}}>Neighborhood walks. Everyday joy.</h3>
      <p style={{margin:0,maxWidth:'36ch'}}>Text keeps still. Decoration stays in the right half, each piece on its own 5–8s loop and depth.</p>
    </div>
    <div style={{position:'relative',minHeight:360}} aria-hidden="true">
      <AmbientGlow size={360} intensity={.9} pulse style={{left:'10%',top:'0%'}}/>
      <FloatingElement depth={12} style={{position:'absolute',left:'8%',top:'12%'}}><span className="sx-circle" style={{width:120,height:120,background:'var(--bdw-deep-walk)'}}></span></FloatingElement>
      <FloatingElement depth={20} amplitude={5} style={{position:'absolute',right:'10%',top:'58%'}}><span className="sx-circle" style={{width:64,height:64,border:'3px solid var(--bdw-warm-cream)'}}></span></FloatingElement>
      <FloatingElement depth={40} amplitude={8} rotate={8} style={{position:'absolute',left:'56%',top:'14%'}}><Spark size={40} glow/></FloatingElement>
      <FloatingElement depth={28} rotate={-10} style={{position:'absolute',left:'14%',bottom:'14%'}}><SxPaw/></FloatingElement>
      <FloatingElement depth={32} rotate={-3} style={{position:'absolute',left:'30%',top:'46%'}}><span className="sx-badge" style={{transform:'rotate(-6deg)'}}>WALK DIARIES / NYC</span></FloatingElement>
      <FloatingElement depth={16} style={{position:'absolute',right:'14%',top:'10%'}}><span style={{display:'grid',placeItems:'center',width:72,height:72,borderRadius:'50%',background:'var(--bdw-warm-cream)',boxShadow:'var(--elevation-2)'}}><Logo variant="mascot" width={54} base={SXL}/></span></FloatingElement>
    </div></div>;
}
function SxLight(){
  const {SpatialCard,TactileButton,AmbientGlow}=SX();const ref=React.useRef(null);
  const mv=e=>{if(e.pointerType!=='mouse')return;const r=ref.current.getBoundingClientRect();ref.current.style.setProperty('--lx',((e.clientX-r.left)/r.width).toFixed(3));ref.current.style.setProperty('--ly',((e.clientY-r.top)/r.height).toFixed(3));};
  const {Logo}=SX();
  return <div className="sx-grid" style={{'--min':'320px',marginTop:32}}>
    <div ref={ref} className="sx-light" onPointerMove={mv}><div className="sx-light__src"></div>
      <div className="sx-light__obj"><div style={{display:'grid',placeItems:'center'}}><Logo variant="mascot" avatar width={64} base={SXL}/></div><b style={{display:'block',marginTop:12,font:'900 18px/1.2 var(--font-sans)'}}>Key light</b><span className="sx-note">Move the cursor to move the light.</span></div></div>
    <div style={{display:'grid',gap:16}}>
      <SpatialCard state="hover" style={{padding:0}}><div style={{padding:24,display:'grid',gap:8}}><p className="sx-label">Directional highlight + rim</p><b style={{font:'900 20px/1.2 var(--font-sans)'}}>Hover me for live light.</b><span className="sx-note">Highlight and border illumination scale with Glow intensity.</span></div></SpatialCard>
      <div className="sx-panel" style={{marginTop:0,display:'grid',gap:12}}><p className="sx-label">Hover glow</p><div className="sx-row"><TactileButton size="sm">Warm</TactileButton><TactileButton size="sm" glow="neon">Neon</TactileButton><TactileButton size="sm" glow="none">None</TactileButton></div></div>
      <div style={{position:'relative',height:120,borderRadius:24,background:'var(--bdw-cocoa)',overflow:'hidden'}}><AmbientGlow size={200} style={{left:'4%',top:'-40%'}}/><AmbientGlow size={200} tone="blue" intensity={1.4} style={{left:'36%',top:'-40%'}}/><AmbientGlow size={200} tone="neon" style={{left:'68%',top:'-40%'}}/>
        <div style={{position:'absolute',inset:'auto 0 12px',display:'flex',justifyContent:'space-around',font:'700 14px/1 var(--font-label)',textTransform:'uppercase',color:'var(--bdw-warm-cream)'}}><span>Warm</span><span>Blue</span><span>Neon · rare</span></div></div>
    </div></div>;
}
const SX_MT=[['--motion-micro','150ms','Color, press, toggles','var(--motion-micro)','var(--ease-default)'],['--motion-fast','200ms','Button travel','var(--motion-fast)','var(--ease-spring-physical)'],['--motion-standard','250ms','Hover, shadow, glow','var(--motion-standard)','var(--ease-default)'],['--motion-reveal','550ms','Scroll entrances','var(--motion-reveal)','var(--ease-default)'],['--motion-reset','700ms','Tilt spring back','var(--motion-reset)','var(--ease-spring-physical)'],['--motion-ambient-min / max','5–8s','Float, glow pulse','1.6s','cubic-bezier(.45,0,.55,1)'],['--ease-default','cubic-bezier(0.22,1,0.36,1)','Everything that settles','var(--motion-reveal)','var(--ease-default)'],['--ease-spring-physical','linear() spring · cubic fallback','Physical travel and returns','var(--motion-reset)','var(--ease-spring-physical)']];
function SxMotion(){
  const [play,setPlay]=React.useState(false);const {TactileButton}=SX();
  return <div className="sx-panel" style={{overflowX:'auto'}}>
    <div className="sx-row" style={{marginBottom:16}}><TactileButton size="sm" variant="blue" onClick={()=>setPlay(p=>!p)}>{play?'Return':'Play all'}</TactileButton><span className="sx-note">Durations follow the Duration control in the dock.</span></div>
    <table className="sx-mt" data-play={String(play)} style={{minWidth:680}}><thead><tr><th>Token</th><th>Value</th><th>Use</th><th>Demo</th></tr></thead><tbody>
      {SX_MT.map(([t,v,u,d,e])=><tr key={t}><td><span className="sx-code">{t}</span></td><td>{v}</td><td>{u}</td><td><div className="sx-track"><span className="sx-ball" style={{transition:'transform '+d+' '+e}}></span></div></td></tr>)}
    </tbody></table></div>;
}
const SX_RM=[['SpatialCard','No tilt, lift or layer drift. Shadow, rim and border still mark hover.'],['TactileButton','Colour, sheen and glow change; no travel or compression.'],['AnimatedMascot','Still, centred; no float, breathe, drift or hop.'],['FloatingElement / AmbientGlow','Loops stop; elements rest in place.'],['ScrollReveal / StaggerContainer','Content shown at once, no fade.'],['GlassSurface','Unchanged: no motion to remove.'],['Focus','Always the 3px #004B75 ring (Sunshine on Cocoa).'],['Touch','Cursor tilt and drift are off; cards use a 0.985 press instead.']];
const SX_DEF={tilt:4,lift:6,glow:1,scale:1,rm:false};
function SxDock({v,set}){
  const {GlassSurface}=SX();const [open,setOpen]=React.useState(true);
  const R=(k,l,min,max,step,fmt)=><div className="sx-ctl"><label htmlFor={'sx-'+k}><span>{l}</span><span>{fmt(v[k])}</span></label><input id={'sx-'+k} className="sx-range" type="range" min={min} max={max} step={step} value={v[k]} onChange={e=>set({...v,[k]:+e.target.value})}/></div>;
  return <div className="sx-dock"><GlassSurface radius={20} padding="14px 16px" style={{display:'grid',gap:14}}>
    <div style={{display:'flex',alignItems:'center',gap:8}}><b style={{font:'900 15px/1 var(--font-sans)'}}>Controls</b><button type="button" className="bdw-link" style={{marginLeft:'auto',border:0,background:'none',cursor:'pointer',font:'800 13px/1 var(--font-sans)'}} onClick={()=>set(SX_DEF)}>Reset</button><button type="button" className="bdw-link" aria-expanded={open} style={{border:0,background:'none',cursor:'pointer',font:'800 13px/1 var(--font-sans)'}} onClick={()=>setOpen(!open)}>{open?'Hide':'Show'}</button></div>
    {open&&<>{R('tilt','Tilt',0,4,.5,x=>'±'+x+'°')}{R('lift','Hover elevation',0,8,1,x=>x+'px')}{R('glow','Glow intensity',0,1.5,.1,x=>Math.round(x*100)+'%')}{R('scale','Animation duration',.5,2,.25,x=>'×'+x)}
      <SxToggle on={v.rm} set={b=>set({...v,rm:b})}>Reduced motion</SxToggle></>}
  </GlassSurface></div>;
}
function SpatialShowcase(){
  const {GlassSurface,Logo,AnimatedMascot,FloatingElement}=SX();
  const [v,setV]=React.useState(()=>{try{return {...SX_DEF,...JSON.parse(localStorage.getItem('bdw-sx')||'{}')};}catch(e){return SX_DEF;}});
  React.useEffect(()=>{const r=document.documentElement;r.style.setProperty('--spatial-tilt',v.tilt+'deg');r.style.setProperty('--spatial-lift',v.lift+'px');r.style.setProperty('--glow-intensity',v.glow);r.style.setProperty('--motion-scale',v.scale);r.toggleAttribute('data-reduce-motion',v.rm);localStorage.setItem('bdw-sx',JSON.stringify(v));},[v]);
  const os=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return <div>
    <GlassSurface as="header" elevateOnScroll radius={0} padding="0" style={{position:'sticky',top:0,zIndex:30,borderWidth:'0 0 1px'}}><div className="sx-wrap" style={{display:'flex',alignItems:'center',gap:14,paddingTop:10,paddingBottom:10}}>
      <Logo variant="mascot" width={40} base={SXL}/><b style={{font:'900 17px/1.1 var(--font-sans)'}}>Spatial system<small style={{display:'block',font:'600 12px/1.4 var(--font-sans)',color:'var(--text-muted)'}}>Bruno Dog Walker · v3 Stage A · for review</small></b></div></GlassSurface>
    <main className="sx-wrap" style={{paddingBottom:160}}>
      <section style={{padding:'64px 0 0',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,320px),1fr))',gap:40,alignItems:'center'}}>
        <div><p className="sx-num">Warm · Playful · Dimensional · Tactile · Alive</p><h1 style={{font:'900 clamp(44px,6vw,72px)/1.02 var(--font-sans)',letterSpacing:'-.035em',margin:'16px 0 0'}}>Alive,<br/><span style={{color:'var(--bdw-deep-walk)'}}>not animated.</span></h1>
          <p style={{font:'600 19px/1.5 var(--font-sans)',maxWidth:'42ch',margin:'20px 0 0'}}>The spatial tokens and motion primitives for Bruno Dog Walker. Use the controls in the corner to adjust tilt, elevation, glow and timing across the whole page.</p>
          {os&&<p className="sx-note" style={{marginTop:12}}>Your system requests reduced motion, so movement is off.</p>}</div>
        <div style={{justifySelf:'center',width:'min(300px,80%)'}}><AnimatedMascot base={SXL} glow></AnimatedMascot></div>
      </section>
      <SxSec n="01 / Spatial tokens" title="Depth and elevation." lede="One perspective (1000px), four depth planes, and three shadow states. Everything warm and Cocoa-tinted."><SxTokens/></SxSec>
      <SxSec n="02 / SpatialCard" title="Interactive 3D service cards." lede="Up to 4° tilt toward the cursor, 6px lift, a shadow cast away from it, a directional highlight and a warm illuminated rim. The mascot badge sits on its own depth plane. Springs back on leave."><SxCards/></SxSec>
      <SxSec n="03 / TactileButton" title="Tactile buttons." lede="A visible 3px lip gives the button something to press into."><SxButtons/></SxSec>
      <SxSec n="04 / GlassSurface" title="Floating glass navigation." lede="Scroll inside the frame. Warm cream at 80%, 14px blur, a top sheen. On scroll it becomes more opaque and gains elevation; it never moves."><SxNav/></SxSec>
      <SxSec n="05 / AnimatedMascot" title="Hero mascot motion."><SxMascot/></SxSec>
      <SxSec n="06 / ScrollReveal · StaggerContainer" title="Narrative scroll reveals." lede="One shared observer, once per element, transform and opacity only."><SxReveal/></SxSec>
      <SxSec n="07 / FloatingElement" title="Ambient decoration." lede="Soft circles, one ✦, a paw accent, badges and the mascot avatar. Never synchronised, never in the reading zone, paused off-screen."><SxDecor/><p className="sx-note" style={{marginTop:12}}>The paw accent is a new CSS shape, not an original brand asset. It needs approval before Stage B.</p></SxSec>
      <SxSec n="08 / Light & AmbientGlow" title="Dynamic lighting and glow." lede="Warm is the brand light. Neon is experimental and reserved for exceptional highlights."><SxLight/></SxSec>
      <SxSec n="09 / Motion tokens" title="Duration and easing."><SxMotion/></SxSec>
      <SxSec n="10 / Accessibility" title="Reduced-motion alternatives." lede="Toggle Reduced motion in the controls. The OS setting applies the same rules automatically."><ul className="sx-rm">{SX_RM.map(([a,b])=><li key={a}><b>{a}</b><span>{b}</span></li>)}</ul></SxSec>
    </main>
    <SxDock v={v} set={setV}/>
  </div>;
}
window.SpatialShowcase=SpatialShowcase;
