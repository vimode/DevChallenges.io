const addOne = document.getElementById("addOne");
const lessOne  = document.getElementById("lessOne");

const addTwo = document.getElementById("addTwo");
const lessTwo = document.getElementById("lessTwo")

const totalAmount = document.getElementById("total");

const sendFrom = document.getElementById("send_form");
const save = document.getElementById("save");
const allInputs = document.querySelectorAll("input");
const btnPop = document.querySelector('#btnPop');

// Checkout box item changes
const changes = (action, id) => {
  const icon = document.getElementById(id);
  let update = parseInt(icon.innerText);
  if (action === 'plus') {
    update +=1;
    icon.innerText = update;
  } else {
    if (update <=0) {
      update = 0;
      icon.innerText = update;
    } else {
      update -= 1;
      icon.innerText = update;
    }
  }
};

// Checkout Box Total
const total = () => {
  const productOne = parseInt(document.getElementById("countOne").innerText);
  const productTwo = parseInt(document.getElementById("countTwo").innerText);
  let totalProductOne = 54.99 * productOne;
  let totalProductTwo = 74.99 * productTwo;
  let showTotal = (totalProductOne + totalProductTwo + 19).toFixed(2);
  totalAmount.innerText = `$${showTotal}`;
};


// Submit Form
const submitForm = () => {
  btnPop.click();
}


// EventListeners
window.addEventListener('load', () => {
  
  addOne.addEventListener('click', () => {
    changes("plus", "countOne")
    total()
  });

  lessOne.addEventListener('click', ()=> {
    changes("less", "countOne")
    total()
  });

  addTwo.addEventListener('click', () => {
    changes("plus", "countTwo")
    total()
  })

  lessTwo.addEventListener('click', () => {
    changes("less", "countTwo")
    total()
  })

  sendFrom.onsubmit = (e) => {
    e.preventDefault();
    submitForm()
  };

})

// Reset checkout items
// const resetItems = () => {
//   productOne.innerText = 1;
//   productTwo.innerText = 1;
// }