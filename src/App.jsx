import { useState } from "react";
import './App.css'

import criminal1 from "./assets/Criminal1.jpg";
import criminal2 from "./assets/Criminal2.jpg";
import criminal3 from "./assets/Criminal3.jpg";

const CARD_DATA = [
  {
    id: "#0001",
    label: " THE BABY FACED CROOK",
    crime: "EXIT SCAM · WILL SPEND LIFE IN JAIL",
    color: "#1a0a0a",
    accent: "#8b0000",
    icon: "◈",
    img: criminal1,
  },
  {
    id: "#0002",
    label: "THE TWO FACED EXTRACTOR",
    crime: "TAKES WITH A SMILE · SERIAL OFFENDER",
    color: "#0a0f1a",
    accent: "#1a3a6b",
    icon: "◆",
    img: criminal2,
  },
  {
    id: "#0003",
    label: "THE FRAUDSTER",
    crime: "15 YEARS NOT ENOUGH · THIEF",
    color: "#0f1a0a",
    accent: "#1a4a1a",
    icon: "◉",
    img: criminal3,
  },
];

const TICKER_ITEMS = [
  "SERIAL RUGGER",
  "THIEVING FOUNDER",
  "GRIFTING CELEBRITY",
  "CRYPTO CRIMINAL",
  "IMMORTALIZED ONCHAIN",
  "NEVER FORGOTTEN",
  "CT WON'T FORGET",
  "10K NFT COLLECTION",
];

export default function App() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      {/* TICKER */}
      <div className="ocs-ticker-outer">
        <div className="ocs-ticker-track">
          {repeated.map((item, i) => (
            <span key={i} className="ocs-ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="ocs-hero">
        <div className="ocs-hero-lines" />
        <div className="ocs-stamp">
          <div className="ocs-stamp-inner">
            <span className="ocs-stamp-num">10K</span>
            <span className="ocs-stamp-txt">NFT<br />COLLECTION</span>
          </div>
        </div>
        <div className="ocs-corner ocs-corner-tl" />
        <div className="ocs-corner ocs-corner-tr" />
        <div className="ocs-corner ocs-corner-bl" />
        <div className="ocs-corner ocs-corner-br" />

        <p className="ocs-eyebrow">⚠ WANTED ⚠ &nbsp; ESTABLISHED ON THE BLOCKCHAIN</p>

        <h1 className="ocs-title">
          ONCHAIN
          <span className="ocs-title-accent">CRIMINAL</span>
          SYNDICATE
        </h1>

        <div className="ocs-divider" />

        <p className="ocs-body">
          These people have <strong style={{ color: "#e8dcc8" }}>extracted and extracted</strong> from the crypto community,
          constantly battering our reputation, constantly going against the ethos of crypto.
          Some claim to push for mass adoption but all they really want is to{" "}
          <span style={{ color: "#c9a84c", fontWeight: 700 }}>fill up their pockets.</span> Some claim to be builders,
          but all they build are <strong style={{ color: "#e8dcc8" }}>mansions with our money.</strong> They steal and harm
          our industry, everyone feigns outrage, then moves on like nothing happened.
          <br /><br />
          We're putting the worst of crypto criminals <span style={{ color: "#c9a84c", fontWeight: 700 }}>OnChain</span> to
          never be forgotten — the serial ruggers, the thieving founders, the grifting celebrities.{" "}
          <strong style={{ color: "#e8dcc8" }}>None shall be spared.</strong> CT may forget. <em>We won't.</em>
        </p>
      </section>

          {/* COLLECTION REVEAL NOTICE */}
       <section className="ocs-reveal-notice">
        <h2 className="ocs-reveal-title">COLLECTION REVEAL</h2>
          <p className="ocs-reveal-text">
           Collection Reveal will be shortly after Mintout.
          </p>
</section>

      {/* CARDS */}
      <section className="ocs-cards-section">
        <p className="ocs-cards-label">[ MOST WANTED ]</p>
        <div className="ocs-cards-grid">
          {CARD_DATA.map((card, i) => (
            <div key={i} className="ocs-card">
              <div className="ocs-card-header">
                <span>⚠ MOST WANTED</span>
                <span>OCS</span>
              </div>

              {/* CARD FACE */}
              <div className="ocs-card-face">
                <img src={card.img} alt={card.label} className="ocs-card-image-full" />
              </div>

              <div className="ocs-card-foot">
                <div className="ocs-card-foot-row">
                  <div>
                    <span className="ocs-card-id">{card.id}</span>
                    <span className="ocs-card-name">{card.label}</span>
                  </div>
                  <span className="ocs-card-guilty">GUILTY</span>
                </div>
                <p className="ocs-card-crime">{card.crime}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="ocs-manifesto">
        <p className="ocs-manifesto-quote">
          <span className="ocs-quote-mark">"</span>
          The most vile and cunning crooks of them all — immortalized OnChain where
          no delete button exists, no PR firm can scrub them, no statute of limitations applies.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="ocs-footer">
        <div className="ocs-footer-logo">OnChain Criminal Syndicate</div>
        <p className="ocs-footer-tagline">A 10K NFT Collection · Immortalizing Crypto's Worst</p>
        <a href="#" className="ocs-cta">JOIN THE SYNDICATE</a>
        <div className="ocs-links">
          <a href="#" className="ocs-link">Twitter / X</a>
          <a href="#" className="ocs-link">OpenSea</a>
          <a href="#" className="ocs-link">Manifesto</a>
        </div>
        <p className="ocs-copy">© 2024 ONCHAIN CRIMINAL SYNDICATE · ALL CRIMES RECORDED · ALL CRIMINALS REMEMBERED</p>
      </footer>
    </>
  );
}