import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h2 className="purple">Curriculum Vitae in French</h2>
          <Button
            variant="primary"
            href="/cv/CV.pdf" // French PDF file path
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV French version
          </Button>
        </Row>
        
        <img src="/cv/cvfr.jpg" className="img-thumbnail mt-3" />
      </Container>

      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h2 className="purple">Curriculum Vitae in English</h2>
          <Button
            variant="primary"
            href="/cv/CVE.pdf" // English PDF file path (corrected)
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV English version
          </Button>
        </Row>

        <img src="/cv/cveng.jpg" className="img-thumbnail mt-3" />
      </Container>
    </div>
  );
}

export default ResumeNew;
