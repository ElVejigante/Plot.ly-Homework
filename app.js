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
        var samples = dataSamples.samples;
        //console.log(samples);
        var filterSampleID = samples.filter(value => value.id == values);
        //console.log(filterSampleID);
        var subjectID = filterSampleID[0].id;
        //console.log(subjectID);
        var result = filterSampleID[0];
        //console.log(result);
        var otuIDs = result.otu_ids;
        //console.log(otuIDs);
        var otuLabels = result.otu_labels;
        //console.log(otuLabels);
        var sampleValues = result.sample_values;
        console.log(sampleValues);

    });
};

// Initialize dashboard
init();

