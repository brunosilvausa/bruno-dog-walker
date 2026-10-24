const PH='../../assets/photos/';
const SERVICES=[
 {k:'Small-group walks',t:'Good company on familiar streets.',d:'Friendly dogs walked together at a relaxed neighborhood pace.',img:'walking-group',pos:'40% 60%'},
 {k:'Private walks',t:'One dog, full attention.',d:'A walk shaped around your dog’s energy, routine and comfort.',img:'park-dog',pos:'50% 35%'},
 {k:'Puppy visits',t:'Little steps first.',d:'Short visits for play, potty breaks and gentle routines.',img:'fluffy-dog',pos:'60% 70%'},
 {k:'Pet care',t:'Attentive care at home.',d:'Feeding, fresh water and company while you’re away.',img:'brown-dog',pos:'35% 20%'}];
const wrap={maxWidth:1280,margin:'0 auto',padding:'0 clamp(20px,5vw,80px)'};
const h2={font:'900 clamp(31px,4vw,40px)/1.1 var(--font-sans)',letterSpacing:'-.03em',margin:'8px 0 0'};
const eyebrow={font:'700 18px/1 var(--font-label)',textTransform:'uppercase',color:'var(--bdw-deep-walk)',margin:0};
function Hero({go}){
  const {Tag,TactileButton,GlassSurface,Spark,Logo,AnimatedMascot,FloatingElement}=window.BrunoDogWalkerDesignSystem_0597c9;
  return <section style={{...wrap,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:48,alignItems:'center',padding:'72px clamp(20px,5vw,80px) 56px'}}>
    <div><Tag size="sm" style={{fontFamily:'var(--font-sans)',textTransform:'none',fontWeight:800,fontSize:14,letterSpacing:0}}>Upper East Side · Manhattan</Tag>
      <h1 style={{font:'900 clamp(46px,6.4vw,80px)/1.02 var(--font-sans)',letterSpacing:'-.035em',margin:'20px 0 0',color:'var(--bdw-cocoa)'}}>Good walks.<br/><span style={{color:'var(--bdw-deep-walk)'}}>Happy dogs.</span></h1>
      <p style={{font:'600 20px/1.5 var(--font-sans)',maxWidth:'34ch',margin:'24px 0 0'}}>Personal dog walking and attentive pet care for the neighborhood we call home.</p>
      <div style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:32}}><TactileButton arrow onClick={()=>go('book')}>Book a meet & greet</TactileButton><TactileButton variant="secondary" onClick={()=>go('services')}>Explore services</TactileButton></div></div>
    <div className="hero-art"><AnimatedMascot base={SITE_LOGOS}>
      <FloatingElement depth={40} amplitude={7} rotate={6} className="hero-float hero-spark"><GlassSurface radius="50%" padding="0" style={{width:64,height:64,display:'grid',placeItems:'center'}}><Spark size={34} glow/></GlassSurface></FloatingElement>
      <FloatingElement depth={28} className="hero-float hero-chip"><GlassSurface radius={999} padding="8px 16px 8px 8px" style={{display:'flex',alignItems:'center',gap:8}}><Logo variant="mascot" avatar width={34} base={SITE_LOGOS}/><span>Neighborhood walks</span></GlassSurface></FloatingElement>
      <FloatingElement depth={16} rotate={-2} className="hero-label-wrap"><span className="hero-label">MORE THAN A WALK.</span></FloatingElement>
    </AnimatedMascot></div></section>;
}
function Banner(){return <div style={{background:'var(--bdw-walk-blue)',color:'var(--bdw-warm-cream)'}}><div style={{...wrap,padding:'18px clamp(20px,5vw,80px)',font:'900 22px/1.2 var(--font-sans)',letterSpacing:'-.02em'}}>Neighborhood walks. Everyday joy.</div></div>;}
function Services({go,compact}){
  const {SpatialCard,SpatialLayer,TactileButton,ScrollReveal,StaggerContainer,Logo}=window.BrunoDogWalkerDesignSystem_0597c9;
  return <section style={{...wrap,marginTop:compact?48:104}}>
    <ScrollReveal><p style={eyebrow}>Services</p><h2 style={h2}>Care shaped around your dog.</h2></ScrollReveal>
    <StaggerContainer stagger={80} itemStyle={{display:'flex'}} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))',gap:24,marginTop:32}}>
      {SERVICES.map(s=><SpatialCard key={s.k} style={{flex:1}}>
        <div style={{aspectRatio:'16/10',overflow:'hidden',background:'var(--surface-tint)'}}><img src={PH+s.img+'.png'} alt="" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:s.pos,display:'block'}}/></div>
        <SpatialLayer depth={24} style={{position:'absolute',right:16,top:16}}><span style={{display:'grid',placeItems:'center',width:52,height:52,borderRadius:'50%',background:'var(--bdw-warm-cream)',boxShadow:'var(--elevation-2)'}}><Logo variant="mascot" width={40} base={SITE_LOGOS}/></span></SpatialLayer>
        <div style={{padding:24,display:'flex',flexDirection:'column',gap:12,flex:1}}>
          <span style={{font:'700 16px/1 var(--font-label)',textTransform:'uppercase',letterSpacing:'.02em'}}>{s.k}</span>
          <h3 style={{margin:0,font:'900 24px/1.2 var(--font-sans)',letterSpacing:'-.02em'}}>{s.t}</h3>
          <p style={{margin:0,fontSize:16,lineHeight:1.6}}>{s.d}</p>
          <div style={{marginTop:'auto',paddingTop:8}}><TactileButton size="sm" variant="secondary" arrow onClick={()=>go('book',s.k)}>Ask about this</TactileButton></div>
        </div></SpatialCard>)}
    </StaggerContainer></section>;
}
const GALLERY=[['park-dog','50% 35%','You said walk. I heard adventure.'],['fluffy-dog','60% 70%','Small paws. Big city.'],['brown-dog','35% 20%','One more sniff stop.'],['walking-group','40% 60%','Every walk has its own rhythm.']];
function Photos(){
  const {ImageTile,ScrollReveal,StaggerContainer,Parallax}=window.BrunoDogWalkerDesignSystem_0597c9;
  return <section style={{...wrap,marginTop:104}}>
    <ScrollReveal style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,flexWrap:'wrap'}}><div><p style={eyebrow}>Walk Diaries / NYC</p><h2 style={h2}>Real dogs. Local stories.</h2></div><p style={{maxWidth:'44ch',margin:0,color:'var(--text-muted)'}}>Every walk has a story. Familiar streets, curious noses and a little more joy along the way.</p></ScrollReveal>
    <StaggerContainer variant="image" stagger={90} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,200px),1fr))',gap:20,marginTop:32}}>{GALLERY.map(([p,pos,c],i)=><Parallax key={p} speed={i%2?0.03:-0.02} max={20}><ImageTile src={PH+p+'.png'} position={pos} alt="" caption={c}/></Parallax>)}</StaggerContainer>
  </section>;
}
function HomePage({go}){
  const {TactileButton,StaggerContainer,ScrollReveal,FloatingElement,Spark}=window.BrunoDogWalkerDesignSystem_0597c9;
  return <main><Hero go={go}/><Banner/><Services go={go}/><Photos/>
    <section style={{...wrap,marginTop:104}}><ScrollReveal variant="scale"><div style={{position:'relative',overflow:'hidden',background:'var(--bdw-deep-walk)',color:'var(--bdw-warm-cream)',borderRadius:24,padding:'clamp(32px,5vw,56px)',boxShadow:'var(--shadow-ambient)'}}>
      <FloatingElement depth={20} rotate={8} style={{position:'absolute',right:'8%',top:'18%'}}><Spark size={36} glow/></FloatingElement>
      <FloatingElement depth={12} amplitude={4} style={{position:'absolute',right:'-40px',bottom:'-60px'}}><span style={{display:'block',width:200,height:200,borderRadius:'50%',background:'var(--bdw-walk-blue)'}}></span></FloatingElement>
      <StaggerContainer stagger={90} style={{position:'relative',display:'grid',gap:14,justifyItems:'start',maxWidth:'34ch'}}>
        <span style={{font:'700 18px/1 var(--font-label)',textTransform:'uppercase'}}>Upper East Side / Manhattan</span>
        <h2 style={{...h2,margin:0}}>Good care starts with a hello.</h2>
        <p style={{margin:0,fontSize:18}}>Meet us and your dog before the first walk.</p>
        <TactileButton arrow onClick={()=>go('book')}>Let’s meet</TactileButton>
      </StaggerContainer></div></ScrollReveal></section></main>;
}
Object.assign(window,{HomePage,Services,SERVICES});
