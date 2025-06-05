let syllabusLink = document.getElementById("syllabus")
let demoClassLink = document.getElementById("demoClass")
let placementLink = document.getElementById("placement")
let cnt = document.getElementById("WebdevelopmentCarBody")
// how to add event 
syllabusLink.addEventListener("click",()=>{
    cnt.innerHTML = `
    <div class="card-body" id="WebdevelopmentCarBody">
 <div class="accordion accordion-borderless" id="accordionFlushExampleX">
  
  <div class="accordion-item mt-4">
    <h2 class="accordion-header" id="flush-headingOneX">
      <button data-mdb-collapse-init class="accordion-button" type="button"
        data-mdb-target="#flush-collapseOneX" aria-expanded="true" aria-controls="flush-collapseOneX">
        HTML bASIC OF WEB Development
      </button>
    </h2>
    <div id="flush-collapseOneX" class="accordion-collapse collapse show"
      aria-labelledby="flush-headingOneX" data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the first item's accordion body.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwoX">
      <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
        data-mdb-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX">
        CSS AND FRAMEWORKS(Bootstrap & TAILWIND)
      </button>
    </h2>
    <div id="flush-collapseTwoX" class="accordion-collapse collapse" aria-labelledby="flush-headingTwoX"
      data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the second item's accordion body.
        Let's imagine this being filled with some actual content.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThreeX">
      <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
        data-mdb-target="#flush-collapseThreeX" aria-expanded="false" aria-controls="flush-collapseThreeX">
        javascript AND REACT JS
      </button>
    </h2>
    <div id="flush-collapseThreeX" class="accordion-collapse collapse" aria-labelledby="flush-headingThreeX"
      data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the third item's accordion body.
        Nothing more exciting happening here in terms of content, but just filling up
        the space to make it look, at least at first glance, a bit more representative
        of how this would look in a real-world application.
      </div>
    </div>
  </div>
</div>
</div>
    `
})
demoClassLink.addEventListener("click",()=>{
    cnt.innerHTML = `
      <div class="card-body">
     <div class="card text-center">
  <div class="card-header mt-2">Full Stack Demo</div>
  <div class="card-body">
    <h5 class="card-title mt-4"><i class="fa-solid fa-calendar-days"></i>02-07-2025</h5>
    <p class="card-text mt-4">Link:<a href="#">https://meet.google.com/xty-jznp-oju</a></p>
    <a href="#" class="btn btn-primary mt-4" data-mdb-ripple-init>REGISTER</a>
  </div>
  <div class="card-footer text-muted">2 Min ago</div>
</div>   
  </div>
    `
})
placementLink.addEventListener("click",()=>{
    cnt.innerHTML = `
    <div class="card-body " style="overflow: scroll;">
    <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Name</th>
      <th>Title</th>
      <th>Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Software engineer</p>
        <p class="text-muted mb-0">IT department</p>
      </td>
      <td>
        <p>10 LPA</p>
      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              class="rounded-circle"
              alt=""
              style="width: 45px; height: 45px"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Alex Ray</p>
            <p class="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Consultant</p>
        <p class="text-muted mb-0">Finance</p>
      </td>
      <td>
        <p>5.5 LPA</p>
      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              class="rounded-circle"
              alt=""
              style="width: 45px; height: 45px"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Kate Hunington</p>
            <p class="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Designer</p>
        <p class="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <p>6 LPA</p>
      </td>
    </tr>
  </tbody>
</table>
  </div>
    `
})

let syllabus2Link = document.getElementById("syllabus2")
let demoClass2Link = document.getElementById("demoClass2")
let placement2Link = document.getElementById("placement2")
let cnt2 = document.getElementById("WebdevelopmentCarBody2")
// how to add event 
syllabus2Link.addEventListener("click",()=>{
    cnt2.innerHTML = `
    <div class="card-body" id="WebdevelopmentCarBody">
 <div class="accordion accordion-borderless" id="accordionFlushExampleX">
  
  <div class="accordion-item mt-4">
    <h2 class="accordion-header" id="flush-headingOneX">
      <button data-mdb-collapse-init class="accordion-button" type="button"
        data-mdb-target="#flush-collapseOneX" aria-expanded="true" aria-controls="flush-collapseOneX">
        HTML bASIC OF WEB Development
      </button>
    </h2>
    <div id="flush-collapseOneX" class="accordion-collapse collapse show"
      aria-labelledby="flush-headingOneX" data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the first item's accordion body.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwoX">
      <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
        data-mdb-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX">
        CSS AND FRAMEWORKS(Bootstrap & TAILWIND)
      </button>
    </h2>
    <div id="flush-collapseTwoX" class="accordion-collapse collapse" aria-labelledby="flush-headingTwoX"
      data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the second item's accordion body.
        Let's imagine this being filled with some actual content.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThreeX">
      <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
        data-mdb-target="#flush-collapseThreeX" aria-expanded="false" aria-controls="flush-collapseThreeX">
        javascript AND REACT JS
      </button>
    </h2>
    <div id="flush-collapseThreeX" class="accordion-collapse collapse" aria-labelledby="flush-headingThreeX"
      data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the third item's accordion body.
        Nothing more exciting happening here in terms of content, but just filling up
        the space to make it look, at least at first glance, a bit more representative
        of how this would look in a real-world application.
      </div>
    </div>
  </div>
</div>
</div>
    `
})
demoClass2Link.addEventListener("click",()=>{
    cnt2.innerHTML = `
      <div class="card-body">
     <div class="card text-center">
  <div class="card-header mt-2">Full Stack Demo</div>
  <div class="card-body">
    <h5 class="card-title mt-4"><i class="fa-solid fa-calendar-days"></i>02-07-2025</h5>
    <p class="card-text mt-4">Link:<a href="#">https://meet.google.com/xty-jznp-oju</a></p>
    <a href="#" class="btn btn-primary mt-4" data-mdb-ripple-init>REGISTER</a>
  </div>
  <div class="card-footer text-muted">2 Min ago</div>
</div>   
  </div>
    `
})
placement2Link.addEventListener("click",()=>{
    cnt2.innerHTML = `
    <div class="card-body " style="overflow: scroll;">
    <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Name</th>
      <th>Title</th>
      <th>Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Software engineer</p>
        <p class="text-muted mb-0">IT department</p>
      </td>
      <td>
        <p>10 LPA</p>
      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              class="rounded-circle"
              alt=""
              style="width: 45px; height: 45px"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Alex Ray</p>
            <p class="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Consultant</p>
        <p class="text-muted mb-0">Finance</p>
      </td>
      <td>
        <p>5.5 LPA</p>
      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              class="rounded-circle"
              alt=""
              style="width: 45px; height: 45px"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Kate Hunington</p>
            <p class="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Designer</p>
        <p class="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <p>6 LPA</p>
      </td>
    </tr>
  </tbody>
</table>
  </div>
    `
})
let syllabus3Link = document.getElementById("syllabus3")
let demoClass3Link = document.getElementById("demoClass3")
let placement3Link = document.getElementById("placement3")
let cnt3 = document.getElementById("WebdevelopmentCarBody3")
// how to add event 
syllabus3Link.addEventListener("click",()=>{
    cnt3.innerHTML = `
    <div class="card-body" id="WebdevelopmentCarBody">
 <div class="accordion accordion-borderless" id="accordionFlushExampleX">
  
  <div class="accordion-item mt-4">
    <h2 class="accordion-header" id="flush-headingOneX">
      <button data-mdb-collapse-init class="accordion-button" type="button"
        data-mdb-target="#flush-collapseOneX" aria-expanded="true" aria-controls="flush-collapseOneX">
        HTML bASIC OF WEB Development
      </button>
    </h2>
    <div id="flush-collapseOneX" class="accordion-collapse collapse show"
      aria-labelledby="flush-headingOneX" data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the first item's accordion body.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwoX">
      <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
        data-mdb-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX">
        CSS AND FRAMEWORKS(Bootstrap & TAILWIND)
      </button>
    </h2>
    <div id="flush-collapseTwoX" class="accordion-collapse collapse" aria-labelledby="flush-headingTwoX"
      data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the second item's accordion body.
        Let's imagine this being filled with some actual content.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThreeX">
      <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
        data-mdb-target="#flush-collapseThreeX" aria-expanded="false" aria-controls="flush-collapseThreeX">
        javascript AND REACT JS
      </button>
    </h2>
    <div id="flush-collapseThreeX" class="accordion-collapse collapse" aria-labelledby="flush-headingThreeX"
      data-mdb-parent="#accordionFlushExampleX">
      <div class="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the third item's accordion body.
        Nothing more exciting happening here in terms of content, but just filling up
        the space to make it look, at least at first glance, a bit more representative
        of how this would look in a real-world application.
      </div>
    </div>
  </div>
</div>
</div>
    `
})
demoClass3Link.addEventListener("click",()=>{
    cnt3.innerHTML = `
      <div class="card-body">
     <div class="card text-center">
  <div class="card-header mt-2">Full Stack Demo</div>
  <div class="card-body">
    <h5 class="card-title mt-4"><i class="fa-solid fa-calendar-days"></i>02-07-2025</h5>
    <p class="card-text mt-4">Link:<a href="#">https://meet.google.com/xty-jznp-oju</a></p>
    <a href="#" class="btn btn-primary mt-4" data-mdb-ripple-init>REGISTER</a>
  </div>
  <div class="card-footer text-muted">2 Min ago</div>
</div>   
  </div>
    `
})
placement3Link.addEventListener("click",()=>{
    cnt3.innerHTML = `
    <div class="card-body " style="overflow: scroll;">
    <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Name</th>
      <th>Title</th>
      <th>Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-circle"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Software engineer</p>
        <p class="text-muted mb-0">IT department</p>
      </td>
      <td>
        <p>10 LPA</p>
      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              class="rounded-circle"
              alt=""
              style="width: 45px; height: 45px"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Alex Ray</p>
            <p class="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Consultant</p>
        <p class="text-muted mb-0">Finance</p>
      </td>
      <td>
        <p>5.5 LPA</p>
      </td>
    </tr>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              class="rounded-circle"
              alt=""
              style="width: 45px; height: 45px"
              />
          <div class="ms-3">
            <p class="fw-bold mb-1">Kate Hunington</p>
            <p class="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p class="fw-normal mb-1">Designer</p>
        <p class="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <p>6 LPA</p>
      </td>
    </tr>
  </tbody>
</table>
  </div>
    `
})