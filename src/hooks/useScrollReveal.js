import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      // fallback: just show all
      reveals.forEach((el) => el.classList.add("active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // optionally unobserve so animation runs once:
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      // cleanup
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
