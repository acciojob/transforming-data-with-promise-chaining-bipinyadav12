const button=document.getElementById("btn");
button.addEventListener('click',function (input) {
const inputElement=document.getElementById("ip");
const output=document.getElementById("output");
output.textContent='';
input = parseFloat(inputElement.value);
	
	const firstPromise=new Promise ((resolve)=>{
		setTimeout(()=>{
			resolve(input);
		},2000)
	})
	firstPromise.then((input)=>{
		output.textContent=`Result:${input}`;
		return new Promise((reslove)=>{
			setTimeout(()=> reslove(input*2), 1000);
		});
	})
	.then((input)=>{
		output.textContent=`Result:${input}`;
		return new Promise((reslove)=>{
			setTimeout(()=>{
				reslove(input-3)
			},1000)
		})
	}).then((input)=>{
		showResult(input)
		return new Promise((reslove)=>{
			setTimeout(()=>{
				reslove(input/2)
			},1000)
		})
	}).then((input)=>{
		showResult(input)
		return new Promise((reslove)=>{
			setTimeout(()=>{
				reslove(input+10)
			},1000)
		})
	}).then((input)=>{
		output.textContent=`Final Result:${input}`
	})
	
});

function showResult(input) {
	output.textContent=`Result:${input}`
} 