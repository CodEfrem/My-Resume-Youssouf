import React from "react";
import Nav from "./components/Nav";

import Experience from "./components/Experience";
import Education from "./components/Education";


export default function Resume() {
  return (
    <>
      <main className="flex-shrink-0">
        <Nav />
        <div className="container px-5 my-5">
          <ResumeTitle />
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <Experience />
              <Sumary />
              <Education />
              <Skills />
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 
