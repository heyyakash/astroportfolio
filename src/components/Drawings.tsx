import drawings from "../data/drawings.json"

const Drawings = () => {
  return (
    <div className="grid  pt-2 grid-cols-1 md:grid-cols-3 grid-rows-auto md:auto-rows-[200px] gap-2">
        {drawings.map((x,i)=>{
            return(
                <a href={x.loc} key = {i} target="_blank" className={`${x.attrib} rounded-md`}><img src={x.loc} className="w-full h-full rounded-md" alt="drawing" /></a>
                
            )
        })}

{/* <a href={"/drawings/p1.webp"} target="_blank" className={`rounded-md`}><img src={"/drawings/p1.webp"} className="w-full h-full rounded-md" alt="drawing" /></a>
<a href={"/drawings/p1.webp"} target="_blank" className={`rounded-md`}><img src={"/drawings/p2.webp"} className="w-full h-full rounded-md" alt="drawing" /></a>
<a href={"/drawings/p3.webp"} target="_blank" className={`rounded-md row-span-2`}><img src={"/drawings/p3.webp"} className="w-full h-full rounded-md" alt="drawing" /></a>
<a href={"/drawings/p1.webp"} target="_blank" className={`rounded-md`}><img src={"/drawings/p4.webp"} className="w-full h-full rounded-md" alt="drawing" /></a> */}
{/* <a href={"/drawings/p1.webp"} target="_blank" className={`rounded-md`}><img src={"/drawings/p5.webp"} className="w-full h-full rounded-md" alt="drawing" /></a> */}
    </div>
  )
}

export default Drawings