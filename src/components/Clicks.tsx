import photos from "../data/photo.json"


const Clicks = () => {
    return (
        <div className="grid  pt-2 grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-2">
            {photos.map((x, i) => {
                return (
                    <a href={x.loc} key={i} target="_blank" className={`rounded-md ${x.attrib==="col-span-3"?"col-span-3":x.attrib}`}><img src={x.loc} className="w-full h-full rounded-md object-cover object-bottom" alt="drawing" /></a>
                )
            })}
            {/* <a href={"/photos/p0.webp"} target="_blank" className={`rounded-md col-span-2`}><img src={"/photos/p0.webp"} className="w-full h-full rounded-md object-cover" alt="drawing" /></a>
            <a href={"/photos/p1.webp"} target="_blank" className={`rounded-md row-span-2`}><img src={"/photos/p1.webp"} className="w-full h-full rounded-md" alt="drawing" /></a>
            <a href={"/photos/p2.webp"} target="_blank" className={`rounded-md`}><img src={"/photos/p2.webp"} className="w-full h-full rounded-md" alt="drawing" /></a>
            <a href={"/photos/p3.webp"} target="_blank" className={`rounded-md`}><img src={"/photos/p3.webp"} className="w-full h-full rounded-md" alt="drawing" /></a>
            <a href={"/photos/p4.webp"} target="_blank" className={`rounded-md`}><img src={"/photos/p4.webp"} className="w-full h-full rounded-md" alt="drawing" /></a> */}
        </div>
    )
}

export default Clicks