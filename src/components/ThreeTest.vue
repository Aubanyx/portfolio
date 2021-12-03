<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import * as Three from 'three';

export default {
  name: "ThreeTest",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      container: null,
      canvas: null,
    }
  },
  methods: {
    init() {
      // let container = document.getElementById('container');

      //----------------------------------------------------------------------------------------------------
      // CAMERA
      //----------------------------------------------------------------------------------------------------

      this.camera = new Three.PerspectiveCamera(70, this.container.clientWidth / this.container.clientHeight, 0.01, 10);
      this.camera.position.z = 1;

      //----------------------------------------------------------------------------------------------------
      // SCENE
      //----------------------------------------------------------------------------------------------------

      this.scene = new Three.Scene();

      //----------------------------------------------------------------------------------------------------
      // GEOMETRY
      //----------------------------------------------------------------------------------------------------

      // let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      const radius = 0.55;  // ui: radius
      const tubeRadius = 0.1;  // ui: tubeRadius
      const radialSegments = 3;  // ui: radialSegments
      const tubularSegments = 100;  // ui: tubularSegments
      let geometry = new Three.TorusGeometry( radius, tubeRadius, radialSegments, tubularSegments );

      //----------------------------------------------------------------------------------------------------
      // PARTICLE
      //----------------------------------------------------------------------------------------------------

      const particlesGeometry = new Three.BufferGeometry;
      const particlesCnt = 5000;

      const posArray = new Float32Array(particlesCnt * 3);

      for (let i = 0; i < particlesCnt * 3; i++) {
        // posArray[i] = Math.random();
        // posArray[i] = Math.random() - 0.5;
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 8);
      }

      particlesGeometry.setAttribute('position', new Three.BufferAttribute(posArray, 3));

      //----------------------------------------------------------------------------------------------------
      // MATERIAL
      //----------------------------------------------------------------------------------------------------

      let material = new Three.PointsMaterial({
        size: 0.005,
        color: 'black'
      });

      let particlesMaterial = new Three.PointsMaterial({
        size: 0.005,
        // transparent: true,
        color: 'black',
        // blending: Three.AdditiveBlending,
      });
      // material.color = new Three.Color(0xff0000)

      //----------------------------------------------------------------------------------------------------
      // MESH
      //----------------------------------------------------------------------------------------------------

      this.mesh = new Three.Points(geometry, material);
      const particlesMesh = new Three.Points(particlesGeometry, particlesMaterial);
      this.scene.add(this.mesh, particlesMesh);

      //----------------------------------------------------------------------------------------------------
      // RENDERER
      //----------------------------------------------------------------------------------------------------

      this.renderer = new Three.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.container.appendChild(this.renderer.domElement);

    },
    // getCanvasRelativePosition(event) {
    //   let container = document.getElementById('container');
    //
    //   const rect = container.getBoundingClientRect();
    //   return {
    //     x: (event.clientX - rect.left) * container.width / rect.width,
    //     y: (event.clientY - rect.top) * container.height / rect.height,
    //   };
    // },
    // setPosition(e) {
    //   const temp = new Three.Vector3();
    //   let container = document.getElementById('container');
    //   const state = { x: 0, y: 0 };
    //   const camera = new Three.OrthographicCamera(-2, 2, 1, -1, -1, 1);
    //
    //   const pos = this.getCanvasRelativePosition(e);
    //   const x = pos.x / container.width * 2 - 1;
    //   const y = pos.y / container.height * -2 + 1;
    //   temp.set(x, y, 0).unproject(camera);
    //   state.x = temp.x;
    //   state.y = temp.y;
    // },
    animate() {
      requestAnimationFrame(this.animate);
      // this.mesh.rotation.x += 0.01;
      // this.mesh.rotation.y += 0.01;
      this.mesh.rotation.z -= 0.001;
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.container = document.getElementById('container');

    this.init();
    this.animate();
  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100vh;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
}
</style>
