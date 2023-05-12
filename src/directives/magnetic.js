// export default {
//   bind(el, binding) {
//     const defaultStrength = 20;
//     const defaultMaxDistance = 20;
//
//     const strength = binding.value?.strength ?? defaultStrength;
//     const maxDistance = binding.value?.maxDistance ?? defaultMaxDistance;
//
//     const onMouseMove = (event) => {
//       const rect = el.getBoundingClientRect();
//       const mouseX = event.clientX;
//       const mouseY = event.clientY;
//
//       const closestX = Math.max(
//         rect.left,
//         Math.min(mouseX, rect.left + rect.width)
//       );
//       const closestY = Math.max(
//         rect.top,
//         Math.min(mouseY, rect.top + rect.height)
//       );
//
//       const distance = Math.hypot(closestX - mouseX, closestY - mouseY);
//
//       if (distance < maxDistance) {
//         const offsetX = ((mouseX - closestX) / maxDistance) * strength;
//         const offsetY = ((mouseY - closestY) / maxDistance) * strength;
//
//         el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
//         el.style.transition = "transform 0.3s ease-out";
//       } else {
//         el.style.transform = "translate(0, 0)";
//         el.style.transition =
//           "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.5)";
//       }
//     };
//
//     document.addEventListener("mousemove", onMouseMove);
//
//     el.addEventListener("mouseleave", () => {
//       el.style.transform = "translate(0, 0)";
//       el.style.transition =
//         "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.5)";
//     });
//
//     el.addEventListener("unmounted", () => {
//       document.removeEventListener("mousemove", onMouseMove);
//     });
//   },
// };

export default {
  bind(el, binding) {
    if (screen.width >= 1024) {
      const defaultStrength = 1;
      const defaultMaxDistance = 30;

      const strength =
        binding.value && binding.value.strength !== undefined
          ? binding.value.strength
          : defaultStrength;
      const maxDistance =
        binding.value && binding.value.maxDistance !== undefined
          ? binding.value.maxDistance
          : defaultMaxDistance;

      const onMouseMove = (event) => {
        const rect = el.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distanceX = mouseX - (rect.left + rect.width / 2);
        const distanceY = mouseY - (rect.top + rect.height / 2);
        const distance = Math.hypot(distanceX, distanceY);

        if (distance < maxDistance) {
          const offsetX = distanceX * strength;
          const offsetY = distanceY * strength;

          el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
          el.style.transition = "transform 0.3s ease-out";
        } else {
          el.style.transform = "translate(0, 0)";
          el.style.transition =
            "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.5)";
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0, 0)";
        el.style.transition =
          "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1.5)";
      });

      el.addEventListener("unmounted", () => {
        document.removeEventListener("mousemove", onMouseMove);
      });
    }
  },
};
