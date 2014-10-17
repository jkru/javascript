// Create an object that represents a cat. It should have properties for tiredness, hunger, loneliness and happiness
// Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
// Last, write a method that prints out the cat's status in each area.

var cat = {
        tiredness: 20,
        hunger: 20,
        loneliness: 3,
        happiness: 15,
        obedientness: -5000,
        feed: function(food){
            console.log("Om nom nom");
            if (food !=="tuna"){
                this.hunger = this.hunger - 5;}
            else{
                this.hunger -= 10;
            }
        },
        sleep: function(){
            console.log("zzzzz");
            this.tiredness -= 5;
        },
        pet: function(){
            var assholeitude = Math.random();
            if (assholeitude > 0.4){
                this.loneliness += 5;
                console.log("leave me alone");
                }
            else{
                this.loneliness -=5;
                console.log("yay");
            }
        },
        laserpointer: function(){
            console.log("pew pew");
            this.happiness += 5;
        },
        newspaper: function(){
            console.log("sorry, dude.");
            this.obedientness += 5;
        }



}; 
//Semicolon here because we ended the original statement that started on the first line, where we assigned a {} to a variable.

// cat.feed();
// console.log(cat.hunger);

function status() {
    console.log(cat.tiredness);
    console.log(cat.hunger);
    console.log(cat.loneliness);
    console.log(cat.happiness);
    console.log(cat.obedientness);
}

function action(food_type){
    cat.sleep();
    cat.feed(food_type);
    cat.pet();
    cat.laserpointer();
    cat.newspaper();
}

status();
action("tuna");
status();
action("hamburger");
status();
