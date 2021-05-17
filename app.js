// 1. Use the D3 library to read in `samples.json`.
function init() {
    d3.json('samples.json').then((dataSamples)=>{
    var dropDown = d3.select('#selDataset');
    //console.log(dataSamples);

    dataSamples.names.forEach(name => {
        dropDown.append('option').text(name).property('value', name);
        //console.log(dataSamples.names[0]);

    });
    optionChanged(dataSamples.names[0]);
});
};

