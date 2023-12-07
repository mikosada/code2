"use client";

import { useRef } from "react";
import { Button, Box } from "@chakra-ui/react";

function MyComponent() {
  const myRef = useRef(null);

  const scrollToRef = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Button onClick={scrollToRef}>Scroll to Object</Button>

      {/* Objek yang akan dituju */}
      <Box id="myObject" ref={myRef}>
        Konten yang ingin Anda tuju di sini
      </Box>
    </div>
  );
}

export default MyComponent;
