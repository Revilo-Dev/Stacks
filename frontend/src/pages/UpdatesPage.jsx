
const UpdatesPage = () => {

  return (
  <div className="bg-base-100 min-h-screen flex flex-col gap-5 m-20px">
    <div className="w-full p-10 " >

    <h1 className=" pb-2 pt-14 text-accent text-2xl"  >Change Log:</h1>
    <p> Beta version: please report bugs at :<a className="text-accent"   href="mailto:Revilo2.dev@gmail.com"> Revilo2.dev@gmail.com</a></p>  
    <br />
    <p> Check out the :<a className="text-accent"   href="https://trello.com/b/clFa5aGI/stacks"> Roadmap</a></p>
      <br></br>

  <div>

    {/*Beta 1 ---------------------------------------------------------------*/} 

  <div className="border-t border-b p-4 border- border-zinc-400" >
    <h1>Beta Update 1 Hotfix 1: </h1>
    <p>    - Fixed text wrap in changelog
    <br /> - Fixed dates in changelog
    <br /> - seperators in changelog
    <br /> - Fixed profile page accents
    <br /> - Fixed "image too large" error message
    <br /> - updated error toasts
    </p>
    <p className="text-zinc-500">( 21/4/25 )</p>
</div>

<div className="border-t border-b p-4 border- border-zinc-400" >
    <h1>Beta Update 1: </h1>
    <p>    - added beta Info / Links 
    <br /> - added Roadmap
    <br /> - Added Updates page
    <br /> - enchanced button effects
    <br /> - fixed navbar clarity
    <br /> - fixed navbar spacing
    <br /> - fixed message container spacing
    <br /> - fixed sidebar clarity
    <br /> - fixed images button disapearing
    <br /> - fixed online users Bug</p>
    <p className="text-zinc-500">( 17/4/25 )</p>
</div>

<div className="border-t border-b p-4 border- border-zinc-400" >
    <h1>Released: (17/4/26)</h1>
    <p>- Website Release</p>
    <p className="text-zinc-500">( 17/4/25 )</p>
</div>
      






      
  </div>   





    </div>
  </div>

)};

export default UpdatesPage;