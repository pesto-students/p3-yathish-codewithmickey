function doTask1(){
    console.log("Console for task 1")
}

function doTask2(){
    console.log("Console for task 2")
}

function doTask3(){
    console.log("Console for task 3")
}

async function asyncFunction() {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(doTask1), 1000)
    });
    const result = await promise1; 
    result();

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(doTask2), 500)
      });
      const result2 = await promise2; 
      result2();

      const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(doTask3), 200)
      });
      const result3 = await promise3; 

      result3()
  }



  function* myGeneratorFunction(){
    let myTask = "my task 1"
    yield myTask;
    myTask = `my task 2`
    yield myTask;    
    myTask = `my task 3`
    yield myTask;
  }

  const iter = myGeneratorFunction()
  console.log(iter)
  console.log(iter.next())
  console.log(iter.next())
  console.log(iter.next())

  asyncFunction()
  