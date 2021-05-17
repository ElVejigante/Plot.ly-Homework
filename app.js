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

function optionChanged(values) {
    d3.json('samples.json').then((dataSamples)=>{
        var samples = dataSamples.samples
        //console.log(samples);
        var filterSampleId = samples.filter(value => value.id == values);
        //console.log(filterSampleId);
        var subjectID = filterSampleId[0].id
        //console.log(subjectID);
        
    });
};

// Initialize dashboard
init();

