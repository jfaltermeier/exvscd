
function hello() {
    console.log('Hello World');
}

     function wait(ms) {
         return new Promise((resolve) => {
        setTimeout(resolve, ms);
     });
   }

async function loop() {
         for(let i = 0; i < 50; i++) {
            hello();
      await wait(1000);
  }
}

loop();
