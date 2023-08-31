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
<!--  // computed: {-->
<!--  //   isDarkThemeActive() {-->
<!--  //     return this.$store.state.darkTheme;-->
<!--  //   },-->
<!--  //   test() {-->
<!--  //     return this.color;-->
<!--  //   },-->
<!--  // },-->
<!--  methods: {-->
<!--    init() {-->
<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      // SCENE-->
<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->

<!--      this.scene = new Three.Scene();-->

<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      // GEOMETRY-->
<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      // const style = getComputedStyle(document.body).getPropertyValue(-->
<!--      //   "&#45;&#45;firstColor"-->
<!--      // );-->

<!--      // let colorValue = getComputedStyle(document.body).getPropertyValue(-->
<!--      //   "&#45;&#45;firstColor"-->
<!--      // );-->
<!--      //-->
<!--      // console.log(colorValue, "test -1");-->
<!--      //-->
<!--      // let currentColor = colorValue;-->
<!--      // let hex = parseInt(currentColor.replace(/#/, ""), 16);-->
<!--      // // let style = new Three.Color(0xd25d5f);-->
<!--      // console.log(hex.toString(16), "test ?");-->
<!--      //-->
<!--      // if (hex.toString(16) === "d25d5f") {-->
<!--      //   console.log("ok ok", "test ok");-->
<!--      // } else if (hex.toString(16) === "6a5acd") {-->
<!--      //   console.log("no no", "test no");-->
<!--      // } else {-->
<!--      //   console.log("NAN NAN", "test NAN");-->
<!--      // }-->
<!--      //-->
<!--      // console.log(currentColor, "test 0");-->
<!--      // console.log(style, "test 1");-->

<!--      // this.currentColor = getComputedStyle(document.body).getPropertyValue(-->
<!--      //   "&#45;&#45;firstColor"-->
<!--      // );-->
<!--      // this.color = parseInt(this.currentColor.replace(/#/, ""), 16);-->

<!--      // console.log(this.isDarkThemeActive, "test computed");-->
<!--      // if (this.isDarkThemeActive) {-->
<!--      //   console.log("true");-->
<!--      // } else if (!this.isDarkThemeActive) {-->
<!--      //   console.log("false");-->
<!--      // }-->

<!--      // const radius = 0.55;-->
<!--      // const tubeRadius = 0.1;-->
<!--      // const radialSegments = 3;-->
<!--      // const tubularSegments = 100;-->
<!--      // const geometry = new Three.TorusGeometry(-->
<!--      //   radius,-->
<!--      //   tubeRadius,-->
<!--      //   radialSegments,-->
<!--      //   tubularSegments-->
<!--      // );-->

<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      // PARTICLE-->
<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->

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

<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      // MATERIAL-->
<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->

<!--      // const material = new Three.PointsMaterial({-->
<!--      //   size: 0.005,-->
<!--      //   color: "black",-->
<!--      // });-->

<!--      // const particlesMaterial = new Three.PointsMaterial({-->
<!--      //   size: 0.005,-->
<!--      //   // transparent: true,-->
<!--      //   // color: "#d25d5f",-->
<!--      //   color: this.color,-->
<!--      // });-->

<!--      // console.log(localStorage.getItem("currentTheme"), "help ?");-->

<!--      // if (localStorage.getItem("currentTheme") === "darkTheme") {-->
<!--      //   particlesMaterial.color.setHex(0x6a5acd);-->
<!--      // } else {-->
<!--      //   particlesMaterial.color.setHex(0xd25d5f);-->
<!--      // }-->
<!--      // particlesMaterial.color.setHex(0x6a5acd);-->

<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      // MESH-->
<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->

<!--      // this.mesh = new Three.Points(geometry, material);-->
<!--      this.particlesMesh = new Three.Points(-->
<!--        particlesGeometry,-->
<!--        this.particlesMaterial-->
<!--      );-->
<!--      this.scene.add(this.particlesMesh);-->

<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      // SIZE-->
<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->

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

<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      // CAMERA-->
<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->

<!--      this.camera = new Three.PerspectiveCamera(-->
<!--        70,-->
<!--        sizes.width / sizes.height,-->
<!--        0.1,-->
<!--        100-->
<!--      );-->
<!--      this.camera.position.x = 0;-->
<!--      this.camera.position.y = 0;-->
<!--      this.camera.position.z = 1;-->

<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
<!--      // RENDERER-->
<!--      //&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->

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

<!--      //Update objects-->
<!--      this.particlesMesh.rotation.x = -this.mouseY * 0.001;-->
<!--      this.particlesMesh.rotation.y = -this.mouseX * 0.001;-->
<!--      // this.mesh.rotation.x = this.mouseY * 0.00008;-->
<!--      // this.mesh.rotation.y = this.mouseX * 0.00008;-->

<!--      // this.mesh.rotation.x += 0.01;-->
<!--      // this.mesh.rotation.y += 0.01;-->

<!--      this.particlesMesh.rotation.z += 0.0005;-->
<!--      // this.mesh.rotation.z -= 0.001;-->
<!--      this.renderer.render(this.scene, this.camera);-->
<!--    },-->
<!--    animateParticles() {-->
<!--      // requestAnimationFrame(this.animateParticles);-->

<!--      const event = window.event;-->
<!--      this.mouseX = event.clientX;-->
<!--      this.mouseY = event.clientY;-->

<!--      // requestAnimationFrame(this.animateParticles);-->
<!--      // this.renderer.render(this.scene, this.camera);-->
<!--    },-->
<!--    particlesMove() {-->
<!--      this.position = this.animateParticles();-->
<!--      this.renderer.render(this.scene, this.camera);-->
<!--    },-->
<!--    // resizeRendererToDisplaySize() {-->
<!--    //   const canvas = this.renderer.domElement;-->
<!--    //   const pixelRatio = window.devicePixelRatio;-->
<!--    //   const width = (canvas.clientWidth * pixelRatio) | 0;-->
<!--    //   const height = (canvas.clientHeight * pixelRatio) | 0;-->
<!--    //   const needResize = canvas.width !== width || canvas.height !== height;-->
<!--    //   if (needResize) {-->
<!--    //     this.renderer.setSize(width, height, false);-->
<!--    //   }-->
<!--    //   return needResize;-->
<!--    // },-->
<!--    // changeParticlesColor() {-->
<!--    //   this.particlesMaterial.color.setStyle("&#45;&#45;firstColor");-->
<!--    // },-->
<!--  },-->
<!--  created() {-->
<!--    // if (localStorage.getItem("currentTheme") === "lightTheme") {-->
<!--    //   this.color = 0xffffff;-->
<!--    // } else if (localStorage.getItem("currentTheme") === "darkTheme"){-->
<!--    //   this.color = 0xd25d5f;-->
<!--    // }-->

<!--    Event.$on("changeParticlesColor", () => {-->
<!--      // if (localStorage.getItem("currentTheme") === "lightTheme") {-->
<!--      if (localStorage.getItem("themeColor") === "lightTheme") {-->
<!--        this.particlesMaterial.color.setHex(0xffffff);-->
<!--      } else if (localStorage.getItem("themeColor") === "darkTheme") {-->
<!--        // this.particlesMaterial.color.setHex(0xd25d5f);-->
<!--        this.particlesMaterial.color.setHex(0x272727);-->
<!--      }-->
<!--    });-->
<!--    // if (localStorage.getItem("currentTheme") === "darkTheme") {-->
<!--    //   Event.$on("changeParticlesColor", () =>-->

<!--    //     this.particlesMaterial.color.setHex(0x6a5acd)-->
<!--    //   );-->
<!--    // } else if (localStorage.getItem("currentTheme") === "lightTheme") {-->
<!--    //   Event.$on("changeParticlesColor", () =>-->
<!--    //     this.particlesMaterial.color.setHex(0xd25d5f)-->
<!--    //   );-->
<!--    // } else {-->
<!--    //   Event.$on("changeParticlesColor", () => console.log("test 3"));-->
<!--    // }-->
<!--    // //1-->
<!--    // if (localStorage.getItem("currentTheme") == "darkTheme") {-->
<!--    //   Event.$on("changeParticlesColor", () =>-->
<!--    //     this.particlesMaterial.color.setHex(0x6a5acd)-->
<!--    //   );-->
<!--    // } else {-->
<!--    //   Event.$on("changeParticlesColor", () => console.log("test 1"));-->
<!--    // }-->
<!--    // //2-->
<!--    // if (localStorage.getItem("currentTheme") == "") {-->
<!--    //   Event.$on("changeParticlesColor", () =>-->
<!--    //     this.particlesMaterial.color.setHex(0xd25d5f)-->
<!--    //   );-->
<!--    // } else {-->
<!--    //   Event.$on("changeParticlesColor", () => console.log("test 2"));-->
<!--    // }-->
<!--    // Event.$on("changeParticlesColor", () =>-->
<!--    //   this.particlesMaterial.color.setHex(0xd25d5f)-->
<!--    // );-->
<!--  },-->
<!--  mounted() {-->
<!--    this.container = document.querySelector(".threeContainer");-->
<!--    if (localStorage.getItem("themeColor") === "lightTheme") {-->
<!--      this.color = 0xd25d5f;-->
<!--    } else if (localStorage.getItem("themeColor") === "darkTheme") {-->
<!--      this.color = 0xffffff;-->
<!--    }-->
<!--    // this.currentColor = getComputedStyle(document.body).getPropertyValue(-->
<!--    //   "&#45;&#45;firstColor"-->
<!--    // );-->
<!--    // this.color = parseInt(this.currentColor.replace(/#/, ""), 16);-->
<!--    this.particlesMaterial = new Three.PointsMaterial({-->
<!--      size: 0.005,-->
<!--      // transparent: true,-->
<!--      // color: "#d25d5f",-->
<!--      color: this.color,-->
<!--    });-->
<!--    // console.log(this.particlesMaterial.color.setStyle("&#45;&#45;firstColor"));-->
<!--    // console.log(this.particlesMaterial.color.setHex(0xd25d5f));-->
<!--    this.init();-->
<!--    // this.animateParticles();-->
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
      plane: null,
      photo: null,
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

      // Charger la photo et l'ajouter à la scène
      // this.loadPhoto();

      // Créez les particules et les connexions
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.LineBasicMaterial({
        color: 0x808080,
        opacity: 1,
      });

      const vertices = [];
      const numParticles = 100;
      // const numParticles = 250;

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

      // // Ajouter l'animation de la photo
      // if (this.photo !== null) {
      //   this.photo.rotation.y += 0.01;
      // }

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

      // this.photo.rotation.y = mouseY * 0.2;
      // this.photo.rotation.x = mouseX * 0.2;

    },
    // loadPhoto() {
    //   // Définir le chemin de la photo à charger
    //   const imagePath = require("@/assets/img/photo1Rec.png");
    //
    //   // Créer une texture à partir de l'image
    //   const textureLoader = new THREE.TextureLoader();
    //   const texture = textureLoader.load(imagePath);
    //
    //   // Créer un matériau à partir de la texture
    //   const material = new THREE.MeshBasicMaterial({ map: texture });
    //
    //   // Créer un plan pour la photo
    //   const geometry = new THREE.PlaneGeometry(500, 500);
    //   this.photo = new THREE.Mesh(geometry, material);
    //
    //   // Positionner la photo et l'ajouter à la scène
    //   this.photo.position.set(350, 0, 500);
    //   this.scene.add(this.photo);
    // },
  },
};
</script>

<style>
.background-3d {
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*z-index: -1;*/

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
