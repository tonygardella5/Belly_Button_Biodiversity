d3.json("../samples.json").then((data) => {
  var metadata = data.metadata;
  var names = data.names;
  var otu_ids = metadata.otu_ids;
  var otu_labels = metadata.otu;
  console.log(metadata[1].id);
  








});