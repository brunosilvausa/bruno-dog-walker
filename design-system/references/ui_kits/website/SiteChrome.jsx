const L='../../assets/logos/';
function SiteHeader({page,go}){
  const {TactileButton,GlassSurface}=window.BrunoDogWalkerDesignSystem_0597c9;
  const link=(id,label)=><a href="#" className={'site-link'+(page===id?' is-active':'')} aria-current={page===id?'page':undefined} onClick={e=>{e.preventDefault();go(id);}}>{label}</a>;
  return <GlassSurface as="header" className="site-header" elevateOnScroll radius={0} padding="0">
    <div style={{maxWidth:1280,margin:'0 auto',padding:'10px clamp(20px,5vw,80px)',display:'flex',alignItems:'center',gap:32}}>
      <a href="#" className="site-brand" onClick={e=>{e.preventDefault();go('home');}}><img src={L+'bdw-mascot.png'} alt="" style={{width:44}}/><span style={{font:'900 18px/1 var(--font-sans)',letterSpacing:'-.02em'}}>Bruno Dog Walker<small style={{display:'block',font:'600 12px/1.4 var(--font-sans)',color:'var(--text-muted)'}}>Upper East Side · NYC</small></span></a>
      <nav aria-label="Main" style={{display:'flex',gap:6,marginLeft:'auto',flexWrap:'wrap'}}>{link('home','Home')}{link('services','Services')}{link('book','Meet & greet')}</nav>
      <TactileButton size="sm" arrow onClick={()=>go('book')}>Book</TactileButton>
    </div></GlassSurface>;
}
function SiteFooter({go}){
  const f=(id,l)=><a href="#" className="foot-link" onClick={e=>{e.preventDefault();go(id)}}>{l}</a>;
  return <footer style={{background:'var(--bdw-cocoa)',color:'var(--bdw-warm-cream)',marginTop:112}}>
    <div style={{maxWidth:1280,margin:'0 auto',padding:'56px clamp(20px,5vw,80px) 32px'}}>
      <div style={{display:'flex',flexWrap:'wrap',gap:32,alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',gap:16,alignItems:'center'}}><span style={{width:64,height:64,borderRadius:'50%',background:'var(--bdw-walk-blue)',display:'grid',placeItems:'center',boxShadow:'0 0 0 4px rgba(255,249,234,.08)'}}><img src={L+'bdw-mascot.png'} alt="" style={{width:'78%'}}/></span><div><b style={{font:'900 20px/1.2 var(--font-sans)'}}>Bruno Dog Walker</b><br/><span style={{fontSize:14}}>Dog walking & pet care · Upper East Side, Manhattan</span></div></div>
        <nav aria-label="Footer" style={{display:'flex',gap:8,flexWrap:'wrap'}}>{f('services','Services')}{f('book','Meet & greet')}<span className="foot-link" style={{cursor:'default'}}>@brunodogwalkernyc</span></nav>
      </div>
      <div style={{borderTop:'1px solid rgba(255,249,234,.14)',marginTop:32,paddingTop:20,fontSize:13,color:'rgba(255,249,234,.82)'}}>Neighborhood walks. Everyday joy.</div>
    </div></footer>;
}
Object.assign(window,{SiteHeader,SiteFooter,SITE_LOGOS:L});
