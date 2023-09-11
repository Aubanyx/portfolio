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

<template>
  <div ref="container" class="background-3d"></div>
</template>

<script>
import * as THREE from "three";

export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      lines: null,
    };
  },
  mounted() {
    this.initScene();
    this.animate();
    window.addEventListener("resize", this.onWindowResize);
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeDestroy() {
    this.cleanup();
    window.removeEventListener("resize", this.onWindowResize);
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    initScene() {
      // Créez la scène, la caméra et le rendu
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.renderer = new THREE.WebGLRenderer({ alpha: true });

      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.container.appendChild(this.renderer.domElement);

      // Créez les particules et les connexions
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.LineBasicMaterial({
        color: 0x808080,
        opacity: 1,
      });

      const vertices = [];
      const numParticles = 100;

      for (let i = 0; i < numParticles; i++) {
        const vertex = new THREE.Vector3(
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        );
        vertex.multiplyScalar(Math.random() * 1000);
        vertices.push(vertex.x, vertex.y, vertex.z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      this.lines = new THREE.LineSegments(geometry, material);
      this.scene.add(this.lines);

      // Créez la caméra
      this.camera.position.z = 1000;
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    },
    animate() {
      // Demandez une nouvelle animation avant de mettre à jour
      requestAnimationFrame(this.animate);

      // Animez les particules et les connexions
      this.lines.rotation.x += 0.001;
      this.lines.rotation.y += 0.001;

      // Rendre la scène
      this.renderer.render(this.scene, this.camera);
    },
    cleanup() {
      this.scene.remove(this.lines);
      this.lines.geometry.dispose();
      this.lines.material.dispose();

      this.$refs.container.removeChild(this.renderer.domElement);
      this.renderer.dispose();

      cancelAnimationFrame(this.animate);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    handleMouseMove(event) {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      this.lines.rotation.x = mouseY * 0.5;
      this.lines.rotation.y = mouseX * 0.5;
    },
  },
};
</script>

<style>
.background-3d {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: grayscale(1);
}
</style>

<!--<template>-->
<!--  <div ref="threeCanvas"></div>-->
<!--</template>-->

<!--<script>-->
<!--import * as THREE from 'three';-->

<!--export default {-->
<!--  name: 'FloatingSpheres',-->
<!--  data() {-->
<!--    return {-->
<!--      scene: null,-->
<!--      camera: null,-->
<!--      renderer: null,-->
<!--      spheres: [],-->
<!--      movementDirections: [1, -1, 1],-->
<!--      pmremGenerator: null-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    this.initThreeScene();-->
<!--    this.addSpheres();-->
<!--    this.animate();-->
<!--  },-->
<!--  beforeDestroy() {-->
<!--    cancelAnimationFrame(this.animationFrameId);-->
<!--    this.renderer.dispose();-->
<!--  },-->
<!--  methods: {-->
<!--    initThreeScene() {-->
<!--      const width = this.$refs.threeCanvas.offsetWidth;-->
<!--      const height = this.$refs.threeCanvas.offsetHeight;-->

<!--      this.scene = new THREE.Scene();-->
<!--      this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);-->
<!--      this.camera.position.z = 5;-->

<!--      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);-->
<!--      const pointLight = new THREE.PointLight(0xffffff, 1);-->
<!--      pointLight.position.set(5, 5, 5);-->
<!--      this.scene.add(ambientLight, pointLight);-->

<!--      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });-->
<!--      this.renderer.setSize(width, height);-->
<!--      this.$refs.threeCanvas.appendChild(this.renderer.domElement);-->

<!--      this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);-->
<!--      this.pmremGenerator.compileEquirectangularShader();-->

<!--      // new THREE.RGBELoader()-->
<!--      //   .setDataType(THREE.UnsignedByteType)-->
<!--      //   .load('/path/to/your/envmap.hdr', (texture) => {-->
<!--      //     const envMap = this.pmremGenerator.fromEquirectangular(texture).texture;-->
<!--      //     this.scene.environment = envMap;-->
<!--      //     texture.dispose();-->
<!--      //     this.pmremGenerator.dispose();-->
<!--      //   });-->

<!--      window.addEventListener('resize', this.onWindowResize);-->
<!--    },-->
<!--    addSpheres() {-->
<!--      const sizes = [0.4, 1, 0.7];-->
<!--      const positions = [-->
<!--        { x: -2, y: 0, z: 0 },-->
<!--        { x: 0, y: -1, z: 0 },-->
<!--        { x: 2, y: 1, z: 0 }-->
<!--      ];-->
<!--      const colors = [0xe8c246, 0xffffff, 0xffffff];-->

<!--      for (let i = 0; i < sizes.length; i++) {-->
<!--        const geometry = new THREE.SphereGeometry(sizes[i], 32, 32);-->
<!--        const material = new THREE.MeshStandardMaterial({-->
<!--          color: colors[i],-->
<!--          transparent: true,-->
<!--          opacity: 0.2,-->
<!--          metalness: 0.9,-->
<!--          roughness: 0.1,-->
<!--        });-->
<!--        const sphere = new THREE.Mesh(geometry, material);-->

<!--        sphere.position.set(positions[i].x, positions[i].y, positions[i].z);-->

<!--        this.spheres.push(sphere);-->
<!--        this.scene.add(sphere);-->
<!--      }-->
<!--    },-->
<!--    animate() {-->
<!--      this.animationFrameId = requestAnimationFrame(this.animate);-->

<!--      for (let i = 0; i < this.spheres.length; i++) {-->
<!--        const sphere = this.spheres[i];-->
<!--        sphere.position.y += 0.001 * this.movementDirections[i];-->
<!--        if (sphere.position.y > 1.5 || sphere.position.y < -1.5) {-->
<!--          this.movementDirections[i] = -this.movementDirections[i];-->
<!--        }-->
<!--      }-->

<!--      this.renderer.render(this.scene, this.camera);-->
<!--    },-->
<!--    onWindowResize() {-->
<!--      const width = this.$refs.threeCanvas.offsetWidth;-->
<!--      const height = this.$refs.threeCanvas.offsetHeight;-->

<!--      this.camera.aspect = width / height;-->
<!--      this.camera.updateProjectionMatrix();-->

<!--      this.renderer.setSize(width, height);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--div {-->
<!--  width: 100%;-->
<!--  height: 100vh;-->
<!--  overflow: hidden;-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  z-index: 1;-->
<!--}-->
<!--</style>-->
