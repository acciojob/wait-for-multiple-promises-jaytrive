//your JS code here. If required.
/*const promise1 = new Promise((resolve,reject) => {
	const time=Math.ceil(Math.random()*3);
	setTimeout(() => {
		resolve(time);
	},time*1000)
})

const promise2 = new Promise((resolve,reject) => {
	const time=Math.ceil(Math.random()*3);
	setTimeout(() => {
		resolve(time);
	},time*1000)
})

const promise3 = new Promise((resolve,reject) => {
	const time=Math.ceil(Math.random()*3);
	setTimeout(() => {
		resolve(time);
	},time*1000)
})
const loadingRow = document.getElementById("loading");
loadingRow.parentNode.removeChild(loadingRow);
const tbody=document.getElementById('output');
const promises=[promise1,promise2,promise3];

Promise.all(promises).then((res) => {
	const totalTime=res.reduce((val,cur) => val+cur,0);
	res.map((val,index) => tbody.innerHTML+= `<td>Promise ${index+1}</td><td>${val}</td>`)
	tbody.innerHTML+=`<td>Total</td><td>${totalTime.toFixed(3)}</td>`
})*/

const promises = [
    new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000))
  ];

  Promise.all(promises)
    .then(results => {
      const loadingRow = document.getElementById("loading");
      loadingRow.parentNode.removeChild(loadingRow);

      const table = document.querySelector("table");
      let total = 0;

      results.forEach((result, index) => {
        const promiseNum = index + 1;
        const timeTaken = result.toFixed(3);
        total += result;
        const row = table.insertRow();
        const promiseCell = row.insertCell(0);
        const timeTakenCell = row.insertCell(1);
        promiseCell.textContent = `Promise ${promiseNum}`;
        timeTakenCell.textContent = timeTaken;
      });

      const totalRow = table.insertRow();
      const totalCell = totalRow.insertCell(0);
      const totalTimeCell = totalRow.insertCell(1);
      totalCell.textContent = "Total";
      totalTimeCell.textContent = total.toFixed(3);
    });