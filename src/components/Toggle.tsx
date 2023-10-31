
import { useState, useEffect } from 'react';

import '../styles/toggle.css';


export default function Toggle(props) {


  return (
    <label className="toggle" style={{font:`${props.size}em/1.5 sans-serif`}}>
        <input id={props.id} className="toggle_input" type="checkbox" checked={props.hook.value} onChange={(e) => props.hook.set(e.target.checked)} />
        <span className="toggle_base-outer"></span>
        <span className="toggle_base-inner"></span>
        <svg className="toggle_base-neon" viewBox="0 0 40 24" width="40px" height="24px">
            <defs>
                <filter id="toggle-glow">
                    <feGaussianBlur result="coloredBlur" stdDeviation="1"></feGaussianBlur>
                    <feMerge>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
                <linearGradient id="toggle-gradient1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(var(--on-hue1),90%,70%)" />
                    <stop offset="100%" stopColor="hsl(var(--on-hue2),90%,70%)" />
                </linearGradient>
                <linearGradient id="toggle-gradient2" x1="0.7" y1="0" x2="0.3" y2="1">
                    <stop offset="25%" stopColor="hsla(var(--on-hue1),90%,70%,0)" />
                    <stop offset="50%" stopColor="hsla(var(--on-hue1),90%,70%,0.3)" />
                    <stop offset="100%" stopColor="hsla(var(--on-hue2),90%,70%,0.3)" />
                </linearGradient>
            </defs>
            <path fill="none" filter="url(#toggle-glow)" stroke="url(#toggle-gradient1)" strokeWidth="1"
                strokeDasharray="0 104.26 0" strokeDashoffset="0.01" strokeLinecap="round"
                d="m.5,12C.5,5.649,5.649.5,12,.5h16c6.351,0,11.5,5.149,11.5,11.5s-5.149,11.5-11.5,11.5H12C5.649,23.5.5,18.351.5,12Z" />
        </svg>
        <span className="toggle_knob-shadow"></span>
        <span className="toggle_knob-container">
            <span className="toggle_knob">
                <svg className="toggle_knob-neon" viewBox="0 0 48 48" width="48px" height="48px">
                    <circle fill="none" stroke="url(#toggle-gradient2)" strokeDasharray="0 90.32 0 54.19"
                        strokeLinecap="round" strokeWidth="1" r="23" cx="24" cy="24"
                        transform="rotate(-112.5,24,24)" />
                </svg>
            </span>
        </span>
        <span className="toggle_led"></span>
        <span className="toggle_text">{props.text}</span>
    </label>
  );
};
