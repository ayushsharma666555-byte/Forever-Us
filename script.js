let scene, camera, renderer;
let pages = [];
let currentPage = 0;

const messages = [
  "Omg look at u 😍 such a beauty 10/10 the prettiest girl I have seen 💙",
  "Look at u silly 😂 u being u hahahah 💕",
  "Omgg jealous of pizza 😂🍕 look at u kiddo haha I lovee uuu 💖",
  "Us being us 😝 I hatee uuu hahaaa jk I lovee youuu soo muchhh ❤️",
  "Sana, you are my home. My everything. It's us against the world. I’ll love you forever 💙🌸"
];

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg"
];

init();
animate();

function init() {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 6;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  createPages();

  document.getElementById("loading").style.display = "none";

  showMessage(messages[0]);

  window.addEventListener("click", nextPage);
  window.addEventListener("touchstart", nextPage);
}

function createPages() {

  const loader = new THREE.TextureLoader();

  for (let i = 0; i < photos.length; i++) {

    const texture = loader.load(photos[i]);

    const material = new THREE.MeshBasicMaterial({ map: texture });

    const geometry = new THREE.PlaneGeometry(3, 4);

    const page = new THREE.Mesh(geometry, material);

    page.position.x = i * 4;

    scene.add(page);

    pages.push(page);
  }

}

function nextPage() {

  currentPage++;

  if (currentPage < pages.length) {

    camera.position.x = pages[currentPage].position.x;

    showMessage(messages[currentPage]);

  } else {

    goToFlowerField();
  }
}

function goToFlowerField() {

  scene.background = new THREE.Color(0x87ceeb);

  pages.forEach(p => scene.remove(p));

  const field = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 20),
    new THREE.MeshBasicMaterial({ color: 0x77dd77 })
  );

  field.position.z = -5;

  scene.add(field);

  showMessage(messages[4]);
}

function showMessage(text) {

  const box = document.getElementById("messageBox");

  box.innerText = text;

  box.style.display = "block";
}

function animate() {

  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {

  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});
