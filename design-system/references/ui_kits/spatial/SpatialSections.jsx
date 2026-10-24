const SX=()=>window.BrunoDogWalkerDesignSystem_0597c9;
const SXL='../../assets/logos/',SXP='../../assets/photos/';
function SxToggle({on,set,children}){return <button type="button" className="sx-toggle" aria-pressed={on} onClick={()=>set(!on)}><span className="sx-dot"></span>{children}</button>;}
function SxSec({n,title,lede,children}){const {ScrollReveal}=SX();return <section className="sx-sec" data-screen-label={n}><ScrollReveal><p className="sx-num">{n}</p><h2 className="sx-h2">{title}</h2>{lede&&<p className="sx-lede">{lede}</p>}</ScrollReveal>{children}</section>;}

function SxTokens(){
  const L=[['0','Base · 0px','var(--bdw-warm-cream)','var(--bdw-cocoa)'],['1','Depth 1 · 12px','var(--surface-tint)','var(--bdw-deep-walk)'],['2','Depth 2 · 24px','var(--bdw-white)','var(--bdw-cocoa)'],['3','Depth 3 · 40px','var(--bdw-sunshine)','var(--bdw-cocoa)']];
  const E=[['--shadow-ambient','Resting'],['--shadow-hover','Hover'],['--shadow-pressed','Pressed'],['--elevation-3','Floating / nav']];
  const T=[['--spatial-perspective','1000px'],['--spatial-origin','50% 50%'],['--spatial-tilt','±4°'],['--spatial-lift','6px'],['--spatial-press','3px'],['--spatial-depth-1/2/3','12 / 24 / 40px']];
  return <div className="sx-panel sx-grid" style={{'--min':'320px',alignItems:'center'}}>
    <div className="sx-stack" aria-label="Exploded view of the four depth planes"><div className="sx-stack__rig">
      {L.map(([z,l,bg,fg])=><div key={z} className="sx-stack__l" data-z={z} style={{background:bg,color:fg,boxShadow:z==='0'?'none':'var(--shadow-ambient)',border:'1px solid var(--border-translucent)'}}>{l}</div>)}
    </div></div>
    <div style={{display:'grid',gap:24}}>
      <p className="sx-note">Hover the stack to explode the planes. Decorative layers live on depth 1–3; text and controls stay on the base plane.</p>
      <div className="sx-grid" style={{'--min':'120px',gap:16}}>{E.map(([v,l])=><div key={v} className="sx-elev" style={{boxShadow:`var(${v})`}}><span><b style={{display:'block',font:'900 15px/1.2 var(--font-sans)'}}>{l}</b><span className="sx-code">{v}</span></span></div>)}</div>
      <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:'8px 20px'}}>{T.map(([k,v])=><React.Fragment key={k}><span className="sx-code">{k}</span><span>{v}</span></React.Fragment>)}</div>
    </div></div>;
}
const SX_SERVICES=[
 {k:'Small-group walks',t:'Good company on familiar streets.',d:'Friendly dogs walked together at a relaxed neighborhood pace.',img:'walking-group',pos:'40% 60%'},
 {k:'Private walks',t:'One dog, full attention.',d:'A walk shaped around your dog’s energy, routine and comfort.',img:'park-dog',pos:'50% 35%'},
 {k:'Puppy visits',t:'Little steps first.',d:'Short visits for play, potty breaks and gentle routines.',img:'fluffy-dog',pos:'60% 70%'},
 {k:'Pet care',t:'Attentive care at home.',d:'Feeding, fresh water and company while you’re away.',img:'brown-dog',pos:'35% 20%'}];
function SxServiceCard({s}){
  const {SpatialCard,SpatialLayer,TactileButton,Logo}=SX();
  return <SpatialCard style={{flex:1}}>
    <div style={{position:'relative',aspectRatio:'16/10',overflow:'hidden',background:'var(--surface-tint)'}}><img src={SXP+s.img+'.png'} alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:s.pos,display:'block'}}/></div>
    <SpatialLayer depth={24} style={{position:'absolute',right:16,top:'calc(62.5% * 0 + 16px)'}}><span style={{display:'grid',placeItems:'center',width:52,height:52,borderRadius:'50%',background:'var(--bdw-warm-cream)',boxShadow:'var(--elevation-2)'}}><Logo variant="mascot" width={40} base={SXL}/></span></SpatialLayer>
    <div style={{padding:24,display:'flex',flexDirection:'column',gap:12,flex:1}}>
      <span style={{font:'700 16px/1 var(--font-label)',textTransform:'uppercase',letterSpacing:'.02em'}}>{s.k}</span>
      <h3 style={{margin:0,font:'900 24px/1.2 var(--font-sans)',letterSpacing:'-.02em'}}>{s.t}</h3>
      <p style={{margin:0,fontSize:16,lineHeight:1.6}}>{s.d}</p>
      <div style={{marginTop:'auto',paddingTop:8}}><TactileButton size="sm" variant="secondary" arrow>Ask about this</TactileButton></div>
    </div></SpatialCard>;
}
function SxCards(){
  const {StaggerContainer}=SX();
  return <StaggerContainer className="sx-grid" style={{'--min':'240px',marginTop:32}} itemStyle={{display:'flex'}}>{SX_SERVICES.map(s=><SxServiceCard key={s.k} s={s}/>)}</StaggerContainer>;
}
function SxButtons(){
  const {TactileButton}=SX();const [busy,setBusy]=React.useState(false);
  const run=()=>{setBusy(true);setTimeout(()=>setBusy(false),1800);};
  const states=[['Default',{}],['Hover',{state:'hover'}],['Pressed',{state:'active'}],['Focus',{state:'focus'}],['Disabled',{disabled:true}],['Loading',{loading:true,loadingLabel:'Booking…'}]];
  const V=[['primary','Book a meet & greet'],['secondary','Explore services'],['blue','Let’s meet']];
  return <div style={{display:'grid',gap:24,marginTop:32}}>
    <div className="sx-panel" style={{marginTop:0,overflowX:'auto'}}><table className="sx-mt" style={{minWidth:760}}><thead><tr><th></th>{states.map(([l])=><th key={l}>{l}</th>)}</tr></thead><tbody>
      {V.map(([v,label])=><tr key={v}><td><span className="sx-code">{v}</span></td>{states.map(([l,p])=><td key={l}><TactileButton size="sm" variant={v} {...p} tabIndex={-1}>{l==='Loading'?label.split(' ')[0]:'Go'}</TactileButton></td>)}</tr>)}
    </tbody></table></div>
    <div className="sx-grid" style={{'--min':'320px'}}>
      <div className="sx-panel" style={{marginTop:0,display:'grid',gap:16}}><p className="sx-label">Try it</p>
        <div className="sx-row"><TactileButton arrow loading={busy} loadingLabel="Booking…" onClick={run}>Book a meet & greet</TactileButton><TactileButton variant="secondary">Explore services</TactileButton></div>
        <p className="sx-note">Hover lifts 2px and brightens the sheen. Press travels 3px onto the lip and compresses to 0.985. Tab to see the 3px #004B75 ring; the glow is only added on top.</p></div>
      <div className="sx-panel" style={{marginTop:0,display:'grid',gap:16,background:'var(--bdw-deep-walk)',borderColor:'transparent'}}><p className="sx-label" style={{color:'var(--bdw-warm-cream)'}}>On Deep Walk</p>
        <div className="sx-row"><TactileButton variant="cream" arrow>Let’s meet</TactileButton><TactileButton glow="neon">Neon (experimental)</TactileButton></div>
        <p className="sx-note" style={{color:'var(--bdw-warm-cream)'}}>Neon glow is reserved for exceptional highlights.</p></div>
    </div></div>;
}
function SxNav(){
  const {GlassSurface,TactileButton}=SX();const ref=React.useRef(null);
  return <div ref={ref} className="sx-frame" style={{marginTop:32}}>
    <GlassSurface as="nav" aria-label="Demo" elevateOnScroll scrollTarget={ref} radius={999} padding="8px 8px 8px 12px" style={{position:'sticky',top:12,margin:12,zIndex:2,display:'flex',alignItems:'center',gap:12}}>
      <img src={SXL+'bdw-mascot.png'} alt="" style={{width:36}}/><b style={{font:'900 16px/1 var(--font-sans)'}}>Bruno Dog Walker</b>
      <span style={{marginLeft:'auto',display:'flex',gap:4}}>{['Services','Meet & greet'].map(l=><a key={l} href="#" className="bdw-link" style={{padding:'8px 10px',fontSize:14}} onClick={e=>e.preventDefault()}>{l}</a>)}</span>
      <TactileButton size="sm" arrow>Book</TactileButton>
    </GlassSurface>
    <div className="sx-grid" style={{'--min':'200px',gap:12,padding:'0 12px 12px',marginTop:-68}}>{['park-dog','walking-group','fluffy-dog','brown-dog','park-crew-portrait','park-dog'].map((p,i)=><div key={i} style={{height:220}}><img className="sx-photo" src={SXP+p+'.png'} alt=""/></div>)}</div>
  </div>;
}
function SxMascot(){
  const {AnimatedMascot,FloatingElement,GlassSurface,Logo}=SX();
  const [pointer,setP]=React.useState(true),[amb,setA]=React.useState(true),[glow,setG]=React.useState(true);
  return <div className="sx-panel sx-grid" style={{'--min':'300px',alignItems:'center',gap:40}}>
    <div style={{justifySelf:'center',width:'min(380px,100%)',padding:'16px 0'}}><AnimatedMascot base={SXL} pointer={pointer} ambient={amb} glow={glow}>
      <FloatingElement depth={32} style={{position:'absolute',right:'-6%',bottom:'22%'}}><GlassSurface radius={999} padding="8px 16px 8px 8px" style={{display:'flex',alignItems:'center',gap:8,font:'800 14px/1 var(--font-sans)'}}><Logo variant="mascot" avatar width={30} base={SXL}/>Neighborhood walks</GlassSurface></FloatingElement>
      <FloatingElement depth={20} rotate={-2} style={{position:'absolute',left:'-4%',bottom:'4%'}}><span className="sx-badge" style={{transform:'rotate(-6deg)'}}>MORE THAN A WALK.</span></FloatingElement>
    </AnimatedMascot></div>
    <div style={{display:'grid',gap:16}}>
      <p className="sx-label">What moves</p>
      <ul style={{margin:0,paddingLeft:20,display:'grid',gap:6}}><li>Container floats 8px over 6s and breathes (scale 1.012, 4s)</li><li>Contact shadow shrinks as the mascot rises</li><li>Ring, halo and chips drift independently toward the cursor (×0.6, desktop only)</li><li>Chips float on their own 5–8s loops, out of phase</li><li>Click: one hop</li></ul>
      <p className="sx-note">No head tilt: the mascot is a single flat illustration with no separate head layer, so the artwork itself is never rotated or warped. A layered or 3D mascot would need a new, approved asset.</p>
      <div className="sx-row"><SxToggle on={pointer} set={setP}>Pointer response</SxToggle><SxToggle on={amb} set={setA}>Ambient</SxToggle><SxToggle on={glow} set={setG}>Glow</SxToggle></div>
    </div></div>;
}
Object.assign(window,{SX,SXL,SXP,SxToggle,SxSec,SxTokens,SxCards,SxButtons,SxNav,SxMascot,SX_SERVICES});
