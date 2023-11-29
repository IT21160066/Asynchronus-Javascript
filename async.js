//synchronas system

/*
console.log(" I ");
console.log(" eat ");
console.log(" ice cream ");
console.log(" with a ");
console.log(" spoon ");*/

//asynchronas system

/*
console.log(" I ");
console.log(" eat ");

setTimeout(() => {
  console.log(" ice cream ");
}, 3000);

console.log(" with a ");
console.log(" spoon ");
*/

//callback

//calling a function inside another function

/*
function one(call_two) {
  console.log(" step 1 complete, please call step 2 ");
  call_two();
}
function two() {
  console.log(" step 2");
}

one(two);
*/

/*
let stock = {
  Fruits: ["apple", "orange", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocalte", "peanuts"],
};*/

/*
let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stock.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};


let production = () => {
  setTimeout(() => {
    console.log("Production started.");

    setTimeout(() => {
      console.log("The fruits has been chopped.");

      setTimeout(() => {
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added.`);

        setTimeout(() => {
          console.log("Machine was stated.");

          setTimeout(() => {
            console.log(`Ice cream placed on ${stock.holder[0]}.`);

            setTimeout(() => {
              console.log(`${stock.toppings[0]} was added as toppings.`);

              setTimeout(() => {
                console.log("Serve Ice cream...");
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

order(0, production);
*/

//relatinship between time and work
//promise chaining
//error handling
//the finally handler

/*
let issShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (issShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stock.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruits has been chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added.`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("Machine was stated."));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`Ice cream placed on ${stock.holder[0]}.`)
    );
  })
  .then(() => {
    return order(3000, () =>
      console.log(`${stock.toppings[0]} was added as toppings.`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("Ice cream was served"));
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    if (issShopOpen) console.log("Day ended, shop is closed");
    else console.log("Shop not opened");
  });
*/

//async/ await

//let issShopOpen = false;
/*
let toppingChoice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which topping you  prefer?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log("task done");
  await toppingChoice();
  console.log("task done after await");
}

kitchen();

console.log("other task working");
*/
/*
function time(ms) {
  return new Promise((resolve, reject) => {
    if (issShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stock.Fruits[0]} was selected`);

    await time(0);
    console.log("Production has started");

    await time(2000);
    console.log("The fruits has been chopped");

    await time(1000);
    console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added.`);

    await time(1000);
    console.log("Machine was stated.");

    await time(2000);
    console.log(`Ice cream placed on ${stock.holder[0]}.`);

    await time(3000);
    console.log(`${stock.toppings[0]} was added as toppings.`);

    await time(3000);
    console.log("Ice cream was served");
  } catch (error) {
    console.log("Customer left");
  } finally {
    console.log("Shop is closed");
  }
}

kitchen();
*/
