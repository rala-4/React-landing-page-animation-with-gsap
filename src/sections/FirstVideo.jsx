import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function FirstVideo() {
  useGSAP(() => {
    //we want the video to start playing even before show in the screen
    gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        pin: true,
        scrub: true,
        start: "top top ",
        end: "+=200" % top,
      },
    });
    tl.to(".hero-section", { opacity: 0, delay: 0.5, ease: "power1.inOut" }).to(
      ".first-vd-wrapper",
      { opacity: 1, ease: "power1.inOut", duration: 2 }
    );
    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);
  const videoRef = useRef(null);
  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          preload="auto"
          playsInline
          className="first-vd"
          src="/videos/output1.mp4"
        />
      </div>
    </section>
  );
}

export default FirstVideo;
