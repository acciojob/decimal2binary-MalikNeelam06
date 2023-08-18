function decimalToBinary(num) {
  //Write you code here
	let unit=1;
	let b=0;
	while(num>0){
	let rem = num%2;
  num=parseInt(num/2);
		b+=rem*unit;
		unit=unit*10;
	}
	console.log(b);
}

window.decimalToBinary = decimalToBinary;
