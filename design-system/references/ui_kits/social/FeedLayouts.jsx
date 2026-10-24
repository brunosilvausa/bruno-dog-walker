const T=(fs)=>({margin:0,font:'900 '+fs+'/1.0 var(--font-sans)',letterSpacing:'-0.035em'});
function FeedEditorial({theme,photo='dark',safe}){
  const blue=theme==='blue';
  return <Piece ratio="1080/1350" bg={blue?'var(--bdw-walk-blue)':'var(--bdw-warm-cream)'} safe={safe}>
    <Photo id={photo} style={{left:0,right:0,top:'25%',height:'53%',width:'100%'}}/>
    <svg viewBox="0 0 400 60" preserveAspectRatio="none" style={{position:'absolute',left:0,top:'22%',width:'100%',height:'8%'}}><path d="M0 0H400V10C260 60 150 5 0 40Z" fill={blue?'#008BD2':'#FFF9EA'} transform="scale(1,-1) translate(0,-60)"/><path d="M0 20C150 55 260 0 400 50" fill="none" stroke="#FFD233" strokeWidth="5" vectorEffect="non-scaling-stroke"/></svg>
    <div style={{position:'absolute',left:'7%',top:'6%',right:'6%'}}><Lbl>Walk Diaries / NYC</Lbl><h3 style={{...T('9cqw'),marginTop:'3cqw',color:blue?'var(--bdw-warm-cream)':'var(--bdw-cocoa)'}}>You said walk.<br/>I heard <Hi>adventure.</Hi></h3></div>
    <div style={{position:'absolute',left:0,right:0,top:'78%',height:'1.2cqw',background:'var(--bdw-sunshine)'}}/>
    <div style={{position:'absolute',left:0,right:0,bottom:0,top:'79.2%',background:'#fff',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 7%'}}><img src={LOGOS+'bdw-primary.png'} alt="Bruno Dog Walker" style={{width:'12%'}}/><span style={{textAlign:'right',font:'800 3.2cqw/1.3 var(--font-sans)',color:'var(--bdw-deep-walk)'}}>UPPER EAST SIDE<br/>@brunodogwalkernyc</span></div>
  </Piece>;
}
function FeedDiagonal({theme,photo='brown',safe}){
  const fill=theme==='blue'?'#008BD2':'#FFF9EA',ink=theme==='blue'?'var(--bdw-warm-cream)':'var(--bdw-cocoa)';
  return <Piece ratio="1080/1350" bg="#333" safe={safe}>
    <Photo id={photo} style={{inset:0,width:'100%',height:'100%'}}/>
    <Lbl style={{position:'absolute',right:'5%',top:'5%'}}>Small Moments / NYC</Lbl>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position:'absolute',left:0,bottom:0,width:'100%',height:'38%'}}><path d="M0 18 L100 0 V100 H0Z" fill={fill}/><path d="M0 16 L100 -2" stroke="#FFD233" strokeWidth="2.4" vectorEffect="non-scaling-stroke" style={{strokeWidth:'1.2cqw'}}/></svg>
    <div style={{position:'absolute',left:'7%',bottom:'5%'}}><h3 style={{...T('9cqw'),color:ink}}>One more<br/><Hi>sniff stop.</Hi></h3><span style={{display:'inline-block',marginTop:'2.4cqw',background:'#fff',color:'var(--bdw-cocoa)',borderRadius:999,padding:'.3em .8em',font:'800 2.8cqw/1 var(--font-sans)'}}>@brunodogwalkernyc</span></div>
    <img src={LOGOS+'bdw-primary.png'} alt="Bruno Dog Walker" style={{position:'absolute',right:'6%',bottom:'6%',width:'16%'}}/>
  </Piece>;
}
function FeedJournal({photo='crew',safe}){
  return <Piece ratio="1080/1350" bg="var(--bdw-warm-cream)" safe={safe}>
    <div style={{position:'absolute',left:'6%',right:'6%',top:'4.5%',display:'flex',justifyContent:'space-between',font:'700 2.8cqw/1 var(--font-label)',color:'var(--bdw-deep-walk)'}}><span>WALK DIARIES / NYC</span><span>01 / TOGETHER</span></div>
    <div style={{position:'absolute',left:'6%',right:'6%',top:'13%',bottom:'25%',borderRadius:'2cqw',overflow:'hidden'}}><Photo id={photo} style={{inset:0,width:'100%',height:'100%'}}/></div>
    <div style={{position:'absolute',left:'6%',right:'6%',bottom:'4%',display:'flex',alignItems:'flex-end',justifyContent:'space-between'}}><div><div style={{width:'22cqw',height:'.8cqw',background:'var(--bdw-sunshine)',marginBottom:'2.4cqw'}}/><h3 style={{...T('7.7cqw'),color:'var(--bdw-cocoa)'}}>Better<br/>together.</h3><p style={{margin:'2cqw 0 0',font:'800 2.6cqw/1 var(--font-sans)',color:'var(--bdw-deep-walk)'}}>@brunodogwalkernyc</p></div><img src={LOGOS+'bdw-primary.png'} alt="Bruno Dog Walker" style={{width:'15%'}}/></div>
  </Piece>;
}
Object.assign(window,{FeedEditorial,FeedDiagonal,FeedJournal});
