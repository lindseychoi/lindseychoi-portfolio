import React from 'react';

export default function Contact() {
  return (
    <div>
      <div class="card text-center">
        <div class="card-body">
          <h5>Contact Me</h5>
          <p>(719) 641-6836</p>
          <p>lindsey.e.choi@gmail.com</p>
          <div id="contact-button" class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="project-buttons btn btn-success btn-small"
              onclick="window.location.href='https://www.linkedin.com/in/lindseychoi/';">LinkedIn</button>
            <button type="button" class="project-buttons btn btn-success btn-small"
              onclick="window.location.href='https://www.github.com/lindseychoi';">GitHub</button>
          </div>
        </div>
    </div>
    </div>
  );
}
