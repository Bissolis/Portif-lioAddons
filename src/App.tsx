import ImageIcon from './assets/file.jpg'
import Video from './assets/cherry.mp4'

export default function App(){
  const mesage = encodeURIComponent("Olá! acessei seu portifólio e gostaria de encomendar um addon");

  return(
    <main className="grid grid-cols-12 grid-rows-12 h-screen bg-[url('./assets/cherry.png')] bg-center bg-cover">
      <video
      src={Video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Div de apresentação */}
      <div className="bg-zinc-900 row-span-2 col-span-12 grid grid-cols-24 grid-rows-24 rounded-2xl m-3 z-10">
        <img src={ImageIcon} alt="minha imagem" className='w-10 col-span-2 rounded-full col-start-1 row-start-8 ml-3 sm:ml-5 sm:row-start-7 sm:w-11 md:w-12 md:row-start-7 md:ml-5 lg:ml-7 lg:row-start-7 xl:w-14 xl:ml-4 xl:row-start-6 2xl:w-22 2xl:row-start-4 2xl:ml-9'/>
        <h1 className='text-white text-[10px] col-span-12 row-start-7 col-start-4 font-Minefactory sm:text-[12px] sm:col-start-4 md:text-[16px] md:col-start-3 md:ml-4 lg:text-[18px] lg:col-start-2 lg:ml-10 xl:text-[20px] xl:col-start-2 xl:ml-8 xl:row-start-5 2xl:text-[32px] 2xl:col-start-3'>Pixel Dev Studio</h1>
        <p className='text-white text-[8px] col-span-12 row-start-15 col-start-4 font-Minecraft sm:text-[10px] sm:col-start-4 md:text-[12px] md:col-start-3 md:ml-4 lg:text-[13px] lg:col-start-2 lg:ml-10 xl:text-[15px] xl:col-start-2 xl:ml-8 2xl:text-[18px] 2xl:col-start-3'>Desde 2023 fazendo addons</p>
        <button className='col-start-18 col-span-4 row-start-8 row-span-8 bg-green-700 rounded-md font-Minefactory text-white tracking-[1px] shadow-[4px_4px_0px] shadow-green-600 cursor-pointer hover:scale-[1.05] transition-all text-[8px] sm:text-[10px] sm:row-span-10 sm:row-start-6 sm:col-start-20 md:row-span-12 md:row-start-6 md:text-[12px]'><a href={`https://wa.me/5527998829174?text=${mesage}`}>Contatar</a></button>
      </div>

      {/* div dos addons */}
      <div className='row-start-3 bg-zinc-900 row-span-12 col-span-12 grid grid-cols-24 grid-rows-24 rounded-2xl m-3 z-10'>
        <h1 className='text-zinc-600 row-start-10 col-start-6 font-Minefactory col-span-14 text-[10px] text-center sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px]'>Desculpe, ainda não possuo Addons lançados oficialmente ...</h1>
      </div>
    </main>
  );
}