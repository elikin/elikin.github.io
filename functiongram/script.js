const renders = [
  {"name": "Sirby", "src": "images/1.png", "desc": "Conformal map of $$f(z) = 2 \\cosh(z)$$ centered around 0 with an apothem of \\(\\pi\\). It is based on an image of my cat Sirby."},
  {"name": "Ooze", "src": "images/2.png", "desc": "Domain coloring of the 32nd iterate of $$f(z) = \\tan\\left(\\frac{1}{z}\\right)e^{i|z|}$$ centered around 0 with an apothem of 5 / 2."},
  {"name": "Pollock", "src": "images/3.png", "desc": "Domain coloring of the 32nd iterate of $$f(z) = \\log\\left(\\frac{(1-i)z^6 + (7+i)z}{2z^5 + 6}\\right)$$ centered around 0 with an apothem of 2."},
  {"name": "Needle", "src": "images/4.png", "desc": "Domain coloring of the 8th iterate of $$f(z) = \\Im(z)\\log(z)$$ centered around 0 with an apothem of 2."},
  {"name": "Cannon", "src": "images/5.png", "desc": "Conformal map of $$f(z) = \\frac{1}{z^2}$$ centered around 0 with an apothem of 1. It is based on an image of my friend Cannon."},
  {"name": "Misiurewicz", "src": "images/6.png", "desc": "Coloring of the Mandelbrot set, which is given by $$z_{n+1} = z_n^2 + c$$ centered around the point $$M_{23, 2} \\approx -0.77568377 + 0.13646737i$$ with an apothem of 0.0000001."},
  {"name": "Acid Pitchfork", "src": "images/7.png", "desc": "Domain coloring of the 8th iterate of $$f(z) = e^{i \\arg(z)} \\tanh\\left(\\frac{1}{\\sinh^2(1 / z)}\\right)$$ centered around 0 with an apothem of 2."},
  {"name": "Triangle Dragon", "src": "images/8.png", "desc": "Domain coloring of the 32nd iterate of $$f(z) = \\log\\left(\\frac{(1-i)z^6 - 4iz^3}{2z^6}\\right)$$ centered around -0.3i with an apothem of 3."},
  {"name": "Roots of Unity", "src": "images/9.png", "desc": "Domain coloring of $$f(z) = z^3 - 1$$ centered around 0 with an apothem of 2."},
  {"name": "Strawberry Banana", "src": "images/10.png", "desc": "Domain coloring of the 32nd iterate of $$f(z) = \\log\\left(\\frac{z + i}{z^2}\\right)$$ centered around 0 with an apothem of 2."},
  {"name": "Whirlpool", "src": "images/11.png", "desc": "Conformal map of $$f(z) = 3ze^{i|z|}$$ centered around 0 with an apothem of 2. It is based on a checkerboard image."},
  {"name": "Branch Cut", "src": "images/12.png", "desc": "Domain coloring of $$f(z) = \\sqrt{z}$$ centered around 0 with an apothem of 2."},
  {"name": "Blossom", "src": "images/13.png", "desc": "Conformal map of $$f(z) = \\frac{1}{z}$$ centered around 0 with an apothem of \\(\\pi / 8\\). It is based on the cherry blossom emoji."},
  {"name": "Long Eli", "src": "images/14.png", "desc": "Conformal map of $$f(z) = \\frac{1}{z}$$ centered around 0 with an apothem of 1. It is based on a distorted image of me."},
  {"name": "Iridescence", "src": "images/15.png", "desc": "Domain coloring of the 8th iterate of $$f(z) = e^{i \\Im(z)} \\tan\\left(\\frac{1}{z}\\right)$$ centered around 0 with an apothem of 2."},
  {"name": "Burning Ship", "src": "images/16.png", "desc": "Coloring of the burning-ship fractal, which is given by $$z_{n+1} = (|\\Re(z_n)| + |\\Im(z_n)|i)^2 + c$$ centered around 0 with an apothem of 2.2."},
  {"name": "Sleepy Cleo", "src": "images/17.png", "desc": "Conformal map of $$f(z) = \\frac{1}{z}$$ centered around 0 with an apothem of 1.1. It is based on an image of my cat Cleo."},
  {"name": "Under Construction", "src": "images/18.png", "desc": "Domain coloring of \\(\\log(f^{(32)}(z)\\) where $$f(z) = \\sin\\left(\\frac{1}{z}\\right)$$ centered around 0 with an apothem of 2."},
  {"name": "Carpet", "src": "images/19.png", "desc": "Domain coloring of the 16th iterate of $$f(z) = \\frac{\\cos(z)}{\\sin(z^4 - 1)}$$ centered around 0 with an apothem of 2."},
  {"name": "Pastel Oology", "src": "images/20.png", "desc": "Domain coloring of the 8th iterate of $$f(z) = e^{i|z|}\\log(z)$$ centered around 0 with an apothem of 2."},
  {"name": "Essential Singularity", "src": "images/21.png", "desc": "Domain coloring of $$f(z) = e^{1 / z}$$ centered around 0 with an apothem of 1/2. Notice that $$e^{1 / z} = 1 + \\frac{1}{z} + \\frac{1}{2z^2} + \\frac{1}{6z^3} + \\dots$$ and so the function has an essential singularity at 0."},
  {"name": "Ex Nihilo", "src": "images/22.png", "desc": "Domain coloring of the 8th iterate of $$f(z) = e^{i \\Im(z^2)}(z^2 + i)$$ centered around 0 with an apothem of 2."},
  {"name": "Jake & Maggie", "src": "images/23.png", "desc": "Conformal map of $$f(z) = \\sum_{n = 0}^{256} z^{2^n}$$ centered around 0 with an apothem of 1. It is based on an image of my friend Jake, and another friend's dog named Maggie."},
  {"name": "Grace", "src": "images/24.png", "desc": "Domain coloring of the 22nd iterate of $$f(z) = e^z\\arg(z)$$ centered around \\(\\pi i / 2\\) with an apothem of 0.4."},
  {"name": "Iterated Map 1", "src": "images/25.png", "desc": "Domain coloring of the 32nd iterate of $$f(z) = \\log\\left(\\frac{(1-i)z^4+(7+i)z}{2z^5+6}\\right)$$ centered around 0 with an apothem of 2."},
  {"name": "Iterated Map 2", "src": "images/26.png", "desc": "Domain coloring of the 16th iterate of $$f(z) = \\frac{\\sin(z)}{z^2}$$ centered around 0 with an apothem of 0.15."},
  {"name": "Iterated Map 3", "src": "images/27.png", "desc": "Domain coloring of the 8th iterate of $$f(z) = \\Re(z) \\log(z) e^{i \\arg(z)}$$ centered around 0 with an apothem of 2."},
  {"name": "Kaleidoscope", "src": "images/28.png", "desc": "Domain coloring of \\(\\log(f^{(16)}(z))\\) where $$f(z) = \\cos\\left(\\frac{1}{z}\\right)$$ centered around 0 with an apothem of 2."},
  {"name": "Lacunary", "src": "images/29.png", "desc": "Domain coloring of $$f(z) = \\sum_{n = 0}^{256} z^{2^n}$$ centered around 0 with an apothem of 1. This is an approximation of the lacunary function $$\\sum_{n = 0}^{\\infty} z^{2^n}$$ and serves as the visualization of such functions on Wikipedia."},
  {"name": "CMYK", "src": "images/30.png", "desc": "Domain coloring of the 8th iterate of $$f(z) = z - \\frac{z^3 - 1}{3z^2}$$ centered around 0 with an apothem of 2."},
  {"name": "Crevice", "src": "images/31.png", "desc": "Domain coloring of the 32nd iterate of $$f(z) = \\sin\\left(\\frac{1}{z}\\right)$$ centered around 0 with an apothem of 1.07."},
  {"name": "Tron", "src": "images/32.png", "desc": "Domain coloring of the 64th iterate of $$f(z) = \\frac{z}{\\left|z^3 - 1\\right|}$$ multiplied by $$e^{i \\arg(\\sin(z^3 - 1))}$$ centered around 0 with an apothem of 1.2."}
];

var focused_idx;

function showImage(idx) {
  if (idx >= 0 && idx < renders.length) {
    focused_idx = idx;
    document.getElementById("image").src = renders[focused_idx].src;
    document.getElementById("name").textContent = renders[focused_idx].name;
    document.getElementById("description").textContent = renders[focused_idx].desc;
    document.getElementById("background").style.display = "block";

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("description")]);
    document.body.style.overflow = "hidden";
  }
}

function closeImage() {
  document.getElementById("background").style.display = "none";
  document.body.style.overflow = "auto";
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") closeImage()
  else if (e.code === "ArrowLeft") showImage(focused_idx - 1)
  else if (e.code === "ArrowRight") showImage(focused_idx + 1)
});

document.addEventListener("click", (e) => {
  if (e.target == document.getElementById("background")) {
    closeImage();
  }
});