import Image from "next/image";

export default function Page()
{
    return (
        <div className="col-span-5">
        <h1 className="text-4xl mb-5 dark:text-accent-400 text-accent-600 font-medium">
        Artsy Attempts 
      </h1>
      <div className="grid grid-cols-2 gap-12">

      <div className="relative w-[600px] h-[600px] group">
            <Image 
              src="/artwork/radhakrishna.jpg"
              alt="Painting"
              fill
              className="object-cover rounded-lg transition-all group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white font-semibold text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all">
            <p>Title: Radha Krishna</p>
            <p>Medium: Acrylic on Canvas</p>
          </div>
          </div>

          <div className="relative w-[600px] h-[600px] group">
            <Image 
              src="/artwork/flowervase.png"
              alt="Painting"
              fill
              className="object-cover rounded-lg transition-all group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white font-semibold text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all">
            <p>Medium: Acrylic on Wood</p>
          </div>
          </div>

        
          <div className="relative w-[600px] h-[600px] group">
            <Image
              src="/artwork/boat.jpg"
              alt="Painting"
              fill
              className="object-cover rounded-lg transition-all group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white font-semibold text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all">
            <p>Title: Marooned</p>
            <p>Medium: Acrylic on Canvas</p>
          </div>
          </div>

          <div className="relative w-[600px] h-[600px] group">
            <Image
              src="/artwork/lookingoutthewindow.jpg"
              alt="Painting"
              fill
              className="object-cover rounded-lg transition-all group-hover:opacity-80"
            />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white font-semibold text-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all">               
            <p>Title: Serenity Among Blooms</p>
            <p>Medium: Acrylic on Canvas</p>
            </div>
          </div>

          </div>
          </div>
    );
}