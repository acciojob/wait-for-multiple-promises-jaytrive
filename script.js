//your JS code here. If required.
const promise1 = new Promise((resolve,reject) => {
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
})