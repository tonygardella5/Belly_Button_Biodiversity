d3.json("/samples.json").then((data) => {
  var metadata = data.metadata;
  var names = data.names;
  var samples = data.samples;
  var otu_ids = data.samples;
  var otu_labels = data.samples.otu;
  
  /*var trace1 = {
      x: 
  }*/

  function updatePlotly(){
      var dropdownMenu = d3.select("#selDataset");
      
      names.forEach((name) => {
        dropdownMenu
            .append("option")
            .text(name)
            .property("value",name);

      });
    
  }
  updatePlotly();
  console.log(otu_ids); 
  function displayMetadata(target){
    var filterData = metadata.filter(filteredData => filteredData.id == target);
    var filtered = filterData[0];
    var metadataChart = d3.select ("#sample-metadata");
    Object.entries(filtered).forEach(([key, value]) => {
      metadataChart.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  /* .slice(-10)*/
  }
  var dropdownMenu = d3.select("#selDataset");
  
  
  function optionChanged(newData){
    var newData = dropdownMenu.node().value;
    displayMetadata(newData);
    //displayGraph(newData);
  }
  init();
});
init();


}