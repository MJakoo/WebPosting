let nodes = [
    { id: "1", Name: "Vladimir Remyga", Position: "Director", email: "vremyga@deloitte.az", img: "https://www2.deloitte.com/content/dam/assets-zone2/az/en/img/profiles/q-t/vladimir-remyga.jpg/_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg" },
    { id: "2", pid: "1", Name: "Ayan Sadigova", Position: "Manager", email: "asadigova@deloitte.az", img: "https://media.licdn.com/dms/image/v2/D4E03AQE5AS72D1_hFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716307345575?e=2147483647&v=beta&t=T3JSpgwxIfiJvWqY96t_rabxPOOS49zD4Nj_1YIliR8" },
    { id: "3", pid: "2", Name: "Rumiyya Alili", Position: "Senior Consultant", img: "https://media.licdn.com/dms/image/v2/D4E03AQGIc2oMYxEWdA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669278941773?e=1746057600&v=beta&t=o7-T0xsuJRiGElt7QDVdqWZetxvSuX7uasSv6rtVtwg" },
    { id: "4", pid: "2", Name: "Nigar Salahova", Position: "Senior Consultant", img: "https://media.licdn.com/dms/image/v2/D4D03AQHZAHlSaOZLaw/profile-displayphoto-shrink_400_400/B4DZNQGPmDHUAk-/0/1732215637525?e=1746057600&v=beta&t=O9RzI_sq0Nuz2yXYTroTmuzeFVbzFslamLkNnpNAg6k" },
    { id: "5", pid: "2", Name: "Sabina Huseynova", Position: "Senior Consultant", img: "" },
    { id: "6", pid: "3", Name: "Nihad Huseynov", Position: "Business Analyst", img: "https://media.licdn.com/dms/image/v2/C5603AQF09uCw-NqTGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1646130808392?e=2147483647&v=beta&t=f-ZncgMRpc8TAC3ozT_Hah-6q3CNQS2b-Ylaz3bB2bI" },
    { id: "7", pid: "4", Name: "Ughur Ibrahimov", Position: "Business Analyst", img: "" },
    { id: "8", pid: "4", Name: "Javid Magsudov", Position: "Business Analyst", img: "" },
    { id: "9", pid: "5", Name: "Ulker Mammadli", Position: "Business Analyst", img: "" },
    { id: "10", pid: "2", Name: "Mazahir Mammadov", Position: "Consultant", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDboSq24dk0Jg6d8jr4KieiKCGn6w6e_VGw&s" },
    { id: "11", pid: "2", Name: "Nuray Abbasova", Position: "Consultant", img: "https://media.licdn.com/dms/image/v2/D4E03AQFXmAfew8KEmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728309671830?e=1746057600&v=beta&t=8g-Pbq8y41s7hkaFptw3ahzHB5OS_9skVzP_AQkofEI" }

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