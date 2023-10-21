import { useEffect } from "react";
 import { useRouter } from "next/navigation";

function ScrollToTop() {
const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);
  return null;
}

export default ScrollToTop;
