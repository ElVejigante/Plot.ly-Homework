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

        var result = filterSampleID[0];
        //console.log(result);

        var otuIDs = result.otu_ids;
        //console.log(otuIDs);

        var otuLabels = result.otu_labels;
        //console.log(otuLabels);

        var sampleValues = result.sample_values;
        //console.log(sampleValues);

        var yTicks = otuIDs.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
        //console.log(yTicks);
        
        //Bar Graph
        var barTrace = [{
            x: sampleValues.slice(0, 10).reverse(),
            y: yTicks,
            text: otuLabels.slice(0, 10).reverse(),
            type: 'bar',
            orientation: 'h',
        }];
        var barLayout = {
            title: "Top 10 OTU's for Test Subject",
            xaxis: {title: "Sample Values"},
            yaxis: {title: "OTU's"},
        };
        Plotly.newPlot('bar', barTrace, barLayout);

        //Bubble Chart
        var bubbleTrace =[{
            x: otuIDs,
            y: sampleValues,
            mode: 'markers',
            marker: {
                size: sampleValues,
                color: otuIDs, 
            },
            text: otuLabels,
        }];
        var bubbleLayout = {
            title: "OTU ID's vs Sample Values for Test Subject",
            xaxis: {title: "OTU ID"},
            yaxis: {title: "Sample Values"},
        };
        Plotly.newPlot('bubble', bubbleTrace, bubbleLayout);

        //Demographic Info
        var info = d3.select('#sample-metadata');
        console.log(info);
    });
};

// Initialize dashboard
init();

