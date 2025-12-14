const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];


// creating an adjacency list to represent connection of nodes
function makeGraph(links){
    let graph = {};
    let addPath = (from, to) => {
        if(from in graph) graph[from].push(to);
        else graph[from] = [to];
    }

    for(let i = 0 ; i < links.length ; i++){
        let [from, to] = links[i].split('-')
        addPath(from, to);
        addPath(to, from);
    }

    return graph
}

const roadGraph = makeGraph(roads);

// State fo deliveery system
class Delivery {
    constructor( place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(dest){
        if(!roadGraph[this.place].includes(dest)) return this;
        else{
            let updatedMails = this.parcels.map(p =>  {
                    if(p.place != this.place) return p            // unpicked parcels remains unchanged
                    return {place : dest, address : dest}         // picked parcel's current state modified
                }   
            ); 
            let remParcels = updatedMails.filter(p => p.place != p.address);  // removing parcels which have reached the destination
            return new Delivery(dest, remParcels)
        }
    }
}


// Moving robot
function runRobot(state, robot, memory){
    for(let i = 0 ; ; i++){
        //if no more parcels are left, return the no of runs completed by robot
        if(state.parcels.length == 0){
            console.log(`The total runs done by robot is ${i}`);
            break;
        }
        let newDir = robot(state);  //selecting direction to move for robot
        state = state.move(newDir.direction); // robot moved to new state
        // memory = action.memory;
        console.log(`Moved to direction : ${newDir.direction}`);
    }
}


// How to randomly select a road form a given junction (array of roads)
function randomPick(arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


// selecting direction for robot, given current state
function robotMove(state){
    return { direction : randomPick(roadGraph[state.place]) };
}


// Adding data for parcels and returning starting state 
Delivery.addParcels = (parcelCount = 5) => {
    let parcels = [];
    for(let i = 0 ; i < parcelCount ; i++){
        let place = randomPick(Object.keys(roadGraph));  // selecting a random place
        let dest;
        do{
            dest = randomPick(Object.keys(roadGraph));
        } while ( place == dest )
        parcels.push({ place , address : dest})  // to make sure , start and destination are not same
    }
    return new Delivery("Post Office", parcels);
}

// starting the simulation for the robot, robot is not smart, randomly picks up place
runRobot(Delivery.addParcels(5), robotMove)



