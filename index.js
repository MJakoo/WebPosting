let nodes = [
    { id: "1", Name: "Shirin Jamalli", Position: "Chairman of the Board", email: "", img: "" },
    { id: "2", pid: "1", Name: "Elvin Jamalli", Position: "Deputy Chairman Commerce Europe", email: "", img: "" },
    { id: "3", pid: "2", Name: "Michael Gilhooley", Position: "Commercial Manager", email: "", img: "" },
    { id: "4", pid: "2", Name: "Nitika Nanda", Position: "Senior Commercial Specialist", email: "", img: "" },
    
];

for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    switch (node.title) {
        case "QA":
            node.tags = ["QA"];
            break;
        case "Marketer":
        case "Designer":
        case "Manager":
            node.tags = ["Senior Consultant"];
            break;
    }
}

let options = getOptions();
let chart = new OrgChart(document.getElementById("tree"), {   
    template: "ula", 
    mouseScrool: OrgChart.none,    
    scaleInitial: OrgChart.match.width,
    scaleInitial: options.scaleInitial,
    enableSearch: true,
    layout: OrgChart.mixed,
    nodeBinding: {
        field_0: "Name",
        field_1: "Position",
        img_0: "img"
    }
});

chart.load(nodes)

function getOptions(){
    const searchParams = new URLSearchParams(window.location.search);
    let fit = searchParams.get('fit');
    let enableSearch = true;
    let scaleInitial = 1;
    if (fit == 'yes'){
        enableSearch = false;
        scaleInitial = OrgChart.match.boundary;
    }
    return {enableSearch, scaleInitial};
}