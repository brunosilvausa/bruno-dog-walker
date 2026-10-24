const TT=(fs)=>({margin:0,font:'900 '+fs+'/1.0 var(--font-sans)',letterSpacing:'-0.035em'});
function ReelsCover({photo='light',safe}){
  return <Piece ratio="1080/1920" bg="#333" safe={safe}>
    <Photo id={photo} style={{inset:0,width:'100%',height:'100%'}}/>
    <div style={{position:'absolute',left:'7%',right:'15%',top:'15%',background:'var(--bdw-warm-cream)',borderLeft:'1.4cqw solid var(--bdw-sunshine)',borderRadius:'4cqw',padding:'7cqw 7cqw 6cqw'}}><Lbl fs="4cqw">Walk Diaries / NYC</Lbl><h3 style={{...TT('10.5cqw'),marginTop:'4cqw',color:'var(--bdw-cocoa)'}}>Small paws.<br/>Big city.</h3></div>
    <Avatar w="17%" style={{left:'7%',bottom:'23%'}}/>
  </Piece>;
}
function YouTubeEditorial({theme,photo='light',title,safe}){
  const blue=theme==='blue';
  return <Piece ratio="1280/720" bg={blue?'var(--bdw-walk-blue)':'var(--bdw-warm-cream)'} safe={safe}>
    <div style={{position:'absolute',top:0,bottom:0,right:0,width:'52%',overflow:'hidden'}}><Photo id={photo} style={{inset:0,width:'100%',height:'100%'}}/></div>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position:'absolute',top:0,bottom:0,left:'44%',width:'8%',height:'100%'}}><path d="M0 0 H55 C30 30 30 70 45 100 H0Z" fill={blue?'#008BD2':'#FFF9EA'}/></svg>
    <div style={{position:'absolute',left:'6%',top:'9%',width:'40%'}}><Lbl fs="2.6cqw">Dog Walking / NYC</Lbl><h3 style={{...TT('7cqw'),marginTop:'3cqw',color:blue?'var(--bdw-warm-cream)':'var(--bdw-cocoa)',textWrap:'balance'}}>{title||<>Little walks.<br/>Big joy.</>}</h3></div>
    <Avatar w="13%" style={{left:'6%',bottom:'8%'}}/>
  </Piece>;
}
function YouTubePhoto({photo='crew',safe}){
  return <Piece ratio="1280/720" bg="#333" safe={safe}>
    <Photo id={photo} style={{left:0,right:0,top:0,height:'77%',width:'100%'}}/>
    <Lbl variant="cream" fs="2.6cqw" style={{position:'absolute',left:'6%',top:'6%'}}>Walk Diaries / NYC</Lbl>
    <div style={{position:'absolute',left:0,right:0,bottom:0,height:'23%',background:'var(--bdw-walk-blue)',borderTop:'.8cqw solid var(--bdw-sunshine)',display:'flex',alignItems:'center',gap:'2.4cqw',padding:'0 16% 0 4%'}}><span style={{width:'9cqw',aspectRatio:'1',borderRadius:'50%',background:'var(--bdw-warm-cream)',display:'grid',placeItems:'center',flex:'none'}}><img src={LOGOS+'bdw-mascot.png'} alt="" style={{width:'78%'}}/></span><h3 style={{...TT('6cqw'),color:'var(--bdw-warm-cream)'}}>Meet the park crew.</h3></div>
  </Piece>;
}
function VideoCaption({photo='street',safe}){
  const {CaptionBlock,CaptionWord}=window.BrunoDogWalkerDesignSystem_0597c9;
  return <Piece ratio="1080/1920" bg="#333" safe={safe}><Photo id={photo} style={{inset:0,width:'100%',height:'100%'}}/><Avatar w="12%" style={{left:'7%',top:'15%'}}/>
    <div style={{position:'absolute',left:'7%',right:'15%',bottom:'28%'}}><CaptionBlock size="5.8cqw">Every walk has<br/>its own <CaptionWord>rhythm.</CaptionWord></CaptionBlock></div></Piece>;
}
function VideoName({photo='brown',safe}){
  const {NameCaption}=window.BrunoDogWalkerDesignSystem_0597c9;
  return <Piece ratio="1080/1920" bg="#333" safe={safe}><Photo id={photo} style={{inset:0,width:'100%',height:'100%'}}/><Avatar w="12%" style={{left:'7%',top:'15%'}}/>
    <div style={{position:'absolute',left:'7%',top:'28%',width:'42%'}}><NameCaption name="Dog name" size="4.8cqw" style={{width:'100%',boxSizing:'border-box'}}/></div></Piece>;
}
function VideoEnd({safe}){
  return <Piece ratio="1080/1920" bg="var(--bdw-walk-blue)" safe={safe}><div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'6cqw',textAlign:'center'}}><Lbl fs="4cqw">Walk Diaries / NYC</Lbl><img src={LOGOS+'bdw-primary.png'} alt="Bruno Dog Walker" style={{width:'48%'}}/><h3 style={{...TT('9.5cqw'),color:'var(--bdw-warm-cream)'}}>See you on<br/>the next walk.</h3><span style={{background:'#fff',color:'var(--bdw-deep-walk)',borderRadius:999,padding:'.6em 1.2em',font:'800 3.6cqw/1 var(--font-sans)'}}>@brunodogwalkernyc</span></div></Piece>;
}
Object.assign(window,{ReelsCover,YouTubeEditorial,YouTubePhoto,VideoCaption,VideoName,VideoEnd});
