const L='../../assets/logos/',P='../../assets/photos/';
const PHOTOS={dark:{src:P+'park-dog.png',pos:'50% 35%'},brown:{src:P+'brown-dog.png',pos:'35% 20%'},light:{src:P+'fluffy-dog.png',pos:'60% 70%'},crew:{src:P+'park-crew-portrait.png',pos:'50% 60%'},street:{src:P+'walking-group.png',pos:'40% 60%'}};
function Piece({ratio,bg='var(--bdw-walk-blue)',safe,children}){
  return <div style={{position:'relative',aspectRatio:ratio,containerType:'inline-size',background:bg,borderRadius:12,overflow:'hidden',color:'var(--bdw-warm-cream)'}}>{children}
    {safe&&<div style={{position:'absolute',inset:'6%',border:'2px dashed rgba(255,255,255,.85)',outline:'2px dashed rgba(0,0,0,.35)',pointerEvents:'none',borderRadius:6}}><span style={{position:'absolute',top:4,left:6,font:'700 11px var(--font-label)',color:'#fff',textShadow:'0 1px 2px #000'}}>MARGEM EDITORIAL / 6%</span></div>}
  </div>;
}
function Photo({id,style}){const p=PHOTOS[id];return <img src={p.src} alt="" style={{position:'absolute',objectFit:'cover',objectPosition:p.pos,...style}}/>;}
function Lbl({children,variant='sunshine',fs='3.4cqw',style}){return <span style={{display:'inline-block',background:variant==='cream'?'var(--bdw-warm-cream)':'var(--bdw-sunshine)',color:'var(--bdw-cocoa)',borderRadius:999,padding:'.35em .8em',font:'700 '+fs+'/1 var(--font-label)',textTransform:'uppercase',letterSpacing:'.02em',...style}}>{children}</span>;}
function Hi({children,dark}){return <span style={{background:'var(--bdw-sunshine)',color:'var(--bdw-cocoa)',padding:'0 .06em',boxDecorationBreak:'clone',WebkitBoxDecorationBreak:'clone'}}>{children}</span>;}
function Avatar({w,style}){return <span style={{position:'absolute',width:w,aspectRatio:'1',borderRadius:'50%',background:'var(--bdw-warm-cream)',display:'grid',placeItems:'center',...style}}><img src={L+'bdw-mascot.png'} alt="Bruno Dog Walker" style={{width:'78%'}}/></span>;}
Object.assign(window,{Piece,Photo,Lbl,Hi,Avatar,PHOTOS,LOGOS:L});
