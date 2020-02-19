import {anim_entete} from "./anim_entete.mjs";
import { Slider } from "./Slider.mjs";
import { config_slider } from "./config_slider.mjs";
let elmEntete = document.querySelector("header .global");
const animEntete = new anim_entete(elmEntete);
animEntete.anim();

let elmEntete2 = document.querySelector("header .global h2");
const animEntete2 = new anim_entete(elmEntete2);
animEntete2.anim2();

const elmSlider = document.querySelector('.mon-slider')
console.log(elmSlider.tagName)
let mon_slider = new Slider(elmSlider, config_slider)
mon_slider.creerSlider()
