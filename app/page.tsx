'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Cinzel, Noto_Serif_JP } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400','600','700'] })
const noto = Noto_Serif_JP({ subsets: ['latin'], weight: ['400','500','700'] })

/* ===== FF14風 + アンティーク額縁フレーム ===== */
const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group">

    {/* 中身 */}
    <div className="relative z-0 p-6 bg-[#11163a] rounded-2xl overflow-hidden">
      {children}
    </div>

    {/* 額縁PNG（最前面） */}
    <Image
      src="/frame_vintage04.png"
      alt="frame"
      fill
      className="object-contain pointer-events-none z-20"
    />

    {/* 内側FF14グロー */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 z-10 bg-gradient-to-br from-blue-400/30 via-cyan-200/10 to-transparent" />

  </div>
)

export default function Page(){
 const [loading,setLoading]=useState(true)

 useEffect(()=>{
  const t=setTimeout(()=>setLoading(false),1500)
  return ()=>clearTimeout(t)
 },[])

 if(loading){
  return (
   <main className="min-h-screen bg-black text-white flex items-center justify-center">
    <p>Loading...</p>
   </main>
  )
 }

 return (
 <main className={`${noto.className} bg-[#0b0f2a] text-white`}>

  {/* ===== KV ===== */}
  <section className="relative w-full h-[720px]">
    <Image src="/kv.jpg" alt="KV" fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0b0f2a]" />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className={`${cinzel.className} text-5xl md:text-7xl tracking-[0.25em] drop-shadow-[0_0_20px_rgba(120,180,255,.6)]`}>
        coffret à bijoux
      </h1>
      <p className="mt-6 max-w-xl text-sm text-blue-200 tracking-widest">
        夜空に煌めく、秘密の店へようこそ
      </p>
    </div>
  </section>


  {/* ===== メニュー ===== */}
  <section className="max-w-6xl mx-auto px-6 py-20">

    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <Frame>
        <h3 className={`${cinzel.className} mb-4 text-lg text-blue-200 tracking-widest`}>
          SPECIAL GIFT
        </h3>
        <p className="text-sm text-neutral-300">来店特典などの説明エリア</p>
      </Frame>

      <Frame>
        <div className="relative h-[360px]">
          <Image src="/main.jpg" alt="main" fill className="object-cover" />
        </div>
      </Frame>

      <Frame>
        <h3 className={`${cinzel.className} mb-4 text-lg text-blue-200 tracking-widest`}>
          NOVELTY
        </h3>
        <p className="text-sm text-neutral-300">グッズ情報など</p>
      </Frame>

    </div>

    <div className="grid md:grid-cols-2 gap-8">

      <Frame>
        <h3 className={`${cinzel.className} mb-6 text-xl text-blue-200 tracking-widest`}>Sweets</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3].map(i=>(
            <Frame key={i}>
              <div className="h-40 flex items-center justify-center text-xs">Item {i}</div>
            </Frame>
          ))}
        </div>
      </Frame>

      <Frame>
        <h3 className={`${cinzel.className} mb-6 text-xl text-blue-200 tracking-widest`}>Drinks</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3].map(i=>(
            <Frame key={i}>
              <div className="h-40 flex items-center justify-center text-xs">Drink {i}</div>
            </Frame>
          ))}
        </div>
      </Frame>

    </div>

  </section>


  {/* フッター */}
  <section className="text-center pb-16">
    <p className="text-sm text-neutral-400">Elemental / Gungnir / Lavender Beds</p>
    <p className="text-xs text-neutral-500 mt-2">OPEN 22:00 - CLOSE 24:00</p>
  </section>

 </main>
 )
}
