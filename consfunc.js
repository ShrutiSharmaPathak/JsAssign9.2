function airplane(model,noofseats,maxspeed) //constructor function that makes airplain object
{
    this.modelno=model;
    this.seatcapacity=noofseats;
    this.maximumspeed=maxspeed;
    this.print=function() //method
    {
        return "Plain model is "+ this.modelno +" maximun speed is "+ this.maximumspeed +" seating capacity is " +this.seatcapacity;
    };
       
}
//creating 3 objects of object airplain with different value
//console.log("creating 3 objects of object airplain with different value");
var airplain1=new airplane('M1',30 ,300);
var airplain2=new airplane('M2',33 ,350);
var airplain3=new airplane('M3',40 ,500);

//calling the print method of all the airplain object
console.log("calling the print method of all the airplain object");
console.log(airplain1.print());
console.log(airplain2.print());
console.log(airplain3.print());

// increasing the seating capacity of all the airplain objects by 10;
console.log("increasing the seating capacity of all the airplain objects by 10");
airplain1.seatcapacity=airplain1.seatcapacity+10;
airplain2.seatcapacity=airplain2.seatcapacity+10;
airplain3.seatcapacity=airplain3.seatcapacity+10;

//calling the print method of all the airplain object after increasing the seating capacityby 10;
console.log("calling the print method of all the airplain object after increasing the seating capacityby 10;");
console.log(airplain1.print());
console.log(airplain2.print());
console.log(airplain3.print());

//displaying all the airplain objects before deleting maximum speed
console.log("displaying all the airplain objects before deleting maximum speed");
console.log(airplain1);
console.log(airplain2);
console.log(airplain3);

//delete maximum speed for all the objects
console.log("delete maximum speed for all the object");
delete airplain1.maximumspeed;
delete airplain2.maximumspeed;
delete airplain3.maximumspeed;

//displaying all the airplain objects after deleting maximum speed
console.log("displaying all the airplain objects after deleting maximum speed");
console.log(airplain1);
console.log(airplain2);
console.log(airplain3);

//adding the new property named average speed with value 600 in all the airplain objects; 
console.log("adding the new property named average speed with value 600 in all the airplain objects");
airplain1.avgspeed=600;
airplain2.avgspeed=600;
airplain3.avgspeed=600;

//displaying all the airplain objects after adding new property avgspeed with value 600
console.log("displaying all the airplain objects after adding new property avgspeed with value 600");
console.log(airplain1);
console.log(airplain2);
console.log(airplain3);


