import React from 'react';

export function AboutUsPage() {
  return (
    <main className="flex-grow-1">
      <div className="container-lg py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-3">About Us</h1>
              <p className="lead text-muted">
                [Placeholder: Company mission and vision statement]
              </p>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-12 col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <i className="bi bi-award-fill text-primary" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-3">Our Story</h3>
                    <p className="text-muted mb-0">
                      [Placeholder: Brief history of the company and how it started]
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <i className="bi bi-people-fill text-success" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-3">Our Team</h3>
                    <p className="text-muted mb-0">
                      [Placeholder: Information about the team and expertise]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-12 col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <i className="bi bi-lightning-charge-fill text-warning" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-3">Quality</h3>
                    <p className="text-muted mb-0">
                      [Placeholder: Commitment to quality and standards]
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <i className="bi bi-heart-fill text-danger" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-3">Customer Satisfaction</h3>
                    <p className="text-muted mb-0">
                      [Placeholder: Focus on customer needs and satisfaction]
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <i className="bi bi-globe text-info" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-3">Innovation</h3>
                    <p className="text-muted mb-0">
                      [Placeholder: Commitment to innovation and new technologies]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h2 className="h4 fw-bold mb-3">Contact Us</h2>
                  <p className="text-muted mb-3">
                    [Placeholder: Contact information and how to reach us]
                  </p>
                  <div className="row g-3 justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="text-center">
                        <i className="bi bi-telephone-fill text-primary mb-2" style={{ fontSize: '1.5rem' }}></i>
                        <p className="small text-muted mb-0">Phone</p>
                        <p className="fw-bold">[Placeholder: Phone number]</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="text-center">
                        <i className="bi bi-envelope-fill text-primary mb-2" style={{ fontSize: '1.5rem' }}></i>
                        <p className="small text-muted mb-0">Email</p>
                        <p className="fw-bold">[Placeholder: Email address]</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="text-center">
                        <i className="bi bi-geo-alt-fill text-primary mb-2" style={{ fontSize: '1.5rem' }}></i>
                        <p className="small text-muted mb-0">Location</p>
                        <p className="fw-bold">[Placeholder: Address]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}