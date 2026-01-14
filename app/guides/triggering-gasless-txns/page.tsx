"use client";
import Divider from "../../../components/Divider";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black relative --font-outfit">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <a href="/dashboard"> 👈 Back</a>
        <h2 className="md:text-3xl text-[20.7px] mb-6 mt-1.5">
            Triggering Gasless Transactions with Lazorkit
        </h2>
        <p className="mb-1.5">
        This guide assumes you have finished the <a href="/guides/creating-wallets" className="text-blue-700" target="_blank">Creating Passkey-Based Wallets with Lazorkit</a> guide
        </p>
        <p className="mb-3.5">
          Signing transactions have never been easier on lazorkit and the flow is similar to how most devs did it in the past
          <br/>You create a transaction instruction , then sign and send
          <br/>
          Quite a simple process if you think about it
        </p>
        <p className="mb-1.5">
          Let me run u through how it works...
        </p>
        <Divider/>
        <div className="my-1">
          In your app/page.tsx or any path you might prefer , create a handleTransaction fucntion as so
          <div className="bg-[#080807c4] text-white px-3 py-3 rounded-sm mb-2.5">
            <pre
              className={`whitespace-pre overflow-hidden wrap-break-word md:text-sm text-[11px] ${jetbrainsMono.variable}`}
            >
              </pre>
                    {`import {
                        Connection,
                        LAMPORTS_PER_SOL,
                        PublicKey,
                        SystemProgram
                      } from "@solana/web3.js";
                      
                      import { useWallet } from "@lazorkit/wallet";
                  
                  `}
              </div>
        </div>
      </div>
    </div>
  );
}
