function BookPage({go,preset}){
  const {Field,Select,Checkbox,TactileButton:Button,Card,Tag,Highlight,ScrollReveal}=window.BrunoDogWalkerDesignSystem_0597c9;
  const [v,setV]=React.useState({name:'',email:'',dog:'',service:preset||SERVICES[0].k,notes:''});
  const [err,setErr]=React.useState({});const [sent,setSent]=React.useState(false);const [busy,setBusy]=React.useState(false);
  const set=k=>e=>setV({...v,[k]:e.target.value});
  const submit=e=>{e.preventDefault();const x={};if(!v.name.trim())x.name='Please add your name.';if(!/^\S+@\S+\.\S+$/.test(v.email))x.email='Please enter a full email address.';if(!v.dog.trim())x.dog='Please add your dog’s name.';setErr(x);if(!Object.keys(x).length){setBusy(true);setTimeout(()=>{setBusy(false);setSent(true);window.scrollTo(0,0);},1100);}};
  const wrap={maxWidth:1080,margin:'0 auto',padding:'64px clamp(20px,5vw,80px) 0'};
  if(sent)return <main style={wrap}><Card elevation={1} style={{padding:48,alignItems:'flex-start'}}><Tag>Meet & greet</Tag><h1 style={{font:'900 clamp(36px,5vw,56px)/1.05 var(--font-sans)',letterSpacing:'-.035em',margin:'8px 0 0'}}>Thanks, {v.name.split(' ')[0]}.<br/>Say hi to <Highlight>{v.dog}</Highlight> for us.</h1><p style={{font:'600 20px/1.5 var(--font-sans)',margin:0,maxWidth:'44ch'}}>We received your request for {v.service.toLowerCase()} and will reply to {v.email} to pick a time.</p><p style={{fontSize:14,color:'var(--feedback-success)',fontWeight:700,margin:0}}>Demo only — nothing was sent or stored.</p><div style={{display:'flex',gap:12,marginTop:8}}><Button onClick={()=>go('home')}>Back home</Button><Button variant="secondary" onClick={()=>{setSent(false);setV({...v,notes:''});}}>Edit request</Button></div></Card></main>;
  return <main style={{...wrap,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:48,alignItems:'start'}}>
    <div><p style={{font:'700 18px/1 var(--font-label)',color:'var(--bdw-deep-walk)',margin:0}}>MEET & GREET</p><h1 style={{font:'900 clamp(40px,5vw,56px)/1.05 var(--font-sans)',letterSpacing:'-.035em',margin:'8px 0 16px'}}>Good care starts with a hello.</h1><p style={{font:'600 20px/1.5 var(--font-sans)',margin:0}}>Tell us about your dog. We’ll set up a short visit to meet before the first walk.</p>
      <ScrollReveal variant="image" style={{marginTop:32}}><img src="../../assets/photos/park-crew-portrait.png" alt="Two dogs on a park walk" style={{width:'100%',borderRadius:24,display:'block',boxShadow:'var(--shadow-ambient)'}}/></ScrollReveal></div>
    <Card><form onSubmit={submit} noValidate style={{display:'flex',flexDirection:'column',gap:20}}>
      <Field label="Your name" value={v.name} onChange={set('name')} error={err.name} autoComplete="name"/>
      <Field label="Your email" type="email" placeholder="you@example.com" value={v.email} onChange={set('email')} error={err.email} help="We’ll reply by email."/>
      <Field label="Dog’s name" value={v.dog} onChange={set('dog')} error={err.dog}/>
      <Select label="Service" value={v.service} onChange={set('service')} options={SERVICES.map(s=>s.k)}/>
      <Field label="Anything we should know?" multiline value={v.notes} onChange={set('notes')} help="Routine, temperament, building access."/>
      <Checkbox label="My dog is comfortable around other dogs"/>
      <Button type="submit" block arrow loading={busy} loadingLabel="Sending request…">Request a meet & greet</Button>
    </form></Card></main>;
}
Object.assign(window,{BookPage});
