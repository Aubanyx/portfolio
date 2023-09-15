<!--<template>-->
<!--  <div>-->
<!--    <div class="threeContainer" @mousemove="particlesMove()"></div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import * as Three from "three";-->

<!--export default {-->
<!--  name: "ThreeTest",-->
<!--  data() {-->
<!--    return {-->
<!--      camera: null,-->
<!--      scene: null,-->
<!--      renderer: null,-->
<!--      mesh: null,-->
<!--      particlesMesh: null,-->
<!--      container: null,-->
<!--      mouseX: 0,-->
<!--      mouseY: 0,-->
<!--      position: null,-->
<!--      currentColor: null,-->
<!--      color: null,-->
<!--      particlesMaterial: null,-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    init() {-->
<!--      this.scene = new Three.Scene();-->

<!--      const particlesGeometry = new Three.BufferGeometry();-->
<!--      const particlesCnt = 5000;-->

<!--      const posArray = new Float32Array(particlesCnt * 3);-->

<!--      for (let i = 0; i < particlesCnt * 3; i++) {-->
<!--        posArray[i] = (Math.random() - 0.5) * (Math.random() * 8);-->
<!--      }-->

<!--      particlesGeometry.setAttribute(-->
<!--        "position",-->
<!--        new Three.BufferAttribute(posArray, 3)-->
<!--      );-->

<!--      // this.mesh = new Three.Points(geometry, material);-->
<!--      this.particlesMesh = new Three.Points(-->
<!--        particlesGeometry,-->
<!--        this.particlesMaterial-->
<!--      );-->
<!--      this.scene.add(this.particlesMesh);-->

<!--      const sizes = {-->
<!--        width: this.container.clientWidth,-->
<!--        height: this.container.clientHeight,-->
<!--      };-->

<!--      window.addEventListener("resize", () => {-->
<!--        // Update sizes-->
<!--        sizes.width = this.container.clientWidth;-->
<!--        sizes.height = this.container.clientHeight;-->

<!--        //Update camera-->
<!--        this.camera.aspect = sizes.width / sizes.height;-->
<!--        this.camera.updateProjectionMatrix();-->

<!--        //Update renderer-->
<!--        this.renderer.setSize(sizes.width, sizes.height);-->
<!--        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));-->
<!--      });-->

<!--      this.camera = new Three.PerspectiveCamera(-->
<!--        70,-->
<!--        sizes.width / sizes.height,-->
<!--        0.1,-->
<!--        100-->
<!--      );-->
<!--      this.camera.position.x = 0;-->
<!--      this.camera.position.y = 0;-->
<!--      this.camera.position.z = 1;-->

<!--      this.renderer = new Three.WebGLRenderer({-->
<!--        antialias: true,-->
<!--        alpha: true,-->
<!--      });-->
<!--      this.renderer.setSize(sizes.width, sizes.height);-->
<!--      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));-->
<!--      this.container.appendChild(this.renderer.domElement);-->
<!--    },-->
<!--    animate() {-->
<!--      requestAnimationFrame(this.animate);-->

<!--      this.particlesMesh.rotation.x = -this.mouseY * 0.001;-->
<!--      this.particlesMesh.rotation.y = -this.mouseX * 0.001;-->

<!--      this.particlesMesh.rotation.z += 0.0005;-->
<!--      this.renderer.render(this.scene, this.camera);-->
<!--    },-->
<!--    animateParticles() {-->
<!--      const event = window.event;-->
<!--      this.mouseX = event.clientX;-->
<!--      this.mouseY = event.clientY;-->
<!--    },-->
<!--    particlesMove() {-->
<!--      this.position = this.animateParticles();-->
<!--      this.renderer.render(this.scene, this.camera);-->
<!--    },-->
<!--  },-->
<!--  created() {-->
<!--    Event.$on("changeParticlesColor", () => {-->
<!--      // if (localStorage.getItem("currentTheme") === "lightTheme") {-->
<!--      if (localStorage.getItem("themeColor") === "lightTheme") {-->
<!--        this.particlesMaterial.color.setHex(0xffffff);-->
<!--      } else if (localStorage.getItem("themeColor") === "darkTheme") {-->
<!--        // this.particlesMaterial.color.setHex(0xd25d5f);-->
<!--        this.particlesMaterial.color.setHex(0x272727);-->
<!--      }-->
<!--    });-->
<!--  },-->
<!--  mounted() {-->
<!--    this.container = document.querySelector(".threeContainer");-->
<!--    if (localStorage.getItem("themeColor") === "lightTheme") {-->
<!--      this.color = 0xd25d5f;-->
<!--    } else if (localStorage.getItem("themeColor") === "darkTheme") {-->
<!--      this.color = 0xffffff;-->
<!--    }-->
<!--    this.particlesMaterial = new Three.PointsMaterial({-->
<!--      size: 0.005,-->
<!--      // transparent: true,-->
<!--      // color: "#d25d5f",-->
<!--      color: this.color,-->
<!--    });-->
<!--    this.init();-->
<!--    this.animate();-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.threeContainer {-->
<!--  width: 100%;-->
<!--  height: 100vh;-->
<!--  background: transparent;-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  right: 0;-->
<!--  z-index: 1;-->
<!--}-->
<!--</style>-->

<!--<template>-->
<!--  <div ref="container" class="background-3d"></div>-->
<!--</template>-->

<!--<script>-->
<!--import * as THREE from "three";-->

<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      scene: null,-->
<!--      camera: null,-->
<!--      renderer: null,-->
<!--      lines: null,-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    this.initScene();-->
<!--    this.animate();-->
<!--    window.addEventListener("resize", this.onWindowResize);-->
<!--    window.addEventListener("mousemove", this.handleMouseMove);-->
<!--  },-->
<!--  beforeDestroy() {-->
<!--    this.cleanup();-->
<!--    window.removeEventListener("resize", this.onWindowResize);-->
<!--    window.removeEventListener("mousemove", this.handleMouseMove);-->
<!--  },-->
<!--  methods: {-->
<!--    initScene() {-->
<!--      // Créez la scène, la caméra et le rendu-->
<!--      this.scene = new THREE.Scene();-->
<!--      this.camera = new THREE.PerspectiveCamera(-->
<!--        75,-->
<!--        window.innerWidth / window.innerHeight,-->
<!--        0.1,-->
<!--        1000-->
<!--      );-->
<!--      this.renderer = new THREE.WebGLRenderer({ alpha: true });-->

<!--      this.renderer.setSize(window.innerWidth, window.innerHeight);-->
<!--      this.$refs.container.appendChild(this.renderer.domElement);-->

<!--      // Créez les particules et les connexions-->
<!--      const geometry = new THREE.BufferGeometry();-->
<!--      const material = new THREE.LineBasicMaterial({-->
<!--        color: 0x808080,-->
<!--        opacity: 1,-->
<!--      });-->

<!--      const vertices = [];-->
<!--      const numParticles = 100;-->

<!--      for (let i = 0; i < numParticles; i++) {-->
<!--        const vertex = new THREE.Vector3(-->
<!--          Math.random() * 2 - 1,-->
<!--          Math.random() * 2 - 1,-->
<!--          Math.random() * 2 - 1-->
<!--        );-->
<!--        vertex.multiplyScalar(Math.random() * 1000);-->
<!--        vertices.push(vertex.x, vertex.y, vertex.z);-->
<!--      }-->

<!--      geometry.setAttribute(-->
<!--        "position",-->
<!--        new THREE.Float32BufferAttribute(vertices, 3)-->
<!--      );-->

<!--      this.lines = new THREE.LineSegments(geometry, material);-->
<!--      this.scene.add(this.lines);-->

<!--      // Créez la caméra-->
<!--      this.camera.position.z = 1000;-->
<!--      this.camera.lookAt(new THREE.Vector3(0, 0, 0));-->
<!--    },-->
<!--    animate() {-->
<!--      // Demandez une nouvelle animation avant de mettre à jour-->
<!--      requestAnimationFrame(this.animate);-->

<!--      // Animez les particules et les connexions-->
<!--      this.lines.rotation.x += 0.001;-->
<!--      this.lines.rotation.y += 0.001;-->

<!--      // Rendre la scène-->
<!--      this.renderer.render(this.scene, this.camera);-->
<!--    },-->
<!--    cleanup() {-->
<!--      this.scene.remove(this.lines);-->
<!--      this.lines.geometry.dispose();-->
<!--      this.lines.material.dispose();-->

<!--      this.$refs.container.removeChild(this.renderer.domElement);-->
<!--      this.renderer.dispose();-->

<!--      cancelAnimationFrame(this.animate);-->
<!--    },-->
<!--    onWindowResize() {-->
<!--      this.camera.aspect = window.innerWidth / window.innerHeight;-->
<!--      this.camera.updateProjectionMatrix();-->
<!--      this.renderer.setSize(window.innerWidth, window.innerHeight);-->
<!--    },-->
<!--    handleMouseMove(event) {-->
<!--      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;-->
<!--      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;-->

<!--      this.lines.rotation.x = mouseY * 0.5;-->
<!--      this.lines.rotation.y = mouseX * 0.5;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.background-3d {-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  z-index: 1;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  overflow: hidden;-->
<!--  filter: grayscale(1);-->
<!--}-->
<!--</style>-->

<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "ThreeDisque",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      disque: null,
      innerDisque: null,
      mouse: new THREE.Vector2(),
      growing: false,
      shrinking: false,
      targetRadius: 10
    };
  },
  mounted() {
    this.initThree();
    window.addEventListener("resize", this.onWindowResize);
    this.$refs.threeContainer.addEventListener("mousemove", this.onMouseMove);
    this.$refs.threeContainer.addEventListener("mousedown", this.onMouseDown);
    this.$refs.threeContainer.addEventListener("mouseup", this.onMouseUp);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize);
    this.$refs.threeContainer.removeEventListener("mousemove", this.onMouseMove);
    this.$refs.threeContainer.removeEventListener("mousedown", this.onMouseDown);
    this.$refs.threeContainer.removeEventListener("mouseup", this.onMouseUp);
  },
  methods: {
    initThree() {
      const container = this.$refs.threeContainer;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
      );

      const geometry = new THREE.RingBufferGeometry(0.8, 1.2, 128);
      const material = new THREE.MeshPhongMaterial({
        color: 0xe8c246,
        side: THREE.DoubleSide,
        shininess: 10,
      });
      this.disque = new THREE.Mesh(geometry, material);
      this.scene.add(this.disque);

      const innerGeometry = new THREE.RingBufferGeometry(0.3, 0.7, 128);
      this.innerDisque = new THREE.Mesh(innerGeometry, material);
      this.scene.add(this.innerDisque);

      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 0, 2);
      this.scene.add(light);

      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      this.scene.add(ambientLight);

      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setSize(container.offsetWidth, container.offsetHeight);
      container.appendChild(this.renderer.domElement);

      this.camera.position.z = 1;
      // this.disque.position.x = 1.4;
      // this.innerDisque.position.x = 1.4;

      this.disque.position.x = 1.3;
      this.disque.position.y = 0.65;
      this.innerDisque.position.x = 1.3;
      this.innerDisque.position.y = 0.65;

      this.animate();
    },
    animate() {
      if (this.growing) {
        if (this.disque.geometry.parameters.outerRadius < this.targetRadius) {
          this.disque.geometry.parameters.outerRadius += 0.1;
          this.disque.geometry = new THREE.RingBufferGeometry(
            this.disque.geometry.parameters.innerRadius,
            this.disque.geometry.parameters.outerRadius,
            128
          );
        } else {
          this.growing = false;
        }
      }

      if (this.shrinking) {
        if (this.disque.geometry.parameters.outerRadius > 1.2) {
          this.disque.geometry.parameters.outerRadius -= 0.1;
          this.disque.geometry = new THREE.RingBufferGeometry(
            this.disque.geometry.parameters.innerRadius,
            this.disque.geometry.parameters.outerRadius,
            128
          );
        } else {
          this.shrinking = false;
        }
      }

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },
    onMouseMove(event) {
      const container = this.$refs.threeContainer;

      this.mouse.x = (event.clientX / container.offsetWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / container.offsetHeight) * 2 + 1;

      this.innerDisque.rotation.x = this.mouse.y * Math.PI * 0.05;
      this.innerDisque.rotation.y = this.mouse.x * Math.PI * 0.05;
    },
    onMouseDown() {
      this.growing = true;
      this.shrinking = false;
    },
    onMouseUp() {
      this.growing = false;
      this.shrinking = true;
    },
    onWindowResize() {
      const container = this.$refs.threeContainer;
      this.camera.aspect = container.offsetWidth / container.offsetHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    },
  },
};
</script>

<style scoped>
.three-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
}
</style>

<!--<template>-->
<!--  <div ref="threeContainer" class="three-container"></div>-->
<!--</template>-->

<!--<script>-->
<!--import * as THREE from "three";-->
<!--import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";-->

<!--export default {-->
<!--  name: "ThreeDisque",-->
<!--  data() {-->
<!--    return {-->
<!--      scene: null,-->
<!--      camera: null,-->
<!--      renderer: null,-->
<!--      disque: null,-->
<!--      innerDisque: null,-->
<!--      mouse: new THREE.Vector2(),-->
<!--      growing: false,-->
<!--      shrinking: false,-->
<!--      targetRadius: 10,-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    this.initThree();-->
<!--    window.addEventListener("resize", this.onWindowResize);-->
<!--    this.$refs.threeContainer.addEventListener("mousemove", this.onMouseMove);-->
<!--    this.$refs.threeContainer.addEventListener("mousedown", this.onMouseDown);-->
<!--    this.$refs.threeContainer.addEventListener("mouseup", this.onMouseUp);-->
<!--  },-->
<!--  beforeDestroy() {-->
<!--    window.removeEventListener("resize", this.onWindowResize);-->
<!--    this.$refs.threeContainer.removeEventListener(-->
<!--      "mousemove",-->
<!--      this.onMouseMove-->
<!--    );-->
<!--    this.$refs.threeContainer.removeEventListener(-->
<!--      "mousedown",-->
<!--      this.onMouseDown-->
<!--    );-->
<!--    this.$refs.threeContainer.removeEventListener("mouseup", this.onMouseUp);-->
<!--  },-->
<!--  methods: {-->
<!--    initThree() {-->
<!--      const container = this.$refs.threeContainer;-->

<!--      // Define the layers-->
<!--      const DISQUE_LAYER = 0;-->
<!--      const BENCH_LAYER = 1;-->

<!--      this.scene = new THREE.Scene();-->
<!--      this.camera = new THREE.PerspectiveCamera(-->
<!--        75,-->
<!--        container.offsetWidth / container.offsetHeight,-->
<!--        0.1,-->
<!--        1000-->
<!--      );-->

<!--      // Disques setup-->
<!--      const geometry = new THREE.RingBufferGeometry(0.8, 1.2, 128);-->
<!--      const material = new THREE.MeshPhongMaterial({-->
<!--        color: 0xe8c246,-->
<!--        side: THREE.DoubleSide,-->
<!--        shininess: 10,-->
<!--      });-->
<!--      this.disque = new THREE.Mesh(geometry, material);-->
<!--      this.disque.layers.set(DISQUE_LAYER);-->
<!--      this.scene.add(this.disque);-->

<!--      const innerGeometry = new THREE.RingBufferGeometry(0.3, 0.7, 128);-->
<!--      this.innerDisque = new THREE.Mesh(innerGeometry, material);-->
<!--      this.innerDisque.layers.set(DISQUE_LAYER);-->
<!--      this.scene.add(this.innerDisque);-->

<!--      // Lights for the disques-->

<!--      const light = new THREE.PointLight(0xffffff, 1, 100);-->
<!--      light.position.set(0, 0, 2);-->
<!--      this.scene.add(light);-->

<!--      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);-->
<!--      this.scene.add(ambientLight);-->

<!--      light.layers.set(DISQUE_LAYER);-->
<!--      ambientLight.layers.set(DISQUE_LAYER);-->

<!--      // Bench setup with its light-->
<!--      const loader = new GLTFLoader();-->
<!--      loader.load("models/bench.glb", (gltf) => {-->
<!--        const bench = gltf.scene;-->
<!--        bench.scale.set(0.2, 0.2, 0.2);-->
<!--        bench.position.set(0.5, -0.4, 0.5);-->
<!--        bench.layers.set(BENCH_LAYER);-->
<!--        this.scene.add(bench);-->

<!--        // Light for the bench-->
<!--        const benchLight = new THREE.SpotLight(0xffffff, 1.5); // Augmentez l'intensité si nécessaire-->
<!--        benchLight.position.set(1.5, 0, 3);-->
<!--        benchLight.target = bench;-->
<!--        benchLight.angle = Math.PI / 6;-->
<!--        benchLight.distance = 7; // Augmentez si nécessaire-->
<!--        benchLight.layers.set(BENCH_LAYER);-->
<!--        this.scene.add(benchLight);-->

<!--// Ajout de l'éclairage d'ambiance pour le banc-->
<!--        const benchAmbientLight = new THREE.AmbientLight(0xffffff, 0.6); // Ajustez l'intensité selon le besoin-->
<!--        benchAmbientLight.layers.set(BENCH_LAYER);-->
<!--        this.scene.add(benchAmbientLight);-->

<!--// Vous devez vous assurer que votre caméra voit les deux calques.-->
<!--        this.camera.layers.set(DISQUE_LAYER);-->
<!--        this.camera.layers.enable(BENCH_LAYER);-->
<!--      });-->

<!--      // Camera can see all layers-->
<!--      this.camera.layers.enableAll();-->

<!--      // Renderer setup-->
<!--      this.renderer = new THREE.WebGLRenderer({-->
<!--        antialias: true,-->
<!--        alpha: true,-->
<!--      });-->
<!--      this.renderer.setClearColor(0x000000, 0);-->
<!--      this.renderer.setSize(container.offsetWidth, container.offsetHeight);-->
<!--      container.appendChild(this.renderer.domElement);-->

<!--      this.camera.position.z = 1;-->
<!--      this.disque.position.x = 1.4;-->
<!--      this.innerDisque.position.x = 1.4;-->

<!--      this.animate();-->
<!--    },-->
<!--    animate() {-->
<!--      if (this.growing) {-->
<!--        if (this.disque.geometry.parameters.outerRadius < this.targetRadius) {-->
<!--          this.disque.geometry.parameters.outerRadius += 0.1;-->
<!--          this.disque.geometry = new THREE.RingBufferGeometry(-->
<!--            this.disque.geometry.parameters.innerRadius,-->
<!--            this.disque.geometry.parameters.outerRadius,-->
<!--            128-->
<!--          );-->
<!--        } else {-->
<!--          this.growing = false;-->
<!--        }-->
<!--      }-->

<!--      if (this.shrinking) {-->
<!--        if (this.disque.geometry.parameters.outerRadius > 1.2) {-->
<!--          this.disque.geometry.parameters.outerRadius -= 0.1;-->
<!--          this.disque.geometry = new THREE.RingBufferGeometry(-->
<!--            this.disque.geometry.parameters.innerRadius,-->
<!--            this.disque.geometry.parameters.outerRadius,-->
<!--            128-->
<!--          );-->
<!--        } else {-->
<!--          this.shrinking = false;-->
<!--        }-->
<!--      }-->

<!--      this.renderer.render(this.scene, this.camera);-->
<!--      requestAnimationFrame(this.animate);-->
<!--    },-->
<!--    onMouseMove(event) {-->
<!--      const container = this.$refs.threeContainer;-->

<!--      this.mouse.x = (event.clientX / container.offsetWidth) * 2 - 1;-->
<!--      this.mouse.y = -(event.clientY / container.offsetHeight) * 2 + 1;-->

<!--      this.innerDisque.rotation.x = this.mouse.y * Math.PI * 0.05;-->
<!--      this.innerDisque.rotation.y = this.mouse.x * Math.PI * 0.05;-->
<!--    },-->
<!--    onMouseDown() {-->
<!--      this.growing = true;-->
<!--      this.shrinking = false;-->
<!--    },-->
<!--    onMouseUp() {-->
<!--      this.growing = false;-->
<!--      this.shrinking = true;-->
<!--    },-->
<!--    onWindowResize() {-->
<!--      const container = this.$refs.threeContainer;-->
<!--      this.camera.aspect = container.offsetWidth / container.offsetHeight;-->
<!--      this.camera.updateProjectionMatrix();-->
<!--      this.renderer.setSize(container.offsetWidth, container.offsetHeight);-->
<!--    },  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.three-container {-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  width: 100%;-->
<!--  height: 100vh;-->
<!--  overflow: hidden;-->
<!--  z-index: 1;-->
<!--}-->
<!--</style>-->
