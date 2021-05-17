// 1. Use the D3 library to read in `samples.json`.
d3.json('samples.json').then((dataSamples)=>{
    var dropDown = d3.select('selDataset');
    console.log(dataSamples);
});