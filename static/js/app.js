d3.json("/samples.json").then((data) => {
  var metadata = data.metadata;
  var names = data.names;
  var otu_ids = metadata.otu_ids;
  var otu_labels = metadata.otu;
  
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



  



});

