class Element {
    constructor (name, yearBuilt) {
        this.name = name;
        this.yearBuilt = yearBuilt;
    }
}

//Adds parks to element class

class Park extends Element {
    constructor(name, yearBuilt, area, treeNum) {
        super(name, yearBuilt);
        this.treeNum = treeNum;
        this.area = area; //miles2
         
        
}
   
// Calculates tree density    
    calcDensity() {
        const density = this.treeNum / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square mile.`);
    }     
    
}

//Adds streets to element class
    
class Street extends Element {
    constructor (name, yearBuilt,length, size = 3) { //size 3 is default size
        super(name, yearBuilt);
        this.length = length;
        this.size = size;
} 

//Classifies streets by size
    
    streetsClass() {
       const classify = new Map();
        classify.set(1, 'tiny');
        classify.set(2, 'small');
        classify.set(3, 'normal');
        classify.set(4, 'big');
        classify.set(5, 'huge');
        console.log(`${this.name}, built in ${this.yearBuilt}, is a ${classify.get(this.size)} street.`);
    }
}


//All city parks and streets. More can easily be added into these two arrays! :) 

const cityParks =   [new Park('Lake Elizabeth', 1912, 0.2, 830),
                    new Park('Coyote Hills', 1921, 0.1, 800),
                    new Park('Mission Peak', 1895, 0.5, 1050)];

const cityStreets = [new Street('Fremont Boulevard', 1845, 10.73, 5),
                    new Street('Gatewood Street', 1945, 0.70),
                    new Street('Michael Avenue', 1955, 0.268, 2),
                    new Street('Bellwood Court', 1955, 0.024, 1)];

//Returns the sum 

function calc(arr) {
    
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
    
    return [sum, sum / arr.length];
    
}


// This generates a report for the parks in the city

function parkReport(pr) {
    
    //Prints heading with colors
    console.log(`\x1b[32m%s\x1b[0m`,`---PARKS REPORT---`);
    
    
    //All parks tree density
    pr.forEach(el => el.calcDensity());
    
    //Average age of parks
    const ages = pr.map(el => new Date().getFullYear() - el.yearBuilt);
    const [totalAge, avgAge] = calc(ages);
    const avgAgeRounded = Math.round(avgAge);
    console.log(`Our ${pr.length} parks have an average age of ${avgAgeRounded} years.`);
    
    //more than 1000 trees
    const i = pr.map(el => el.treeNum).findIndex(el => el >= 1000);
    console.log(`${pr[i].name} park has more than 1000 trees.`);
}


function streetReport(st) {
    
    //Prints heading with colors
    console.log(`\x1b[34m%s\x1b[0m`,`---STREETS REPORT---`);
    
    //All streets length & average
    const [totalLength, avgLength] = calc(st.map(el => el.length));
    
    console.log(`Our ${st.length} streets have a total length of ${totalLength} miles and an average length of ${avgLength} miles.`);
    
    
    
    //Street classification
    
    st.forEach(el => el.streetsClass());
}


parkReport(cityParks);
streetReport(cityStreets);


    
    
    
































































