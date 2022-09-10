var fruits = 'Charry';
switch(fruits){
    case 'mango':
        console.log('The price of mango is BDT 130');
        break;
    case 'apple':
        console.log('The price of apple is BDT 180');
        break
    case 'banana':
    case 'papayas':
        console.log('The price of banana and papayas are BDT 100');
        break;
    default:
        console.log(`Sorry, we are out of ${fruits}`);
}