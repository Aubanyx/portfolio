<template>
  <div>
    <div id="container" @mousemove="particlesMove()"></div>
  </div>
</template>

<script>
import * as Three from "three";

export default {
  name: "ThreeTest",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      particlesMesh: null,
      container: null,
      mouseX: 0,
      mouseY: 0,
      position: null,
      currentColor: null,
      color: null,
      particlesMaterial: null,
    };
  },
  // computed: {
  //   isDarkThemeActive() {
  //     return this.$store.state.darkTheme;
  //   },
  //   test() {
  //     return this.color;
  //   },
  // },
  methods: {
    init() {
      //----------------------------------------------------------------------------------------------------
      // SCENE
      //----------------------------------------------------------------------------------------------------

      this.scene = new Three.Scene();

      //----------------------------------------------------------------------------------------------------
      // GEOMETRY
      //----------------------------------------------------------------------------------------------------
      // const style = getComputedStyle(document.body).getPropertyValue(
      //   "--firstColor"
      // );

      // let colorValue = getComputedStyle(document.body).getPropertyValue(
      //   "--firstColor"
      // );
      //
      // console.log(colorValue, "test -1");
      //
      // let currentColor = colorValue;
      // let hex = parseInt(currentColor.replace(/#/, ""), 16);
      // // let style = new Three.Color(0xd25d5f);
      // console.log(hex.toString(16), "test ?");
      //
      // if (hex.toString(16) === "d25d5f") {
      //   console.log("ok ok", "test ok");
      // } else if (hex.toString(16) === "6a5acd") {
      //   console.log("no no", "test no");
      // } else {
      //   console.log("NAN NAN", "test NAN");
      // }
      //
      // console.log(currentColor, "test 0");
      // console.log(style, "test 1");

      // this.currentColor = getComputedStyle(document.body).getPropertyValue(
      //   "--firstColor"
      // );
      // this.color = parseInt(this.currentColor.replace(/#/, ""), 16);

      // console.log(this.isDarkThemeActive, "test computed");
      // if (this.isDarkThemeActive) {
      //   console.log("true");
      // } else if (!this.isDarkThemeActive) {
      //   console.log("false");
      // }

      const radius = 0.55;
      const tubeRadius = 0.1;
      const radialSegments = 3;
      const tubularSegments = 100;
      const geometry = new Three.TorusGeometry(
        radius,
        tubeRadius,
        radialSegments,
        tubularSegments
      );

      //----------------------------------------------------------------------------------------------------
      // PARTICLE
      //----------------------------------------------------------------------------------------------------

      const particlesGeometry = new Three.BufferGeometry();
      const particlesCnt = 5000;

      const posArray = new Float32Array(particlesCnt * 3);

      for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 8);
      }

      particlesGeometry.setAttribute(
        "position",
        new Three.BufferAttribute(posArray, 3)
      );

      //----------------------------------------------------------------------------------------------------
      // MATERIAL
      //----------------------------------------------------------------------------------------------------

      const material = new Three.PointsMaterial({
        size: 0.005,
        color: "black",
      });

      // const particlesMaterial = new Three.PointsMaterial({
      //   size: 0.005,
      //   // transparent: true,
      //   // color: "#d25d5f",
      //   color: this.color,
      // });

      console.log(localStorage.getItem("currentTheme"), "help ?");

      // if (localStorage.getItem("currentTheme") === "darkTheme") {
      //   particlesMaterial.color.setHex(0x6a5acd);
      // } else {
      //   particlesMaterial.color.setHex(0xd25d5f);
      // }
      // particlesMaterial.color.setHex(0x6a5acd);

      //----------------------------------------------------------------------------------------------------
      // MESH
      //----------------------------------------------------------------------------------------------------

      this.mesh = new Three.Points(geometry, material);
      this.particlesMesh = new Three.Points(
        particlesGeometry,
        this.particlesMaterial
      );
      this.scene.add(this.mesh, this.particlesMesh);

      //----------------------------------------------------------------------------------------------------
      // SIZE
      //----------------------------------------------------------------------------------------------------

      const sizes = {
        width: this.container.clientWidth,
        height: this.container.clientHeight,
      };

      window.addEventListener("resize", () => {
        // Update sizes
        sizes.width = this.container.clientWidth;
        sizes.height = this.container.clientHeight;

        //Update camera
        this.camera.aspect = sizes.width / sizes.height;
        // this.camera.updateProjectMatrix();

        //Update renderer
        this.renderer.setSize(sizes.width, sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      //----------------------------------------------------------------------------------------------------
      // CAMERA
      //----------------------------------------------------------------------------------------------------

      this.camera = new Three.PerspectiveCamera(
        70,
        sizes.width / sizes.height,
        0.1,
        100
      );
      this.camera.position.x = 0;
      this.camera.position.y = 0;
      this.camera.position.z = 1;

      //----------------------------------------------------------------------------------------------------
      // RENDERER
      //----------------------------------------------------------------------------------------------------

      this.renderer = new Three.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setSize(sizes.width, sizes.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.container.appendChild(this.renderer.domElement);
    },
    animate() {
      requestAnimationFrame(this.animate);

      //Update objects
      this.particlesMesh.rotation.x = -this.mouseY * 0.001;
      this.particlesMesh.rotation.y = -this.mouseX * 0.001;
      this.mesh.rotation.x = this.mouseY * 0.00008;
      this.mesh.rotation.y = this.mouseX * 0.00008;

      // this.mesh.rotation.x += 0.01;
      // this.mesh.rotation.y += 0.01;

      this.particlesMesh.rotation.z += 0.0005;
      this.mesh.rotation.z -= 0.001;
      this.renderer.render(this.scene, this.camera);
    },
    animateParticles() {
      // requestAnimationFrame(this.animateParticles);

      const event = window.event;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;

      // requestAnimationFrame(this.animateParticles);
      // this.renderer.render(this.scene, this.camera);
    },
    particlesMove() {
      this.position = this.animateParticles();
      this.renderer.render(this.scene, this.camera);
    },
    // changeParticlesColor() {
    //   this.particlesMaterial.color.setStyle("--firstColor");
    // },
  },
  created() {
    Event.$on("changeParticlesColor", () => {
      if (localStorage.getItem("currentTheme") === "lightTheme") {
        this.particlesMaterial.color.setHex(0xffffff);
      } else if (localStorage.getItem("currentTheme") === "darkTheme"){
        this.particlesMaterial.color.setHex(0xd25d5f);
      } else {
        console.log("wtf");
      }
    });
    // if (localStorage.getItem("currentTheme") === "darkTheme") {
    //   Event.$on("changeParticlesColor", () =>

    //     this.particlesMaterial.color.setHex(0x6a5acd)
    //   );
    // } else if (localStorage.getItem("currentTheme") === "lightTheme") {
    //   Event.$on("changeParticlesColor", () =>
    //     this.particlesMaterial.color.setHex(0xd25d5f)
    //   );
    // } else {
    //   Event.$on("changeParticlesColor", () => console.log("test 3"));
    // }
    // //1
    // if (localStorage.getItem("currentTheme") == "darkTheme") {
    //   Event.$on("changeParticlesColor", () =>
    //     this.particlesMaterial.color.setHex(0x6a5acd)
    //   );
    // } else {
    //   Event.$on("changeParticlesColor", () => console.log("test 1"));
    // }
    // //2
    // if (localStorage.getItem("currentTheme") == "") {
    //   Event.$on("changeParticlesColor", () =>
    //     this.particlesMaterial.color.setHex(0xd25d5f)
    //   );
    // } else {
    //   Event.$on("changeParticlesColor", () => console.log("test 2"));
    // }
    // Event.$on("changeParticlesColor", () =>
    //   this.particlesMaterial.color.setHex(0xd25d5f)
    // );
  },
  mounted() {
    this.container = document.getElementById("container");
    // this.currentColor = getComputedStyle(document.body).getPropertyValue(
    //   "--firstColor"
    // );
    // this.color = parseInt(this.currentColor.replace(/#/, ""), 16);
    this.particlesMaterial = new Three.PointsMaterial({
      size: 0.005,
      // transparent: true,
      // color: "#d25d5f",
      color: "#d25d5f",
    });
    // console.log(this.particlesMaterial.color.setStyle("--firstColor"));
    // console.log(this.particlesMaterial.color.setHex(0xd25d5f));
    this.init();
    // this.animateParticles();
    this.animate();
  },
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100vh;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
</style>
