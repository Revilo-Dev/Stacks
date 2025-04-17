
const UpdatesPage = () => {

  return (
  <div className="bg-base-100 min-h-screen flex flex-col gap-5 m-20px">
    <div className="w-full p-10 " >

    <h1 className=" pb-2 pt-14 text-accent text-2xl"  >Change Log:</h1>
    <p className="flex text-nowrap" > Beta version: please report bugs at :<a className="text-accent"   href="mailto:revilo2.dev@gmail.com"> revilo2.dev@gmail.com</a></p>  
    <p className="flex text-nowrap" > Check out the :<a className="text-accent"   href="https://trello.com/b/clFa5aGI/stacks"> Roadmap</a></p>
      <br></br>

  <div>

    {/*Beta 1 ---------------------------------------------------------------*/} 
<div className="border-t border-b p-4 border-" >
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
    <p className="text-zinc-500">( 17/4/26 )</p>
</div>

<div className="border-t border-b p-4 border-" >
    <h1>Released: (17/4/26)</h1>
    <p>- Website Release</p>
    <p className="text-zinc-500">( 17/4/26 )</p>
</div>
      






      
  </div>   





    </div>
  </div>

)};

export default UpdatesPage;