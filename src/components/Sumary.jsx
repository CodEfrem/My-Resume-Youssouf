import React from "react";

export default function Sumary() {
  const educationData = [
    {
      name: "BRANDON JOHNSON",
      location: "Portland par 127,Orlando, FL",
      mail: "alice.barkley@example.com",
      description:
        "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
    },
  ];

  return (
    <>
      <section>
        <h2 className="text-secondary fw-bolder mb-4">Education</h2>
        {educationData.map((education, index) => (
          <div className="card shadow border-0 rounded-4 mb-5" key={index}>
            <div className="card-body p-5">
              <div className="row align-items-center gx-5">
                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                  <div className="bg-light p-4 rounded-4">
                    <div className="text-secondary fw-bolder mb-2">
                      {education.date}
                    </div>
                    <div className="mb-2">
                      <div className="small fw-bolder">
                        {education.institution}
                      </div>
                      <div className="small text-muted">
                        {education.location}
                      </div>
                    </div>
                    <div className="fst-italic">
                      <div className="small text-muted">{education.degree}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div>{education.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="pb-5"></div>
    </>
  );
}