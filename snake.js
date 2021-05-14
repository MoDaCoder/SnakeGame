const Bg_Clr = '#F8DF77';
const Snake_Clr = '#2ECFCA';
const Food_clr = '#FF4E62';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.height = 400;

const FR = 10; //Frame Rate
const S = 20; //Screen size
const T = canvas.width / S; //Tile size Canvas width divided by Screen size