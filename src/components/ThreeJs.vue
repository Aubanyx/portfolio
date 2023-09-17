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
