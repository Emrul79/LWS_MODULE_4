import { useEffect } from "react";

export default function useFadeInHook(ref, duration) {
  useEffect(() => {
    const node = ref.current;

    let startTime = performance.now();
    let frameId = null;

    function onFrame(now) {
      const timePassed = now - startTime;
      const progress = Math.min(timePassed / duration, 1);
      onprogress(progress);
      if (progress < 1) {
        frameId = requestAnimationFrame(onFrame);
      }
    }
    function onprogress(progress) {
      node.style.opacity = progress;
      node.style.transform = `translateY(${(1 - progress) * 50} px)`;
    }
    function start() {
      onprogress(0);
      startTime = performance.now();
      frameId = requestAnimationFrame(onFrame);
    }

    start();

    //cleanup
    return () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };
  }, []);
}
